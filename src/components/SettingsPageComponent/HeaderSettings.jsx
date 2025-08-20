import { ArrowLeftIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

function HeaderSettings({ handleBackToProfile }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <button
        onClick={handleBackToProfile}
        className="flex items-center text-crochetText-600 hover:text-crochetPrimary-700 transition-all duration-200 group"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
        Back to Profile
      </button>
      <h1 className="text-3xl font-bold text-crochetText-800 flex items-center">
        <Cog6ToothIcon className="h-8 w-8 mr-3 text-crochetPrimary-600" />
        Settings
      </h1>
      <div className="w-20"></div> {/* Spacer for balance */}
    </div>
  );
}

export default HeaderSettings;
