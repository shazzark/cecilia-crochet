function TabsNavigation({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="border-b border-crochetPrimary-200">
      <nav className="flex overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-4 border-b-2 font-medium text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? "border-crochetPrimary-500 text-crochetPrimary-600 bg-crochetPrimary-50"
                  : "border-transparent text-crochetText-600 hover:text-crochetPrimary-700 hover:bg-crochetPrimary-25"
              }`}
            >
              <Icon className="h-5 w-5 mr-2" />
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default TabsNavigation;
