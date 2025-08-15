// Layout Component - Navigation wrapper for all pages
// Think of this like a base template in Django that wraps all your pages

import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  // useLocation is like getting the current URL in a Flask request
  const location = useLocation();
  
  // Helper function to check if a nav item is active (current page)
  const isActive = (path: string) => location.pathname === path;
  
  const navigationItems = [
    { path: '/config', label: 'Configuration', description: 'Set up AI models' },
    { path: '/prompts', label: 'Prompts', description: 'Write and test prompts' },
    { path: '/results', label: 'Results', description: 'Compare responses' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header - Like a navigation bar in any web framework */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          {/* App Title */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-gray-900">Pruumpt</h1>
              <span className="text-sm text-gray-500 hidden md:inline">
                AI Model Comparison Tool
              </span>
            </div>
            
            {/* Navigation Links using Shadcn/UI Buttons */}
            <nav className="flex space-x-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  asChild
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  className={cn(
                    'transition-all duration-200',
                    isActive(item.path) && 'bg-blue-600 text-white hover:bg-blue-700'
                  )}
                >
                  {/* Link component from React Router - like URL routing */}
                  <Link 
                    to={item.path}
                    className="px-4 py-2"
                    title={item.description} // Show description on hover as tooltip
                  >
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area - Where page components render */}
      <main className="container mx-auto">
        {children}
      </main>
    </div>
  );
}