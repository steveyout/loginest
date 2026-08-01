import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Github, 
  Globe, 
  Copy, 
  Check, 
  Search, 
  Share2, 
  Terminal, 
  Code2, 
  ExternalLink,
  Sparkles,
  Download
} from 'lucide-react';
import { motion } from 'motion/react';

export const SEOAndDeployHub: React.FC = () => {
  const [copiedScript, setCopiedScript] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(key);
    setTimeout(() => setCopiedScript(null), 2000);
  };

  const viteConfigSnippet = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages configuration for Loginest Logistics
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/loginest-logistics/', // Set to your GitHub repository name
  build: {
    outDir: 'dist',
  }
});`;

  const packageJsonScript = `"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}`;

  const ghActionYaml = `name: Deploy Loginest Logistics to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install Dependencies
        run: npm install

      - name: Build SPA Output
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-orange-500" />
          <span>Deployment & Search Optimization</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
          GitHub Pages Deployment & SEO Hub
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Everything required to deploy Loginest Logistics seamlessly on GitHub Pages with maximum search engine visibility and branded assets.
        </p>
      </motion.div>

      {/* Brand Icons & Favicon Download Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6"
      >
        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-orange-500" />
          Drafted Brand Assets & Favicon
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Favicon Box */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#0B132B] p-2 border border-orange-500/30 flex items-center justify-center">
                <img src="/favicon.svg" alt="Loginest Favicon" className="w-full h-full" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Brand Favicon SVG</h4>
                <p className="text-xs text-slate-500 font-mono">/favicon.svg (Isometric Shield & Speed Lines)</p>
              </div>
            </div>

            <a
              href="/favicon.svg"
              download="favicon.svg"
              className="p-3 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 text-xs font-bold flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" /> Download
            </a>
          </div>

          {/* Logo Icon Box */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#0B132B] p-2 border border-orange-500/30 flex items-center justify-center">
                <img src="/icon.svg" alt="Loginest Logo Icon" className="w-full h-full" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">App Logo Icon SVG</h4>
                <p className="text-xs text-slate-500 font-mono">/icon.svg (High-DPI 512x512 PWA Asset)</p>
              </div>
            </div>

            <a
              href="/icon.svg"
              download="icon.svg"
              className="p-3 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 text-xs font-bold flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" /> Download
            </a>
          </div>
        </div>
      </motion.div>

      {/* GitHub Pages Deploy Guide */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6"
      >
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Github className="w-6 h-6 text-orange-500" />
            GitHub Pages Deployment Walkthrough
          </h3>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            100% Static SPA Ready
          </span>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-mono">1</span>
                Update `vite.config.ts` Base Path
              </h4>
              <button
                onClick={() => handleCopy(viteConfigSnippet, 'vite')}
                className="text-xs font-mono text-orange-500 hover:underline flex items-center gap-1"
              >
                {copiedScript === 'vite' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedScript === 'vite' ? 'Copied!' : 'Copy Config'}
              </button>
            </div>
            <pre className="p-4 rounded-2xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
              <code>{viteConfigSnippet}</code>
            </pre>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-mono">2</span>
                Add `gh-pages` Package & Build Scripts in `package.json`
              </h4>
              <button
                onClick={() => handleCopy(packageJsonScript, 'pkg')}
                className="text-xs font-mono text-orange-500 hover:underline flex items-center gap-1"
              >
                {copiedScript === 'pkg' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedScript === 'pkg' ? 'Copied!' : 'Copy Scripts'}
              </button>
            </div>
            <pre className="p-4 rounded-2xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
              <code>{packageJsonScript}</code>
            </pre>
            <p className="text-xs text-slate-500 font-mono">Run command: <code className="text-orange-500">npm install -D gh-pages && npm run deploy</code></p>
          </div>

          {/* Step 3 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-mono">3</span>
                Automated CI/CD GitHub Action Workflow (Optional)
              </h4>
              <button
                onClick={() => handleCopy(ghActionYaml, 'action')}
                className="text-xs font-mono text-orange-500 hover:underline flex items-center gap-1"
              >
                {copiedScript === 'action' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedScript === 'action' ? 'Copied!' : 'Copy YAML'}
              </button>
            </div>
            <pre className="p-4 rounded-2xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
              <code>{ghActionYaml}</code>
            </pre>
            <p className="text-xs text-slate-500 font-mono">Save to <code className="text-orange-500">.github/workflows/deploy.yml</code> in your repository.</p>
          </div>
        </div>
      </motion.div>

      {/* Live SEO Meta Preview Inspector */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6"
      >
        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Search className="w-5 h-5 text-orange-500" />
          Live Search Engine & Open Graph Card Inspector
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Google Search Result Preview */}
          <div className="p-5 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-md space-y-1.5">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">GOOGLE SEARCH PREVIEW</span>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <img src="/favicon.svg" className="w-4 h-4" alt="favicon" />
              <span>https://loginest.logistics</span>
            </div>
            <h4 className="text-blue-700 hover:underline font-medium text-base">
              Loginest Logistics | Global Supply Chain & Smart Freight Management
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Loginest Logistics offers real-time cargo tracking, instant freight rate calculator, automated waybill label generation, fleet analytics, and eco-friendly global supply chain solutions.
            </p>
          </div>

          {/* Open Graph Social Card Preview */}
          <div className="p-5 rounded-2xl bg-[#0B132B] text-white border border-slate-800 shadow-md space-y-3">
            <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider block">OPEN GRAPH / SOCIAL CARD PREVIEW</span>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-brand p-2 shrink-0 flex items-center justify-center">
                <img src="/icon.svg" className="w-full h-full" alt="Icon" />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-sm text-white">Loginest Logistics</h5>
                <p className="text-xs text-slate-400">Intelligent Global Freight & Telemetry Platform</p>
                <span className="text-[10px] text-orange-400 font-mono">loginest.logistics</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};
