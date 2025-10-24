import { useRef, useState } from "react";
import { Image, Send, X, Heart } from "lucide-react";
import useKeyboardSound from "../hooks/useKeyboardSound";
import {useChatStore} from "../store/useChatStore";
import toast from "react-hot-toast";
// // Mock hooks for demo - replace with your actual imports
// const useKeyboardSound = () => ({ playRandomKeyStrokeSound: () => {} });
// const useChatStore = () => ({ 
//   sendMessage: (msg) => console.log('Sending:', msg),
//   isSoundEnabled: true 
// });
// const toast = { error: (msg) => console.error(msg) };

function MessageInput() {
  const { playRandomKeyStrokeSound } = useKeyboardSound();
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const fileInputRef = useRef(null);

  const { sendMessage, isSoundEnabled } = useChatStore();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    if (isSoundEnabled) playRandomKeyStrokeSound();

    sendMessage({
      text: text.trim(),
      image: imagePreview,
    });
    setText("");
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="p-6 border-t border-orange-200/60 bg-gradient-to-b from-white to-orange-50/30">
      {imagePreview && (
        <div className="max-w-3xl mx-auto mb-4 flex items-center">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-2xl border-2 border-orange-200 shadow-lg"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-orange-500 flex items-center justify-center text-white hover:from-rose-500 hover:to-orange-600 shadow-md transition-all"
              type="button"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="max-w-3xl mx-auto flex space-x-3">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            isSoundEnabled && playRandomKeyStrokeSound();
          }}
          className="flex-1 bg-white border-2 border-gray-200 focus:border-orange-300 focus:ring-4 focus:ring-orange-100 rounded-2xl py-3 px-5 text-gray-700 placeholder-gray-400 transition-all outline-none"
          placeholder="Type your message..."
          style={{fontFamily: 'Georgia, serif'}}
        />

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={`bg-white border-2 hover:bg-orange-50 rounded-2xl px-4 transition-all ${
            imagePreview 
              ? "border-orange-400 text-orange-600" 
              : "border-gray-200 text-gray-500 hover:border-orange-300 hover:text-orange-600"
          }`}
        >
          <Image className="w-5 h-5" />
        </button>
        <button
          type="submit"
          disabled={!text.trim() && !imagePreview}
          className="bg-gradient-to-r from-rose-400 to-orange-500 text-white rounded-2xl px-4 py-2 font-medium hover:from-rose-500 hover:to-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-300/40"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

export default MessageInput;