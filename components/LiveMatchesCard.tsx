import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LiveMatchesCard() {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">Live Matches</h3>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Match card */}
      <div className="border border-gray-200 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              C
            </div>
            <span className="font-semibold text-gray-900">Chelsea</span>
          </div>
          <span className="text-sm text-gray-600">Premier League</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
              L
            </div>
            <span className="font-semibold text-gray-900">Leicester C</span>
          </div>
        </div>

        {/* Score display */}
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-gray-900">
            1 <span className="text-gray-500 mx-2">:</span> 2
          </div>
        </div>

        {/* Odds buttons */}
        <div className="flex gap-3">
          <button className="flex-1 py-2 bg-gray-100 rounded text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-colors">
            1.8
          </button>
          <button className="flex-1 py-2 bg-gray-100 rounded text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-colors">
            2.1
          </button>
          <button className="flex-1 py-2 bg-gray-100 rounded text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-colors">
            1.2
          </button>
        </div>
      </div>
    </div>
  );
}
