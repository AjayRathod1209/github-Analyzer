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
    <main className="w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <div className="mx-auto flex min-h-[650px] w-full max-w-7xl flex-col items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 sm:min-h-[700px] sm:p-8 md:p-10 lg:p-12 xl:p-14">
        {/* Heading */}
        <div className="mb-8 w-full text-center sm:mb-10 md:mb-12">
          <h1 className="mb-5 bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent drop-shadow-lg sm:text-4xl md:text-5xl lg:mb-8 lg:text-6xl">
            Analyze Your GitHub Profile with AI
          </h1>

          <h2 className="mb-3 text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
            Choose Your Path
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed tracking-wide text-gray-400 sm:text-base">
            Analyze and compare GitHub developers with powerful insights
          </p>
        </div>

        {/* Cards */}
        <div className="mb-8 grid w-full grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:mb-3 lg:gap-10">
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
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default HomeContent;
