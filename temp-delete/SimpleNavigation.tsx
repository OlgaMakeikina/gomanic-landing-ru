'use client';

import Link from 'next/link';

export default function SimpleNavigation() {
  return (
    <nav className="bg-[#FEFEFE] border-b border-[#444f55]/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-2xl font-horizon text-[#444f55] hover:text-[#3a424a] transition-colors"
          >
            Gomanic Brasil
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/#services" 
              className="text-[#444f55]/80 hover:text-[#444f55] transition-colors font-garet"
            >
              Serviços
            </Link>
            <Link 
              href="/vip-pass" 
              className="bg-[#444f55] text-white px-4 py-2 rounded-lg hover:bg-[#3a424a] transition-colors font-garet font-medium"
            >
              VIP Pass
            </Link>
            <Link 
              href="/#contact" 
              className="text-[#444f55]/80 hover:text-[#444f55] transition-colors font-garet"
            >
              Contato
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-[#444f55] hover:text-[#3a424a] p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}