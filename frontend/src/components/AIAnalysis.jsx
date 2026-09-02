const AIAnalysis = ({ analysis, loading, onAnalyze }) => {
  if (!analysis && !loading) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">
              🤖 AI Profile Analysis
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Get AI-powered insights about this GitHub profile
            </p>
          </div>

          <button
            onClick={onAnalyze}
            className="rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Analyze with AI
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="rounded-2xl border border-blue-400/20 bg-white/5 p-6">
        <h2 className="text-xl font-bold text-white">🤖 AI Profile Analysis</h2>

        <div className="mt-6 flex items-center gap-3 text-gray-400">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-blue-400" />

          <span>AI is analyzing the profile...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 p-6">
        <div>
          <h2 className="text-xl font-bold text-white">
            🤖 AI Profile Analysis
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            AI-powered GitHub profile insights
          </p>
        </div>

        <div className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-center">
          <p className="text-2xl font-extrabold text-blue-400">
            {analysis.score}/10
          </p>

          <p className="text-xs text-gray-400">Profile Score</p>
        </div>
      </div>

      {/* Scrollable AI Content */}
      <div className="ai-scrollbar h-[calc(520px-97px)] overflow-y-auto p-6 pr-4">
        {/* Summary */}
        <div className="rounded-xl border border-white/10 bg-black/10 p-4">
          <h3 className="font-semibold text-white">Summary</h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            {analysis.summary}
          </p>
        </div>

        {/* Strengths */}
        <div className="mt-4">
          <h3 className="font-semibold text-white">💪 Strengths</h3>

          <div className="mt-3 space-y-2">
            {analysis.strengths?.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-green-400/10 bg-green-500/5 px-4 py-3 text-sm text-gray-300"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        {/* Weaknesses */}
        <div className="mt-5">
          <h3 className="font-semibold text-white">⚠️ Areas to Improve</h3>

          <div className="mt-3 space-y-2">
            {analysis.weaknesses?.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-yellow-400/10 bg-yellow-500/5 px-4 py-3 text-sm text-gray-300"
              >
                • {item}
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-5">
          <h3 className="font-semibold text-white">🚀 Recommendations</h3>

          <div className="mt-3 space-y-2">
            {analysis.recommendations?.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-blue-400/10 bg-blue-500/5 px-4 py-3 text-sm text-gray-300"
              >
                {index + 1}. {item}
              </div>
            ))}
          </div>
        </div>

        {/* Re-analyze */}
        <button
          onClick={onAnalyze}
          className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-blue-400 transition hover:border-blue-400/40 hover:bg-white/10 hover:text-blue-300"
        >
          ↻ Analyze Again
        </button>
      </div>
    </div>
  );
};

export default AIAnalysis;
