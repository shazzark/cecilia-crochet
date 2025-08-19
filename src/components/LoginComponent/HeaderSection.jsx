function HeaderSection() {
  return (
    <div className="bg-crochetAccent-200 p-6 relative">
      {/* Decorative yarn-like stripe at top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-crochetAccent-400 via-crochetAccent-300 to-crochetAccent-500"></div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-crochetPrimary-800 font-serif">
        Welcome Back
      </h1>
      <p className="text-center text-crochetPrimary-600 mt-2">
        Stitch your way back into your account
      </p>
    </div>
  );
}

export default HeaderSection;
