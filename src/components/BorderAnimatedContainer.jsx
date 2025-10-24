// How to make animated gradient border 👇
// https://cruip-tutorials.vercel.app/animated-gradient-border/
function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full [background:linear-gradient(45deg,#fff5f0,theme(colors.orange.50)_50%,#fff5f0)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.orange.200/.48)_80%,_theme(colors.rose.400)_86%,_theme(colors.orange.500)_90%,_theme(colors.rose.400)_94%,_theme(colors.orange.200/.48))_border-box] rounded-3xl border-2 border-transparent animate-border flex overflow-hidden shadow-2xl">
      <style>{`
        @keyframes border-rotate {
          0% { --border-angle: 0deg; }
          100% { --border-angle: 360deg; }
        }
        @property --border-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
        .animate-border {
          animation: border-rotate 8s linear infinite;
        }
      `}</style>
      {children}
    </div>
  );
}

export default BorderAnimatedContainer;