function ProfileContentHeader({ user }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-crochetPrimary-200 to-crochetAccent-100 flex items-center justify-center overflow-hidden shadow-xl border-4 border-white">
          {user?.user_metadata?.avatar_url ? (
            <img
              src={user.user_metadata.avatar_url}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-5xl font-semibold text-crochetText-700">
              {user?.email?.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className="absolute -bottom-2 -right-2 bg-crochetPrimary-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
          Active
        </div>
      </div>

      <div className="text-center md:text-left flex-1">
        <h2 className="text-3xl font-bold text-crochetText-800 mb-2">
          {user?.user_metadata?.full_name || "Crochet Enthusiast"}
        </h2>
        <p className="text-crochetText-600 text-lg mb-4">{user?.email}</p>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <span className="bg-crochetPrimary-100 text-crochetPrimary-800 px-3 py-1 rounded-full text-sm">
            Member
          </span>
          <span className="bg-crochetAccent-100 text-crochetAccent-800 px-3 py-1 rounded-full text-sm">
            Premium
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileContentHeader;
