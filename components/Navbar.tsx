import React from 'react';
import { Search, Bell, Mail, Heart, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-[70px] right-0 h-16 bg-amber-50 border-b border-gray-200 flex items-center justify-between px-8 z-40">
      {/* Left menu items */}
      <div className="flex gap-12">
        <button className="font-semibold text-gray-900 hover:text-yellow-500 transition-colors text-sm">
          Live Match
        </button>
        <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
          Scorecard
        </button>
        <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
          Commentary
        </button>
        <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
          Players
        </button>
        <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
          My Matches
        </button>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-6">
        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search Matches, Players, Stats..."
            className="pl-4 pr-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 placeholder-gray-500 w-64 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Icons */}
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
          <Bell size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
          <Mail size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
          <Heart size={20} />
        </button>

        {/* User profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-900">Jane Doe</span>
            <ChevronDown size={16} className="text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}
