import { X } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);

    // cleanup function
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div className="flex justify-between items-center bg-white border-b border-orange-200/60 px-6 py-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-200 shadow-md">
            <img 
              src={selectedUser.profilePic || "/avatar.png"} 
              alt={selectedUser.fullName}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Online status indicator */}
          <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm ${
            isOnline ? "bg-green-500" : "bg-gray-400"
          }`}></div>
        </div>

        <div>
          <h3 
            className="text-gray-800 font-medium text-lg" 
            style={{fontFamily: 'Georgia, serif'}}
          >
            {selectedUser.fullName}
          </h3>
          <p 
            className={`text-sm ${isOnline ? "text-green-600" : "text-gray-400"}`}
            style={{fontFamily: 'Georgia, serif'}}
          >
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <button 
        onClick={() => setSelectedUser(null)}
        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-500 hover:text-orange-600 flex items-center justify-center transition-all active:scale-95"
        aria-label="Close chat"
      >
        <X className="w-5 h-5" strokeWidth={2} />
      </button>
    </div>
  );
}

export default ChatHeader;