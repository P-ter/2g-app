'use client';

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      {/* Header with photo */}
      <div className="text-center space-y-4">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-pink-200 shadow-lg">
          <Image
            src="/anh-tong.jpg"
            alt="Anh Tong"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-pink-800">
          Hi, Anh Tong! 🌸
        </h1>
      </div>

      {/* Main card */}
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center space-y-8 border-2 border-pink-100">
          <div className="space-y-4">
            <div className="text-6xl">📱✨</div>
            <h2 className="text-xl font-bold text-pink-700 leading-relaxed">
              Would you like to upgrade your 2G speed so that you won't miss any messages anymore? 📱
            </h2>
          </div>

          <div className="space-y-4">
            <Link
              href="/yes"
              className="block w-full bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white font-semibold py-4 px-6 rounded-2xl text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Yes! ✨
            </Link>

            <Link
              href="/no"
              className="block w-full bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-500 hover:to-indigo-600 text-white font-semibold py-4 px-6 rounded-2xl text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              No 💭
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
