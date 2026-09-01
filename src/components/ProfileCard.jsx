const ProfileCard = ({ user }) => {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-blue-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10">
      {/* Avatar */}
      <img
        src={user?.avatar_url || "https://github.com/identicons/github.png"}
        alt={user?.login || "GitHub user"}
        className="mx-auto h-24 w-24 rounded-full border-2 border-blue-400/40"
      />

      {/* Profile Info */}
      <div className="mt-5 text-center">
        <h2 className="text-2xl font-bold text-white">
          {user?.name || "GitHub Developer"}
        </h2>

        <p className="mt-1 text-blue-400">@{user?.login || "username"}</p>

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-400">
          {user?.bio || "No bio available"}
        </p>

        {/* Extra Info */}
        <div className="mt-4 space-y-2 text-sm text-gray-400">
          {user?.location && <p>📍 {user.location}</p>}

          {user?.company && <p>🏢 {user.company}</p>}

          {user?.blog && (
            <a
              href={user.blog}
              target="_blank"
              rel="noreferrer"
              className="block text-blue-400 transition hover:text-blue-300"
            >
              🔗 Website
            </a>
          )}
        </div>

        {/* GitHub Profile */}
        {user?.html_url && (
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-blue-400/50 hover:bg-white/10"
          >
            View GitHub Profile ↗
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
