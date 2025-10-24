import { MessageCircle, Heart, Sparkles, Lock, Zap, Users } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 py-12 relative overflow-hidden bg-gradient-to-br from-rose-50/50 via-amber-50/40 to-orange-50/50">
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-rose-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/15 to-rose-200/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-24 right-1/4 text-rose-400/30 animate-pulse" style={{animationDuration: '4s'}}>
        <Heart className="w-12 h-12 fill-current" />
      </div>
      <div className="absolute bottom-32 left-1/5 text-amber-400/25 animate-pulse" style={{animationDuration: '5s', animationDelay: '1.5s'}}>
        <Sparkles className="w-10 h-10" />
      </div>
      <div className="absolute top-1/3 left-1/6 text-orange-400/20 animate-pulse" style={{animationDuration: '6s', animationDelay: '3s'}}>
        <MessageCircle className="w-9 h-9" />
      </div>

      <div className="relative z-10 max-w-2xl">
        {/* Main icon with enhanced styling */}
        <div className="relative inline-block mb-10">
          {/* Multiple glow layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-amber-400 to-orange-500 blur-3xl rounded-full opacity-30 scale-150 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-300 via-rose-300 to-amber-300 blur-2xl rounded-full opacity-20 scale-125"></div>
          
          {/* Main icon container */}
          <div className="relative w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-300/50 border border-amber-100/50">
            {/* Animated ripples */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-24 h-24 border-2 border-rose-400/40 rounded-2xl animate-ping opacity-30" style={{animationDuration: '3s'}}></div>
              <div className="absolute w-28 h-28 border-2 border-amber-400/40 rounded-3xl animate-ping opacity-20" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
              <div className="absolute w-32 h-32 border-2 border-orange-400/30 rounded-3xl animate-ping opacity-10" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
            </div>
            
            {/* Inner gradient background */}
            <div className="absolute inset-4 bg-gradient-to-br from-rose-100/50 via-amber-100/50 to-orange-100/50 rounded-2xl"></div>
            
            <MessageCircle className="w-16 h-16 text-orange-600 relative z-10" strokeWidth={1.5} />
          </div>
          
          {/* Corner badges with enhanced styling */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-rose-400 via-rose-500 to-pink-500 rounded-2xl shadow-lg shadow-rose-300/50 flex items-center justify-center animate-pulse" style={{animationDuration: '2.5s'}}>
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-400 via-orange-400 to-orange-500 rounded-2xl shadow-lg shadow-orange-300/50 flex items-center justify-center animate-pulse" style={{animationDuration: '3s', animationDelay: '0.5s'}}>
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Heading with enhanced typography */}
        <h1 className="text-5xl font-light text-gray-800 mb-4 tracking-wide" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
          Select a conversation
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-700 mb-8 font-light leading-relaxed max-w-md mx-auto" style={{fontFamily: 'Georgia, serif'}}>
          Choose a contact from the sidebar to start chatting or continue a previous conversation
        </p>

        {/* Elegant divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-rose-300/60 to-transparent"></div>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" style={{animationDuration: '2s'}}></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{animationDuration: '2s', animationDelay: '0.3s'}}></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDuration: '2s', animationDelay: '0.6s'}}></div>
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-300/60 to-transparent"></div>
        </div>

        {/* Feature cards - enhanced grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
          <div className="group p-5 bg-white/70 backdrop-blur-sm rounded-3xl border border-rose-200/60 shadow-lg shadow-rose-100/50 hover:shadow-xl hover:shadow-rose-200/60 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-7 h-7 text-rose-600 fill-rose-600" />
            </div>
            <h4 className="text-base font-medium text-gray-800 mb-2 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
              Connect with Friends
            </h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
              Share moments and memories with those who matter most
            </p>
          </div>

          <div className="group p-5 bg-white/70 backdrop-blur-sm rounded-3xl border border-amber-200/60 shadow-lg shadow-amber-100/50 hover:shadow-xl hover:shadow-amber-200/60 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-amber-600" />
            </div>
            <h4 className="text-base font-medium text-gray-800 mb-2 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
              Real-time Messaging
            </h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
              Instant, secure conversations at the speed of thought
            </p>
          </div>

          <div className="group p-5 bg-white/70 backdrop-blur-sm rounded-3xl border border-orange-200/60 shadow-lg shadow-orange-100/50 hover:shadow-xl hover:shadow-orange-200/60 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-7 h-7 text-orange-600" />
            </div>
            <h4 className="text-base font-medium text-gray-800 mb-2 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
              Beautiful Experience
            </h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
              Elegant and intuitive design that feels like home
            </p>
          </div>
        </div>

        {/* Additional info badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
            <Lock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 font-light" style={{fontFamily: 'Georgia, serif'}}>
              End-to-end encrypted
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 font-light" style={{fontFamily: 'Georgia, serif'}}>
              Your community awaits
            </span>
          </div>
        </div>

        {/* Bottom hint */}
        <div className="flex items-center justify-center gap-3 text-orange-600 text-base font-light tracking-wide animate-pulse" style={{fontFamily: 'Georgia, serif', animationDuration: '3s'}}>
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg shadow-orange-200/50">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <span>Pick a conversation to get started</span>
        </div>
      </div>
    </div>
  );
};

export default NoConversationPlaceholder;