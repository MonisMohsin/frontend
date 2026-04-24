import React from 'react';
import { ChevronRight } from 'lucide-react';

interface LeagueTableProps {
  title: string;
  teams: Array<{
    name: string;
    initials: string;
    color: string;
    d: number;
    l: number;
    g: number;
    pts: number;
  }>;
}

export default function LeagueTable({ title, teams }: LeagueTableProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Table header */}
      <div className="flex items-center gap-2 mb-3 px-2 text-xs font-semibold text-gray-600 uppercase">
        <div className="flex-1">Team</div>
        <div className="w-8 text-center">D</div>
        <div className="w-8 text-center">L</div>
        <div className="w-8 text-center">G</div>
        <div className="w-12 text-center">Pts</div>
      </div>

      {/* Table rows */}
      <div className="space-y-2">
        {teams.map((team, idx) => (
          <div key={idx} className="flex items-center gap-2 px-2 py-2 hover:bg-gray-50 rounded transition-colors">
            <div className="flex items-center gap-2 flex-1">
              <div className={`w-6 h-6 ${team.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                {team.initials}
              </div>
              <span className="text-sm font-medium text-gray-900">{team.name}</span>
            </div>
            <div className="w-8 text-center text-sm text-gray-600">{team.d}</div>
            <div className="w-8 text-center text-sm text-gray-600">{team.l}</div>
            <div className="w-8 text-center text-sm text-gray-600">{team.g}</div>
            <div className="w-12 text-center text-sm font-semibold text-gray-900">{team.pts}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
