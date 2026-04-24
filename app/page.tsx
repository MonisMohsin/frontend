import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import LiveMatchesCard from '@/components/LiveMatchesCard';
import LeagueTable from '@/components/LeagueTable';
import TrendingNow from '@/components/TrendingNow';
import LatestMatches from '@/components/LatestMatches';

export default function Home() {
  const premierLeagueTeams = [
    { name: 'Liverpool', initials: 'L', color: 'bg-red-600', d: 6, l: 2, g: 21, pts: 33 },
    { name: 'Man United', initials: 'MU', color: 'bg-red-700', d: 3, l: 3, g: 24, pts: 33 },
    { name: 'Leicester City', initials: 'LC', color: 'bg-yellow-500', d: 2, l: 5, g: 21, pts: 32 },
    { name: 'Villarreal', initials: 'V', color: 'bg-yellow-600', d: 8, l: 2, g: 10, pts: 32 },
    { name: 'Villarreal', initials: 'V', color: 'bg-yellow-600', d: 8, l: 3, g: 10, pts: 32 },
  ];

  const laLigaTeams = [
    { name: 'Liverpool', initials: 'L', color: 'bg-red-600', d: 6, l: 2, g: 21, pts: 33 },
    { name: 'Man United', initials: 'MU', color: 'bg-red-700', d: 3, l: 3, g: 24, pts: 33 },
    { name: 'Leicester City', initials: 'LC', color: 'bg-yellow-500', d: 2, l: 5, g: 21, pts: 32 },
    { name: 'Villarreal', initials: 'V', color: 'bg-yellow-600', d: 8, l: 2, g: 10, pts: 32 },
    { name: 'Villarreal', initials: 'V', color: 'bg-yellow-600', d: 8, l: 3, g: 10, pts: 32 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <Navbar />
      
      {/* Main content area */}
      <div className="ml-[70px] mt-16 p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left column - smaller panels */}
          <div className="col-span-3 space-y-6">
            <LiveMatchesCard />
            <LeagueTable title="Premier League" teams={premierLeagueTeams} />
            <LeagueTable title="La Liga" teams={laLigaTeams} />
            <TrendingNow />
          </div>

          {/* Right column - Hero and Latest Matches */}
          <div className="col-span-9">
            <HeroBanner />
            <div className="mt-6">
              <LatestMatches />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
