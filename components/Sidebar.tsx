import React from 'react';
import {
  Menu,
  Users,
  TrendingUp,
  Settings,
  Trophy,
  Zap,
  Bookmark,
  Share2,
  Heart,
  Plus,
} from 'lucide-react';

export default function Sidebar() {
  const icons = [
    { Icon: Menu, label: 'Menu' },
    { Icon: Trophy, label: 'Trophy' },
    { Icon: Users, label: 'Players' },
    { Icon: TrendingUp, label: 'Trending' },
    { Icon: Settings, label: 'Settings' },
    { Icon: Zap, label: 'Lightning' },
    { Icon: Bookmark, label: 'Bookmark' },
    { Icon: Share2, label: 'Share' },
    { Icon: Heart, label: 'Heart' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[70px] bg-white border-r border-gray-200 flex flex-col items-center py-4 z-50">
      {/* Top icons */}
      <div className="flex flex-col gap-6 flex-1 items-center">
        {icons.map((item, idx) => (
          <button
            key={idx}
            className="w-10 h-10 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-gray-900 flex items-center justify-center"
          >
            <item.Icon size={20} />
          </button>
        ))}
      </div>

      {/* Floating + button */}
      <button className="mb-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg">
        <Plus size={24} className="text-white font-bold" />
      </button>
    </div>
  );
}
