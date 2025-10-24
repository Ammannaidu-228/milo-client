import { useState, useRef } from "react";
import { LogOut, Volume2, VolumeX, Camera, Sparkles } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const mouseClickSound = new Audio("/sounds/mouse-click.mp3");

function ProfileHeader() {
  const { logout, authUser, updateProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="p-5 border-b border-orange-200/60 bg-gradient-to-br from-white via-orange-50/30 to-rose-50/40 relative overflow-hidden shadow-sm">
      
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s'}}></div>
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-rose-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
      
      {/* Floating sparkles */}
      <div className="absolute top-4 right-20 text-orange-300/25 animate-pulse" style={{animationDuration: '4s'}}>
        <Sparkles className="w-4 h-4" />
      </div>
      <div className="absolute bottom-4 left-20 text-rose-300/25 animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}>
        <Sparkles className="w-3 h-3" />
      </div>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          {/* AVATAR */}
          <div className="relative">
            <button
              className="w-16 h-16 rounded-2xl overflow-hidden relative group shadow-lg shadow-orange-200/40 border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:shadow-orange-300/50 hover:scale-105 active:scale-100"
              onClick={() => fileInputRef.current.click()}
            >
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="User image"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-orange-500 opacity-0 group-hover:opacity-95 flex flex-col items-center justify-center transition-all duration-300 z-20">
                <Camera className="w-6 h-6 text-white mb-1" strokeWidth={2} />
                <span className="text-white text-xs font-normal tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                  Change
                </span>
              </div>
            </button>   

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* USERNAME & ONLINE TEXT */}
          <div>
            <h3 className="text-gray-800 text-lg font-medium max-w-[180px] truncate tracking-wide mb-1" style={{fontFamily: 'Georgia, serif'}}>
              {authUser.fullName}
            </h3>

            <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-200 shadow-sm">
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDuration: '2s'}}></div>
              </div>
              <p className="text-green-700 text-xs font-normal tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                Online
              </p>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2.5 items-center">
          {/* SOUND TOGGLE BTN */}
          <button
            className="w-10 h-10 rounded-xl bg-white hover:bg-orange-50 border border-gray-200 hover:border-orange-300 text-gray-600 hover:text-orange-600 transition-all duration-300 hover:shadow-md flex items-center justify-center group active:scale-95"
            onClick={() => {
              mouseClickSound.currentTime = 0;
              mouseClickSound.play().catch((error) => console.log("Audio play failed:", error));
              toggleSound();
            }}
            title={isSoundEnabled ? "Mute sounds" : "Enable sounds"}
          >
            {isSoundEnabled ? (
              <Volume2 className="w-5 h-5 transition-transform group-hover:scale-110" strokeWidth={2} />
            ) : (
              <VolumeX className="w-5 h-5 transition-transform group-hover:scale-110" strokeWidth={2} />
            )}
          </button>

          {/* LOGOUT BTN */}
          <button
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-orange-500 hover:from-rose-500 hover:to-orange-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-300/50 flex items-center justify-center group active:scale-95"
            onClick={logout}
            title="Logout"
          >
            <LogOut className="w-5 h-5 transition-transform group-hover:scale-110" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-200/50 to-transparent"></div>
      </div>
    </div>
  );
}

export default ProfileHeader;