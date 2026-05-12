/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Rocket, 
  Shield, 
  Users, 
  TrendingUp, 
  Layers, 
  Globe, 
  ArrowRight, 
  Zap, 
  Award, 
  Gem, 
  Trophy,
  PieChart,
  Repeat,
  CheckCircle2
} from 'lucide-react';
import { Layout } from './components/Layout';
import { Button, Card, Badge } from './components/UI';
import { Launchpad } from './components/Launchpad';

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: "Multifaceted Sales Platform",
      description: "Built as a versatile Launchpad, allowing for the strategic sale and distribution of any new blockchain project.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Instant Global Exposure",
      description: "Immediate visibility across a vast global network marketing community, ensuring a ready audience from day one.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Built-in Liquidity Solutions",
      description: "Mechanisms to rapidly increase liquidity and the number of active holders through an automated marketing engine.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Integrated Community Growth",
      description: "Platform acts as a community growth engine that drives member acquisition automatically.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Unified Digital Hub",
      description: "Intersection of technical infrastructure and marketing intelligence create a self-sustaining environment.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Global Market Penetration",
      description: "Specifically designed to handle project incubation, making it easier to penetrate international markets.",
      icon: <ArrowRight className="w-6 h-6" />
    }
  ];

  const rewardTiers = [
    { rank: "Rank 1", condition: "5 Direct Active Refer", reward: "25 USDT" },
    { rank: "Rank 2", condition: "5 Direct Rank One", reward: "50 USDT" },
    { rank: "Rank 3", condition: "5 Direct Rank Two", reward: "150 USDT" },
    { rank: "Rank 4", condition: "5 Direct Rank Three", reward: "800 USDT" },
    { rank: "Rank 5", condition: "5 Direct Rank Four", reward: "2000 USDT" },
    { rank: "Rank 6", condition: "5 Direct Rank Five", reward: "8000 USDT" },
  ];

  const boardBenefits = [
    { level: "Board 1", entry: "$30", bonus1: "$30", bonus2: "$100", bonus3: "$500", total: "$630" },
    { level: "Board 2", entry: "$300", bonus1: "$200", bonus2: "$1,000", bonus3: "$5,000", total: "$6,200" },
    { level: "Board 3", entry: "$3,000", bonus1: "$2,000", bonus2: "$7,000", bonus3: "$30,000", total: "$39,000" },
    { level: "Board 4", entry: "$15,000", bonus1: "$10,000", bonus2: "$40,000", bonus3: "$100,000 + Car", total: "$150,000 + Car" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent -z-10 blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-8"
          >
            <SparklesIcon className="w-4 h-4" />
            <span>Next-Gen Web3 Protocol</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            Capitronix <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Launchpad Protocol
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          >
            The ultimate community growth engine connecting crypto startups with global investors through strategic promotion and scalable solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Ecosystem
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="py-12 border-y border-white/5 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Network Reach', value: 'Global' },
              { label: 'Project Incubation', value: '100+' },
              { label: 'Equity Reserved', value: '10%' },
              { label: 'Activation Fee', value: '$30' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Launchpad Section */}
      <Launchpad />

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4">Visionary Protocol</Badge>
              <h2 className="text-4xl font-bold text-white mb-6">What is Capitronix?</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Capitronix Launchpad Protocol is a next-generation token marketing system that helps blockchain projects grow visibility, build strong communities, and expand in the Web3 ecosystem.
              </p>
              <div className="space-y-4">
                {[
                  "Strategic Global Promotion",
                  "Automated Community Growth",
                  "Built-in Liquidity Mechanisms",
                  "Scalable Blockchain Adoption"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-cyan-400/20">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 blur-[100px] opacity-20 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232&ixlib=rb-4.0.3" 
                alt="Web3 Visualization" 
                className="rounded-3xl border border-white/10 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Strategic Advantages</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our multifaceted approach ensures massive success for both developers and investors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="group">
                <div className="mb-6 p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 w-fit group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 line-clamp-3">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activation Section */}
      <section id="ecosystem" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden border-cyan-500/50 bg-gradient-to-br from-slate-900 to-slate-950">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] -z-10" />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="p-4 md:p-8">
                <Badge className="mb-4">Activation Rewards</Badge>
                <h2 className="text-4xl font-bold text-white mb-6">Unlock Pure Potential Only for $30</h2>
                <p className="text-slate-400 mb-8 italic">One-time fee for a lifetime of passive income.</p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: <Gem className="text-cyan-400" />, title: "Digital Assets", desc: "1,000 3Twenty Coins + NFT" },
                    { icon: <Award className="text-yellow-400" />, title: "Rank Bonuses", desc: "Up to $11,525 in pool" },
                    { icon: <PieChart className="text-blue-400" />, title: "Profit Sharing", desc: "10% Global Profit Fund" },
                    { icon: <TrendingUp className="text-green-400" />, title: "Board Engine", desc: "$195,000+ Potential" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{item.title}</h4>
                        <p className="text-slate-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="primary" className="mt-10">Activate Your Account</Button>
              </div>
              <div className="relative p-4 md:p-12 bg-white/5 border-l border-white/5">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white">Affiliate Bonus</h3>
                  <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/5">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-slate-400">Total Reward Cap</span>
                      <span className="text-2xl font-bold text-cyan-400">20%</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-white font-medium">1st Level</span>
                        <span className="text-cyan-400 font-bold">15%</span>
                      </div>
                      <div className="w-full bg-slate-700 h-2 rounded-full">
                        <div className="bg-cyan-500 h-full rounded-full w-[75%]" />
                      </div>
                      {[2, 3, 4, 5, 6].map(lvl => (
                        <div key={lvl} className="flex justify-between text-xs text-slate-500 pt-1">
                          <span>{lvl}{lvl === 2 ? 'nd' : lvl === 3 ? 'rd' : 'th'} Level</span>
                          <span>1%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm italic">
                    The 6-level system is designed to drive viral community growth.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Rewards Tiers Table */}
      <section id="rewards" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Affiliate Excellence Program</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Rank and Reward Tiers</h2>
            <p className="text-slate-400">Cultivate your network to ascend and unlock superior rewards.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-6 px-4 text-slate-400 font-medium">Rank</th>
                  <th className="py-6 px-4 text-slate-400 font-medium">Condition</th>
                  <th className="py-6 px-4 text-slate-400 font-medium">Reward</th>
                  <th className="py-6 px-4 text-slate-400 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {rewardTiers.map((tier, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                    <td className="py-6 px-4 font-bold text-white flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                        i === 5 ? 'bg-yellow-500/20 text-yellow-500' : 'bg-cyan-500/20 text-cyan-400'
                      }`}>
                        {i + 1}
                      </div>
                      {tier.rank}
                    </td>
                    <td className="py-6 px-4 text-slate-400">{tier.condition}</td>
                    <td className="py-6 px-4">
                      <span className="font-bold text-white underline decoration-cyan-500/50 underline-offset-4 decoration-2">
                        {tier.reward}
                      </span>
                    </td>
                    <td className="py-6 px-4">
                      <Trophy className={`w-5 h-5 ${i === 5 ? 'text-yellow-500 animate-pulse' : 'text-slate-700'}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 text-center p-6 rounded-3xl bg-cyan-400/5 border border-cyan-400/20">
            <p className="text-cyan-400 font-medium">Maximize your potential: Earn up to 11,525 USDT by scaling your network.</p>
          </div>
        </div>
      </section>

      {/* Ambassador Pool */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4">Exclusive Elite Group</Badge>
              <h2 className="text-4xl font-bold text-white mb-6">Ambassador Pool <br /><span className="text-cyan-400">10% Collective Ownership</span></h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Capitronix reserves a massive portion of every project's total supply exclusively for our Rank 6 leaders, ensuring they grow as the ecosystem scales.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "10% Equity Reservation", desc: "Exactly 2.1M tokens reserved for every project." },
                  { title: "Collective Ownership Stake", desc: "Our elite group of 100 Ambassadors holds direct ownership." },
                  { title: "Guaranteed Allocation", desc: "21,000 tokens guaranteed per project for each Ambassador." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="flex flex-col items-center text-center p-8">
                <div className="text-4xl font-bold text-white mb-2">2.1M</div>
                <div className="text-slate-500 text-sm">Accumulated Tokens <br /> (100 Projects)</div>
              </Card>
              <Card className="flex flex-col items-center text-center p-8 mt-8">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$2.1M</div>
                <div className="text-slate-500 text-sm">Projected Portfolio <br /> Asset Value</div>
              </Card>
              <div className="col-span-full mt-4">
                <Card className="p-8 border-cyan-500/30">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    Automated Growth Engine
                  </h4>
                  <p className="text-sm text-slate-400">
                    The value of your 10% stake is driven by the Capitronix Launchpad Engine, which manages all global marketing and branding.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Engine Table */}
      <section className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Board Token Sales Engine</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Automated 1:5 person-filling mechanism across four strategic boards for lifetime passive income.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-slate-950/50 rounded-3xl overflow-hidden border border-white/5">
              <thead>
                <tr className="bg-slate-900/50">
                  <th className="py-6 px-6 text-slate-300 font-bold border-b border-white/5">Board Level</th>
                  <th className="py-6 px-6 text-slate-400 font-medium border-b border-white/5 whitespace-nowrap">L-1 (5 User)</th>
                  <th className="py-6 px-6 text-slate-400 font-medium border-b border-white/5 whitespace-nowrap">L-2 (25 User)</th>
                  <th className="py-6 px-6 text-slate-400 font-medium border-b border-white/5 whitespace-nowrap">L-3 (125 User)</th>
                  <th className="py-6 px-6 text-cyan-400 font-bold border-b border-white/5">Total Bonus</th>
                </tr>
              </thead>
              <tbody>
                {boardBenefits.map((board, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 group">
                    <td className="py-6 px-6">
                      <div className="text-white font-bold">{board.level}</div>
                      <div className="text-slate-500 text-xs">{board.entry} Entry</div>
                    </td>
                    <td className="py-6 px-6 text-slate-400">{board.bonus1}</td>
                    <td className="py-6 px-6 text-slate-400">{board.bonus2}</td>
                    <td className="py-6 px-6 text-slate-400">{board.bonus3}</td>
                    <td className="py-6 px-6">
                      <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 font-bold text-sm">
                        {board.total}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA/Contact Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/50 p-12 rounded-[40px] border border-white/10 text-center relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent pointer-events-none" />
            <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-8 animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Join the Future of Web3 Growth</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              Capitronix Launchpad Protocol provides blockchain startups, investors, and affiliates with a powerful ecosystem for token launches and long-term profitability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="px-12 py-5 text-xl w-full sm:w-auto">Get Started Now</Button>
              <div className="flex items-center gap-2 text-slate-400 bg-white/5 px-6 py-4 rounded-full border border-white/5">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span>Secure & Verified Protocol</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
