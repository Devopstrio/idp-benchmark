import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  ShieldCheck, 
  Zap, 
  DollarSign, 
  TrendingUp,
  Cpu,
  Globe,
  Database,
  ArrowUpRight,
  ArrowDownRight,
  Clock
} from 'lucide-react';

const comparisonData = [
  { name: 'Entra ID', security: 92, performance: 85, cost: 70, zeroTrust: 95 },
  { name: 'Okta', security: 88, performance: 92, cost: 65, zeroTrust: 90 },
  { name: 'Ping', security: 85, performance: 80, cost: 75, zeroTrust: 82 },
  { name: 'Auth0', security: 82, performance: 95, cost: 60, zeroTrust: 78 },
  { name: 'Keycloak', security: 75, performance: 72, cost: 95, zeroTrust: 65 },
];

const latencyData = [
  { time: '00:00', entra: 120, okta: 110, auth0: 95 },
  { time: '04:00', entra: 115, okta: 105, auth0: 90 },
  { time: '08:00', entra: 180, okta: 160, auth0: 140 },
  { time: '12:00', entra: 150, okta: 145, auth0: 120 },
  { time: '16:00', entra: 140, okta: 130, auth0: 110 },
  { time: '20:00', entra: 130, okta: 120, auth0: 100 },
];

const KPI_CARDS = [
  { title: 'Best Security', value: 'Entra ID', detail: 'Score: 92/100', color: 'teal', icon: ShieldCheck },
  { title: 'Best Performance', value: 'Auth0', detail: 'Latency: 95ms', color: 'emerald', icon: Zap },
  { title: 'Lowest Cost', value: 'Keycloak', detail: 'Self-hosted model', color: 'teal', icon: DollarSign },
  { title: 'Overall Winner', value: 'Okta', detail: 'Best balance', color: 'emerald', icon: TrendingUp },
];

const ExecutiveOverview = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Identity Provider Benchmarking</h1>
          <p className="text-slate-400">Quantitative comparison of flagship IdPs across core enterprise dimensions.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Download Report
          </button>
          <button className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Start New Test
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-500/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-500`} />
              </div>
              <div className="text-xs font-medium text-emerald-400 flex items-center">
                <ArrowUpRight size={14} className="mr-1" />
                Updated
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-2xl font-bold text-white mt-1">{card.value}</p>
              <p className="text-xs text-slate-400 mt-1">{card.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Capability Comparison Radar */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Cross-Provider Capability Index</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={comparisonData}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis dataKey="name" stroke="#64748b" fontSize={12} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#64748b" fontSize={10} />
                <Radar name="Security" dataKey="security" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.6} />
                <Radar name="Performance" dataKey="performance" stroke="#10b981" fill="#10b981" fillOpacity={0.4} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Latency Comparison */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Auth Latency Comparison (ms)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={latencyData}>
                <defs>
                  <linearGradient id="colorEntra" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorOkta" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="entra" stroke="#14b8a6" strokeWidth={2} fillOpacity={1} fill="url(#colorEntra)" name="Entra ID" />
                <Area type="monotone" dataKey="okta" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorOkta)" name="Okta" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Feature Maturity Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">IdP Maturity Scorecard</h3>
          <button className="text-teal-400 hover:text-teal-300 text-sm font-medium">Full Comparison Table</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Vendor</th>
                <th className="px-6 py-4 font-semibold">MFA Strength</th>
                <th className="px-6 py-4 font-semibold">ZT Maturity</th>
                <th className="px-6 py-4 font-semibold">Federation</th>
                <th className="px-6 py-4 font-semibold">Compliance</th>
                <th className="px-6 py-4 font-semibold">Final Rank</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { vendor: 'Entra ID', mfa: 'High', zt: 'Elite', fed: 'Standard', comp: '100%', rank: 1 },
                { vendor: 'Okta', mfa: 'Elite', zt: 'High', fed: 'Advanced', comp: '98%', rank: 2 },
                { vendor: 'Ping', mfa: 'Advanced', zt: 'Standard', fed: 'Elite', comp: '95%', rank: 3 },
                { vendor: 'Auth0', mfa: 'Standard', zt: 'Developing', fed: 'Advanced', comp: '92%', rank: 4 },
              ].map((row) => (
                <tr key={row.vendor} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-white">{row.vendor}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${row.mfa === 'Elite' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-teal-500/10 text-teal-500'}`}>
                      {row.mfa}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{row.zt}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{row.fed}</td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-mono">{row.comp}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${row.rank === 1 ? 'bg-teal-500 text-slate-900' : 'bg-slate-800 text-slate-400'}`}>
                        {row.rank}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveOverview;
