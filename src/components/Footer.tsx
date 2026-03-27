'use client';

export default function Footer() {
  return (
    <footer className="backdrop-blur-xl bg-[#1A1A1D] border-t border-[#3B1C32] shadow-2xl shadow-[#1A1A1D]/50 mt-20 py-12 px-6 md:px-12 lg:px-24">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Mostafa Omar
          </h3>
          <p className="text-gray-300/60 text-sm">
            © 2024 Mostafa Omar. All rights reserved.
          </p>
        </div>

      </div>
      
      <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
        <p className="text-xs text-gray-400">
          Made with ❤️ using Next.js, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

