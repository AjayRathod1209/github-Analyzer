import ModeCard from "./ModeCard";
import Footer from "./Footer";

const analyzerFeatures = [
  "Detailed statistics",
  "Language breakdown",
  "Repository insights",
  "Activity metrics",
];

const comparisonFeatures = [
  "Side-by-side statistics",
  "Language comparison",
  "Repository comparison",
  "Activity comparison",
];

function HomeContent() {
  return (
    <main className="w-full flex flex-col items-center px-25 py-8">
      <div className="w-full max-w-7xl min-h-\[750px\] flex flex-col items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-14">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg mb-8 leading-tight">
            Analyze Your GitHub Profile with AI
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
            Choose Your Path
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-400 tracking-wide">
            Analyze and compare GitHub developers with powerful insights
          </p>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-3">
          <ModeCard
            title="Profile Analyzer"
            description="Deep dive into a single developer's GitHub profile"
            icon="📊"
            features={analyzerFeatures}
            path="/analyzer"
            color="blue"
          />

          <ModeCard
            title="Profile Comparison"
            description="Compare two GitHub developers side-by-side"
            icon="⚖️"
            features={comparisonFeatures}
            path="/comparison"
            color="green"
          />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

export default HomeContent;
