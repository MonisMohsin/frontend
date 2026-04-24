import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TrendingNow() {
  const trendingMatches = [
    { team1: 'Chelsea', team2: 'Leicester C', logo1: 'C', logo2: 'L', color1: 'bg-blue-600', color2: 'bg-yellow-400' },
  ];

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 mt-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">Trending Now</h3>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        {trendingMatches.map((match, idx) => (
          <div key={idx} className="flex-1 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className={`w-8 h-8 ${match.color1} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                {match.logo1}
              </div>
              <div className="text-xs font-semibold text-gray-600">vs</div>
              <div className={`w-8 h-8 ${match.color2} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                {match.logo2}
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-gray-600">{match.team1}</p>
              <p className="text-xs font-semibold text-gray-600">{match.team2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
