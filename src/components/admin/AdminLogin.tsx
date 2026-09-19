import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { Factory, Lock, Mail, ArrowRight, ArrowLeft, ShieldAlert } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const { loginAdmin, setActiveView } = useCatalog();

  const [email, setEmail] = useState('admin@apexplast.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = loginAdmin(email, password);
    if (!success) {
      setError('Invalid admin credentials. Use admin@apexplast.com and admin123');
    }
  };

  const handleQuickDemoFill = () => {
    setEmail('admin@apexplast.com');
    setPassword('admin123');
    setError('');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle industrial grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <button
          onClick={() => setActiveView('public')}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Public Product Showcase</span>
        </button>

        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
            <Factory className="w-7 h-7" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-white font-display">
              APEX<span className="text-blue-500">PLAST</span>
            </span>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Admin Product Management Portal
            </p>
          </div>
        </div>
        <h2 className="mt-6 text-center text-xl font-bold tracking-tight text-white">
          Sign In to Admin Panel
        </h2>
        <p className="mt-1 text-center text-xs text-slate-400">
          Manage product catalog, specs, high-resolution imagery, and categories
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-slate-900 border border-slate-800 py-8 px-6 shadow-2xl rounded-2xl sm:px-10 space-y-5">
          {error && (
            <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Admin Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-800 text-white text-xs rounded-lg border border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-800 text-white text-xs rounded-lg border border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                />
              </div>
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <span>Login to Admin Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Quick Demo Credentials Help */}
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-300">Phase 1 Demo Access:</span>
              <button
                type="button"
                onClick={handleQuickDemoFill}
                className="text-blue-400 hover:underline font-bold text-[11px] cursor-pointer"
              >
                Auto-fill credentials
              </button>
            </div>
            <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700/60 font-mono text-[11px] space-y-0.5 text-slate-300">
              <div>Email: <strong>admin@apexplast.com</strong></div>
              <div>Pass: <strong>admin123</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
