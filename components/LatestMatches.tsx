import React from 'react';
import { ChevronDown } from 'lucide-react';
import MatchListItem from './MatchListItem';

export default function LatestMatches() {
  const matches = [
    {
      team1: 'Barcelona',
      team2: 'Real Madrid',
      logo1: 'B',
      logo2: 'R',
      color1: 'bg-blue-500',
      color2: 'bg-white border-2 border-gray-300',
      time: '5:00 PM',
      location: 'Spain',
      isFavorite: true,
      isHighlighted: true,
    },
    {
      team1: 'NY Yorks',
      team2: 'NY Yorks',
      logo1: 'NY',
      logo2: 'NY',
      color1: 'bg-purple-600',
      color2: 'bg-red-600',
      time: '5:00 PM',
      location: 'London',
      isFavorite: true,
    },
    {
      team1: 'NY Yorks',
      team2: 'NY Yorks',
      logo1: 'NY',
      logo2: 'NY',
      color1: 'bg-blue-700',
      color2: 'bg-green-600',
      time: '5:00 PM',
      location: 'London',
      isFavorite: true,
    },
    {
      team1: 'NY Yorks',
      team2: 'NY Yorks',
      logo1: 'NY',
      logo2: 'NY',
      color1: 'bg-orange-600',
      color2: 'bg-purple-400',
      time: '5:00 PM',
      location: 'London',
      isFavorite: true,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Latest Matches</h3>
        <div className="flex gap-4 items-center">
          <span className="text-sm font-medium text-gray-600">Filter:</span>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-1">
            Football
            <ChevronDown size={14} />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-1">
            Anywhere
            <ChevronDown size={14} />
          </button>
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            View All
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {matches.map((match, idx) => (
          <MatchListItem key={idx} {...match} />
        ))}
      </div>
    </div>
  );
}
