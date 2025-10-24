import { useState } from "react";
import { MessageCircle, Lock, Mail, Loader, Eye, EyeOff, Shield, Heart, Zap, Sparkles } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const {isLoggingIn, login} = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    login(formData);
    // Simulate login
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleDemo = () => {
    console.log("Demo clicked");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50">
      
      {/* Warm background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-rose-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md lg:max-w-6xl z-10">
        <div className="w-full flex flex-col lg:flex-row bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-amber-200/50 overflow-hidden border border-amber-100/50">
          
          {/* ILLUSTRATION SECTION - Desktop Only (Left Side) */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 relative overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-rose-300 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-300 rounded-full opacity-20 blur-2xl"></div>
            
            {/* Floating hearts */}
            <div className="absolute top-20 right-20 text-rose-300 opacity-40 animate-pulse" style={{animationDuration: '3s'}}>
              <Heart className="w-8 h-8 fill-current" />
            </div>
            <div className="absolute bottom-32 left-16 text-amber-300 opacity-40 animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}>
              <Heart className="w-6 h-6 fill-current" />
            </div>

            <div className="relative z-10 text-center max-w-md">
              
              {/* Main Visual */}
              <div className="mb-10 relative">
                <div className="w-64 h-64 mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-amber-300/30 flex items-center justify-center relative overflow-hidden border-2 border-amber-100">
                  
                  {/* Animated ripple effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-32 h-32 border-2 border-rose-300 rounded-full animate-ping opacity-30" style={{animationDuration: '3s'}}></div>
                    <div className="absolute w-40 h-40 border-2 border-amber-300 rounded-full animate-ping opacity-30" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <MessageCircle className="w-28 h-28 text-rose-400 mb-2" strokeWidth={1.5} />
                    <p className="text-2xl font-light tracking-tight bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                      Milo
                    </p>
                  </div>
                </div>
                
                {/* Floating welcome badge */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl shadow-xl flex items-center justify-center animate-pulse">
                  <Heart className="w-10 h-10 text-white fill-white" />
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-3xl font-light tracking-tight text-gray-800 mb-3" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                Welcome Back
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10 font-light tracking-wide px-4" style={{fontFamily: 'Georgia, serif'}}>
                Your moments are waiting. Continue sharing and connecting with those who matter most.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-normal text-gray-800 text-sm tracking-wide" style={{fontFamily: 'Georgia, serif'}}>Your Community Awaits</h3>
                    <p className="text-gray-600 text-xs font-light tracking-wide" style={{fontFamily: 'Georgia, serif'}}>Reconnect with friends and moments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-normal text-gray-800 text-sm tracking-wide" style={{fontFamily: 'Georgia, serif'}}>Always Secure</h3>
                    <p className="text-gray-600 text-xs font-light tracking-wide" style={{fontFamily: 'Georgia, serif'}}>Your data is protected and encrypted</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-normal text-gray-800 text-sm tracking-wide" style={{fontFamily: 'Georgia, serif'}}>New Moments Daily</h3>
                    <p className="text-gray-600 text-xs font-light tracking-wide" style={{fontFamily: 'Georgia, serif'}}>Discover fresh content from your circle</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-10 pt-8 border-t border-amber-200">
                <p className="text-amber-700 text-sm flex items-center justify-center gap-2 font-light tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  We missed you!
                </p>
              </div>
            </div>
          </div>

          {/* FORM SECTION - Mobile First */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 flex items-center justify-center relative">
            <div className="w-full max-w-md">
              
              {/* Header with Milo Branding */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="relative inline-block mb-4 sm:mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-amber-400 blur-2xl rounded-full opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-rose-500 via-amber-500 to-orange-500 p-3.5 sm:p-4 rounded-3xl shadow-xl">
                    <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl font-light tracking-tight bg-gradient-to-r from-rose-600 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-2" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                  Milo
                </h1>
                <p className="text-xs sm:text-sm text-amber-700/80 font-light tracking-widest mb-3" style={{fontFamily: 'Georgia, serif', letterSpacing: '0.2em'}}>
                  MOMENTS IN LET'S OUT
                </p>
                <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                  Welcome back to your moments
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                
                {/* Email Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-light text-gray-700 mb-2 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-colors group-focus-within:text-amber-500" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-amber-50/30 border-2 border-amber-100 rounded-2xl text-gray-800 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-all font-light tracking-wide"
                      placeholder="you@example.com"
                      style={{fontFamily: 'Georgia, serif'}}
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-light text-gray-700 mb-2 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                    Password
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-colors group-focus-within:text-amber-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-10 sm:pl-12 pr-11 sm:pr-12 py-3 sm:py-3.5 bg-amber-50/30 border-2 border-amber-100 rounded-2xl text-gray-800 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-all font-light tracking-wide"
                      placeholder="Enter your password"
                      style={{fontFamily: 'Georgia, serif'}}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                  <a href="/forgot-password" className="text-xs sm:text-sm text-amber-600 hover:text-amber-700 font-light tracking-wide transition-colors" style={{fontFamily: 'Georgia, serif'}}>
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isLoggingIn}
                  className="w-full py-3.5 sm:py-4 mt-2 bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500 hover:from-rose-600 hover:via-amber-600 hover:to-orange-600 active:scale-[0.98] text-white font-light tracking-wider rounded-2xl shadow-lg shadow-amber-300/40 hover:shadow-xl hover:shadow-amber-400/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 text-sm sm:text-base"
                  style={{fontFamily: 'Georgia, serif'}}
                >
                  {isLoggingIn ? (
                    <>
                      <Loader className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In</span>
                    </>
                  )}
                </button>
              </div>

              {/* Signup Link */}
              <div className="mt-6 sm:mt-7 text-center">
                <p className="text-xs sm:text-sm text-gray-600 font-light tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-amber-600 hover:text-amber-700 font-normal transition-colors">
                    Create Account
                  </Link>
                </p>
              </div>

              {/* Divider */}
              <div className="relative mt-6 sm:mt-7 mb-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-amber-200"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-4 bg-white text-amber-600 font-light tracking-widest" style={{fontFamily: 'Georgia, serif'}}>
                    OR
                  </span>
                </div>
              </div>

              {/* Google Login Button */}
              <button
                onClick={handleGoogleLogin}
                className="w-full py-3 sm:py-3.5 mb-3 bg-white border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm sm:text-base text-gray-700 font-light tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                  Continue with Google
                </span>
              </button>

              {/* Demo Button */}
              <button
                onClick={handleDemo}
                className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 border-2 border-amber-200 hover:border-amber-300 text-amber-700 font-light tracking-wide rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base"
                style={{fontFamily: 'Georgia, serif'}}
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Try Demo</span>
              </button>

              {/* Security Badge - Mobile */}
              <div className="mt-6 pt-6 border-t border-amber-200 lg:hidden">
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm font-light tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <span>Your moments, safely encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;