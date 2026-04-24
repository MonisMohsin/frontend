import React from 'react';
import { Heart, Clock, MapPin, ChevronRight } from 'lucide-react';

interface MatchListItemProps {
  team1: string;
  team2: string;
  logo1: string;
  logo2: string;
  color1: string;
  color2: string;
  time: string;
  location: string;
  isFavorite?: boolean;
  isHighlighted?: boolean;
}

export default function MatchListItem({
  team1,
  team2,
  logo1,
  logo2,
  color1,
  color2,
  time,
  location,
  isFavorite,
  isHighlighted,
}: MatchListItemProps) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
        isHighlighted
          ? 'bg-yellow-400 border-yellow-400'
          : 'bg-white border-gray-200 hover:shadow-md'
      }`}
    >
      {/* Team 1 */}
      <div className="flex items-center gap-3 w-32">
        <div className={`w-10 h-10 ${color1} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
          {logo1}
        </div>
        <div className={`text-sm font-semibold truncate ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>
          {team1}
        </div>
      </div>

      {/* vs icon */}
      <div className={`px-2 text-xs font-bold flex-shrink-0 ${isHighlighted ? 'text-white' : 'text-gray-600'}`}>
        vs
      </div>

      {/* Team 2 */}
      <div className="flex items-center gap-3 w-32">
        <div className={`w-10 h-10 ${color2} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
          {logo2}
        </div>
        <div className={`text-sm font-semibold truncate ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>
          {team2}
        </div>
      </div>

      {/* Time */}
      <div className="flex items-center gap-2 flex-1 ml-6">
        <Clock size={16} className={isHighlighted ? 'text-white' : 'text-gray-600'} />
        <span className={`text-sm font-semibold ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>
          {time}
        </span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 flex-1">
        <MapPin size={16} className={isHighlighted ? 'text-white' : 'text-gray-600'} />
        <span className={`text-sm font-semibold ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>
          {location}
        </span>
      </div>

      {/* Heart icon */}
      <button className="p-2 hover:bg-gray-100 rounded transition-colors flex-shrink-0 ml-4">
        <Heart
          size={20}
          className={isFavorite ? 'fill-red-500 text-red-500' : isHighlighted ? 'text-white' : 'text-gray-600'}
        />
      </button>

      {/* View Details */}
      <button className="flex items-center gap-1 ml-4 flex-shrink-0 text-gray-600 hover:text-gray-900 transition-colors">
        <span className={`text-sm font-semibold whitespace-nowrap ${isHighlighted ? 'text-white' : ''}`}>View Details</span>
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
