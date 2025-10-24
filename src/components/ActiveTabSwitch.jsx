import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="p-3 m-2">
      <div className="bg-orange-50/60 border border-orange-200/60 rounded-2xl p-1.5 flex gap-1.5 shadow-sm">
        <button
          onClick={() => setActiveTab("chats")}
          className={`flex-1 px-4 py-2.5 rounded-xl font-normal text-sm tracking-wide transition-all duration-300 ${
            activeTab === "chats" 
              ? "bg-gradient-to-br from-rose-400 to-orange-500 text-white shadow-lg shadow-orange-300/40" 
              : "text-gray-600 hover:text-gray-800 hover:bg-white/60"
          }`}
          style={{fontFamily: 'Georgia, serif'}}
        >
          Chats
        </button>

        <button
          onClick={() => setActiveTab("contacts")}
          className={`flex-1 px-4 py-2.5 rounded-xl font-normal text-sm tracking-wide transition-all duration-300 ${
            activeTab === "contacts" 
              ? "bg-gradient-to-br from-rose-400 to-orange-500 text-white shadow-lg shadow-orange-300/40" 
              : "text-gray-600 hover:text-gray-800 hover:bg-white/60"
          }`}
          style={{fontFamily: 'Georgia, serif'}}
        >
          Contacts
        </button>
      </div>
    </div>
  );
}

export default ActiveTabSwitch;