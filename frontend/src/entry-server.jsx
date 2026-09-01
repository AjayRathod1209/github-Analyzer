import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";

import App from "./App";

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
