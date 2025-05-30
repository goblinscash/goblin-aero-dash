
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ExternalLink, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const votingRewardsData = [
    {
      id: 1,
      pair: "WETH / USDC",
      apy: "0.0405%",
      status: "Concentrated Volatile 100",
      lockId: "Lock #68969-1",
      locked: "2.51561 GOBV2 locked",
      rewards: {
        WETH: { amount: "0.00002", status: "FEE" },
        USDC: { amount: "0.06997", status: "FEE" },
        GOBV2: { amount: "0.00001", status: "INCENTIVE" }
      }
    },
    {
      id: 2,
      pair: "WETH / USDC", 
      apy: "0.0405%",
      status: "Concentrated Volatile 100",
      lockId: "Lock #68969-2",
      locked: "2.51561 GOBV2 locked",
      rewards: {
        WETH: { amount: "0.00002", status: "FEE" },
        USDC: { amount: "0.06997", status: "FEE" },
        GOBV2: { amount: "0.00001", status: "INCENTIVE" }
      }
    },
    {
      id: 3,
      pair: "WETH / USDC",
      apy: "0.0405%", 
      status: "Concentrated Volatile 100",
      lockId: "Lock #68969-3",
      locked: "2.51561 GOBV2 locked",
      rewards: {
        WETH: { amount: "0.00002", status: "FEE" },
        USDC: { amount: "0.06997", status: "FEE" },
        GOBV2: { amount: "0.00001", status: "INCENTIVE" }
      }
    },
    {
      id: 4,
      pair: "WETH / USDC",
      apy: "0.0405%",
      status: "Concentrated Volatile 100", 
      lockId: "Lock #68969-4",
      locked: "2.51561 GOBV2 locked",
      rewards: {
        WETH: { amount: "0.00002", status: "FEE" },
        USDC: { amount: "0.06997", status: "FEE" },
        GOBV2: { amount: "0.00001", status: "INCENTIVE" }
      }
    }
  ];

  const totalPages = Math.ceil(votingRewardsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = votingRewardsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-green-400 transition-colors font-medium">
                Dashboard
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Swap
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Liquidity
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Lock
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Vote
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Incentivize
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Tokens
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Docs
              </a>
            </nav>

            {/* Connect Button */}
            <Button className="bg-green-400 text-black hover:bg-green-300 font-medium px-6">
              Connect
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Liquidity Rewards Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-semibold text-white">Liquidity Rewards</h2>
              <HelpCircle className="w-4 h-4 text-gray-400 hover:text-green-400 cursor-pointer" />
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                Expand All
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <Button className="bg-green-400 text-black hover:bg-green-300 font-medium">
                New Deposit
              </Button>
            </div>
          </div>
        </div>

        {/* Locks Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <h2 className="text-xl font-semibold text-white">Locks</h2>
            <HelpCircle className="w-4 h-4 text-gray-400 hover:text-green-400 cursor-pointer" />
          </div>
          
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-gray-600 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">You can deposit your locks into a Relay strategy</h3>
                    <p className="text-gray-400 text-sm">if you want to maximize your voting power.</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-green-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Voting Rewards Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-semibold text-white">Voting Rewards</h2>
              <HelpCircle className="w-4 h-4 text-gray-400 hover:text-green-400 cursor-pointer" />
            </div>
            <Button 
              variant="outline" 
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Claim All
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Voting Rewards Cards */}
          <div className="space-y-4">
            {currentItems.map((reward) => (
              <Card key={reward.id} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    {/* Left Side - Token Pair */}
                    <div className="flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        {/* ETH Icon */}
                        <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-gray-900 flex items-center justify-center relative z-10">
                          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                            <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#627EEA"/>
                            <path d="M16.498 4V12.87L23.995 16.22L16.498 4Z" fill="white" fillOpacity="0.602"/>
                            <path d="M16.498 4L9 16.22L16.498 12.87V4Z" fill="white"/>
                            <path d="M16.498 21.968V27.995L24 17.616L16.498 21.968Z" fill="white" fillOpacity="0.602"/>
                            <path d="M16.498 27.995V21.967L9 17.616L16.498 27.995Z" fill="white"/>
                            <path d="M16.498 20.573L23.995 16.22L16.498 12.872V20.573Z" fill="white" fillOpacity="0.2"/>
                            <path d="M9 16.22L16.498 20.573V12.872L9 16.22Z" fill="white" fillOpacity="0.602"/>
                          </svg>
                        </div>
                        {/* USDC Icon */}
                        <div className="w-10 h-10 bg-blue-600 rounded-full border-2 border-gray-900 flex items-center justify-center relative">
                          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                            <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#2775CA"/>
                            <path d="M15.5 18.5C19.6421 18.5 23 17.3807 23 16C23 14.6193 19.6421 13.5 15.5 13.5C11.3579 13.5 8 14.6193 8 16C8 17.3807 11.3579 18.5 15.5 18.5Z" fill="white"/>
                            <path d="M23 16V20C23 21.3807 19.6421 22.5 15.5 22.5C11.3579 22.5 8 21.3807 8 20V16C8 17.3807 11.3579 18.5 15.5 18.5C19.6421 18.5 23 17.3807 23 16Z" fill="white"/>
                            <path d="M23 20V24C23 25.3807 19.6421 26.5 15.5 26.5C11.3579 26.5 8 25.3807 8 24V20C8 21.3807 11.3579 22.5 15.5 22.5C19.6421 22.5 23 21.3807 23 20Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium">{reward.pair}</span>
                          <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-medium">
                            {reward.apy}
                          </span>
                        </div>
                        <div className="text-blue-400 text-sm mt-1">{reward.status}</div>
                      </div>
                    </div>

                    {/* Center - Lock Info */}
                    <div className="text-center lg:text-left">
                      <div className="text-white font-medium flex items-center space-x-1">
                        <span>{reward.lockId}</span>
                        <Lock className="w-3 h-3 text-gray-400" />
                      </div>
                      <div className="text-gray-400 text-sm mt-1">{reward.locked}</div>
                    </div>

                    {/* Right Side - Rewards */}
                    <div className="flex flex-col space-y-2">
                      {Object.entries(reward.rewards).map(([token, data]) => (
                        <div key={token} className="flex justify-between items-center min-w-[240px]">
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm font-medium">{data.amount}</span>
                            <span className="text-white text-sm">{token}</span>
                            <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                              data.status === 'FEE' 
                                ? 'bg-gray-700 text-gray-300' 
                                : 'bg-blue-900 text-blue-300'
                            }`}>
                              {data.status}
                            </span>
                          </div>
                        </div>
                      ))}
                      <Button 
                        size="sm" 
                        className="bg-green-400 text-black hover:bg-green-300 self-end mt-3 font-medium"
                      >
                        Claim
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 disabled:opacity-50"
              >
                Previous
              </Button>
              
              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index + 1}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(index + 1)}
                  className={currentPage === index + 1 
                    ? "bg-green-400 text-black hover:bg-green-300" 
                    : "bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                  }
                >
                  {index + 1}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 disabled:opacity-50"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
