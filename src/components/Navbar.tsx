'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig, SERVICES_MENU } from '@/config/site';

interface NavbarProps {
  sticky?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ sticky = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const servicesMenuMobileRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={`${
        sticky ? 'sticky top-0' : ''
      } z-50 bg-white border-b border-gray-200 shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 gap-3 group" aria-label={siteConfig.company.name}>
            <img src="/images/logiclayer-icon-option-monogram.svg" alt="" className="h-10 w-10 transition-transform duration-200 group-hover:scale-[1.04]" />
            <span className="hidden leading-none sm:block"><strong className="block font-mono text-sm tracking-[0.12em] text-slate-950">LOGICLAYER</strong><small className="mt-1 block font-mono text-[9px] tracking-[0.26em] text-slate-500">SOLUTIONS</small></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0.5">
            {siteConfig.navigation.map((item) => {
              if (item.label === 'Services') {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    ref={servicesMenuRef}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 underline-offset-4 hover:text-blue-600 hover:underline focus-visible:underline transition-colors"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      aria-haspopup="true"
                      aria-expanded={isServicesOpen}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Services Mega Menu */}
                    {isServicesOpen && (
                      <div className="absolute left-0 mt-0 w-96 bg-white border border-gray-200 shadow-xl rounded-lg py-6 px-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        {SERVICES_MENU.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            className="block group/item"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors">
                                {service.label}
                              </div>
                              <div className="text-sm text-gray-600">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href={siteConfig.cta.href}
              className="whitespace-nowrap px-4 py-2 text-sm bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              {siteConfig.cta.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden pb-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="space-y-1 pt-4">
              {siteConfig.navigation.map((item) => {
                if (item.label === 'Services') {
                  return (
                    <div key={item.label} ref={servicesMenuMobileRef}>
                      <button
                        className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center justify-between"
                        onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
                        aria-haspopup="true"
                        aria-expanded={isServicesOpenMobile}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            isServicesOpenMobile ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Mobile Services Submenu */}
                      {isServicesOpenMobile && (
                        <div className="bg-gray-50 space-y-1 animate-in fade-in duration-150">
                          {SERVICES_MENU.map((service) => (
                            <Link
                              key={service.id}
                              href={service.href}
                              className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-white transition-colors"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsServicesOpenMobile(false);
                              }}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4 px-4">
                <Link
                  href={siteConfig.cta.href}
                  className="block w-full text-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {siteConfig.cta.label}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
