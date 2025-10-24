import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";

function ChatsList() {
  const { getMyChatPartners, chats, isUsersLoading, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <div className="space-y-2 p-2">
      {chats.map((chat) => (
        <div
          key={chat._id}
          className="bg-white hover:bg-orange-50 border border-gray-200 hover:border-orange-300 p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-md hover:shadow-orange-200/40 active:scale-98"
          onClick={() => setSelectedUser(chat)}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-200 shadow-sm">
                <img 
                  src={chat.profilePic || "/avatar.png"} 
                  alt={chat.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online status indicator */}
              <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm ${
                onlineUsers.includes(chat._id) ? "bg-green-500" : "bg-gray-400"
              }`}></div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 
                className="text-gray-800 font-medium text-base truncate" 
                style={{fontFamily: 'Georgia, serif'}}
              >
                {chat.fullName}
              </h4>
              <p 
                className={`text-xs mt-0.5 ${
                  onlineUsers.includes(chat._id) ? "text-green-600" : "text-gray-400"
                }`}
                style={{fontFamily: 'Georgia, serif'}}
              >
                {onlineUsers.includes(chat._id) ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatsList;