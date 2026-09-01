import fs from "node:fs";
import path from "node:path";
import express from "express";
import { createServer as createViteServer } from "vite";

const app = express();

const frontendRoot = process.cwd();

const vite = await createViteServer({
  root: frontendRoot,

  server: {
    middlewareMode: true,
  },

  appType: "custom",
});

app.use(vite.middlewares);

app.use(async (req, res, next) => {
  try {
    const url = req.originalUrl;

    let template = fs.readFileSync(
      path.resolve(frontendRoot, "index.html"),
      "utf-8",
    );

    template = await vite.transformIndexHtml(url, template);

    const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

    const appHtml = render(url);

    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    );

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (error) {
    vite.ssrFixStacktrace(error);
    next(error);
  }
});

app.listen(5173, () => {
  console.log("SSR server running at http://localhost:5173");
});
