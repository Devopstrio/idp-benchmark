import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ExecutiveOverview from './pages/ExecutiveOverview';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The benchmarking engine is executing synthetic workloads across multi-cloud test tenants. Final scores will be aggregated shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ExecutiveOverview />} />
          <Route path="/security" element={<Placeholder name="Security Capability Benchmarking" />} />
          <Route path="/performance" element={<Placeholder name="Performance & Latency Analysis" />} />
          <Route path="/cost" element={<Placeholder name="IdP Cost Comparison & Modeler" />} />
          <Route path="/zero-trust" element={<Placeholder name="Zero Trust Maturity Comparison" />} />
          <Route path="/federation" element={<Placeholder name="Federation Handshake Handlers" />} />
          <Route path="/api-performance" element={<Placeholder name="Management API Throughput Testing" />} />
          <Route path="/directory" element={<Placeholder name="Directory Sync Performance Analysis" />} />
          <Route path="/maturity" element={<Placeholder name="Feature Maturity Scorecard" />} />
          <Route path="/reports" element={<Placeholder name="Executive Vendor Assessment Reports" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Integration Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
