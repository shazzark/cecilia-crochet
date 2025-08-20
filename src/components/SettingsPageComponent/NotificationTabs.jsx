import Primarybutton from "../common/button/PrimaryButton";

function NotificationTabs({
  notificationSettings,
  setNotificationSettings,
  handleNotificationUpdate,
}) {
  return (
    <div className="animate-fadeIn max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 border border-crochetPrimary-200 rounded-lg hover:shadow-md transition-shadow duration-200">
          <div>
            <h4 className="font-medium text-crochetText-800">
              Email Notifications
            </h4>
            <p className="text-sm text-crochetText-600">
              Receive emails about your account activity
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notificationSettings.emailNotifications}
              onChange={(e) =>
                setNotificationSettings({
                  ...notificationSettings,
                  emailNotifications: e.target.checked,
                })
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-crochetPrimary-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-crochetPrimary-500"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border border-crochetPrimary-200 rounded-lg hover:shadow-md transition-shadow duration-200">
          <div>
            <h4 className="font-medium text-crochetText-800">
              Push Notifications
            </h4>
            <p className="text-sm text-crochetText-600">
              Get notified about new patterns and updates
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notificationSettings.pushNotifications}
              onChange={(e) =>
                setNotificationSettings({
                  ...notificationSettings,
                  pushNotifications: e.target.checked,
                })
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-crochetPrimary-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-crochetPrimary-500"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border border-crochetPrimary-200 rounded-lg hover:shadow-md transition-shadow duration-200">
          <div>
            <h4 className="font-medium text-crochetText-800">
              Marketing Emails
            </h4>
            <p className="text-sm text-crochetText-600">
              Receive offers and promotional content
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notificationSettings.marketingEmails}
              onChange={(e) =>
                setNotificationSettings({
                  ...notificationSettings,
                  marketingEmails: e.target.checked,
                })
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-crochetPrimary-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-crochetPrimary-500"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border border-crochetPrimary-200 rounded-lg hover:shadow-md transition-shadow duration-200">
          <div>
            <h4 className="font-medium text-crochetText-800">
              Project Updates
            </h4>
            <p className="text-sm text-crochetText-600">
              Get notified about your saved projects
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notificationSettings.projectUpdates}
              onChange={(e) =>
                setNotificationSettings({
                  ...notificationSettings,
                  projectUpdates: e.target.checked,
                })
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-crochetPrimary-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-crochetPrimary-500"></div>
          </label>
        </div>

        <div className="flex justify-end pt-6">
          <Primarybutton onClick={handleNotificationUpdate}>
            Save Notification Settings
          </Primarybutton>
        </div>
      </div>
    </div>
  );
}

export default NotificationTabs;
