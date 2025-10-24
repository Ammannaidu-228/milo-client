import { useChatStore } from "../store/useChatStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";
import { ArrowLeft } from "lucide-react";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  // Function to go back to chat list on mobile
  // const handleBackToList = () => {
  //   setSelectedUser(null);
  // };

  return (
    <div className="relative w-full h-screen md:h-[800px] md:max-w-7xl md:mx-auto">
      <BorderAnimatedContainer>
        {/* LEFT SIDE - Chat/Contact List */}
        <div 
          className={`
            ${selectedUser ? 'hidden md:flex' : 'flex'}
            w-full md:w-96 bg-gradient-to-br from-orange-50/80 via-white to-rose-50/60 backdrop-blur-md flex-col border-r border-orange-200/50
          `}
        >
          <ProfileHeader />
          <ActiveTabSwitch />
          
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-2 scrollbar-thin scrollbar-thumb-orange-300/50 scrollbar-track-transparent">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT SIDE - Chat Container */}
        <div 
          className={`
            ${selectedUser ? 'flex' : 'hidden md:flex'}
            flex-1 flex-col bg-gradient-to-br from-white via-orange-50/20 to-rose-50/30 backdrop-blur-md relative overflow-hidden
          `}
        >
          {/* Subtle background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-rose-100/10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/10 to-rose-200/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-rose-200/10 to-orange-200/10 rounded-full blur-3xl pointer-events-none"></div>
          
          {selectedUser ? (
            <>
              {/* Mobile Back Button */}

              <ChatContainer />
            </>
          ) : (
            <NoConversationPlaceholder />
          )}
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}

export default ChatPage;