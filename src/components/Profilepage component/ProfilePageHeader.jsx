import { UserIcon } from "@heroicons/react/24/outline";

function ProfilePageHeader() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-crochetPrimary-100">
      <h1 className="text-4xl font-bold text-crochetText-800 mb-2 flex items-center">
        <UserIcon className="h-8 w-8 mr-3 text-crochetPrimary-600" />
        Your Profile
      </h1>
      <p className="text-crochetText-600">
        Manage your account settings and preferences
      </p>
    </div>
  );
}

export default ProfilePageHeader;
