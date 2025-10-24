import { MessageCircle, Heart, Sparkles } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-rose-50">
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-orange-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-rose-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-24 right-24 text-orange-300/30 animate-pulse" style={{animationDuration: '3s'}}>
        <Heart className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-40 left-20 text-rose-300/30 animate-pulse" style={{animationDuration: '4s', animationDelay: '1.5s'}}>
        <Sparkles className="w-7 h-7" />
      </div>

      <div className="relative z-10 max-w-2xl">
        {/* Icon container - matching sign-in style */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-orange-500 blur-2xl rounded-full opacity-20"></div>
          <div className="relative w-24 h-24 bg-gradient-to-br from-rose-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-300/40">
            <MessageCircle className="w-12 h-12 text-white" strokeWidth={2} />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-400 to-rose-400 rounded-2xl shadow-xl flex items-center justify-center animate-pulse">
            <Heart className="w-5 h-5 text-white fill-white" />
          </div>
        </div>

        {/* Heading - using serif font like sign-in page */}
        <h2 className="text-4xl font-normal text-gray-700 mb-4 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
          Start your conversation with
        </h2>
        
        <h3 className="text-5xl font-normal bg-gradient-to-r from-rose-500 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-6" style={{fontFamily: 'Georgia, serif'}}>
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-lg font-normal mb-8 leading-relaxed max-w-xl mx-auto" style={{fontFamily: 'Georgia, serif'}}>
          This is the beginning of your conversation. Send a message to start creating moments together!
        </p>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
          <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
        </div>

        {/* Quick action buttons - matching sign-in button style */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button className="px-6 py-3 text-base font-normal text-white bg-gradient-to-r from-rose-400 to-orange-500 hover:from-rose-500 hover:to-orange-600 rounded-2xl shadow-lg shadow-orange-300/40 hover:shadow-xl hover:shadow-orange-400/50 transition-all active:scale-95 flex items-center gap-2.5" style={{fontFamily: 'Georgia, serif'}}>
            <span className="text-xl">👋</span>
            <span>Say Hello</span>
          </button>
          
          <button className="px-6 py-3 text-base font-normal text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-orange-300 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2.5" style={{fontFamily: 'Georgia, serif'}}>
            <span className="text-xl">🤝</span>
            <span>How are you?</span>
          </button>
          
          <button className="px-6 py-3 text-base font-normal text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-orange-300 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2.5" style={{fontFamily: 'Georgia, serif'}}>
            <span className="text-xl">📅</span>
            <span>Meet up soon?</span>
          </button>
        </div>

        {/* Bottom hint */}
        <div className="pt-8 border-t border-orange-200/60 max-w-md mx-auto">
          <p className="text-orange-600 text-base flex items-center justify-center gap-2.5 font-normal" style={{fontFamily: 'Georgia, serif'}}>
            <Sparkles className="w-5 h-5 text-orange-500" />
            Start creating beautiful moments
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;