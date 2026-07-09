"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, MapPin, Calendar, Search, X } from 'lucide-react';

export default function AdminFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentCity = searchParams.get('city') || '';
  const currentDate = searchParams.get('date') || '';
  
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState(currentCity);
  const [date, setDate] = useState(currentDate);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    
    // Reset to page 1 on new filter
    params.set('page', '1');
    
    if (city) params.set('city', city);
    else params.delete('city');
    
    if (date) params.set('date', date);
    else params.delete('date');
    
    router.push(`/admin?${params.toString()}`);
    setIsOpen(false);
  };

  const handleClear = () => {
    setCity('');
    setDate('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('city');
    params.delete('date');
    params.set('page', '1');
    router.push(`/admin?${params.toString()}`);
    setIsOpen(false);
  };

  const hasActiveFilters = !!currentCity || !!currentDate;

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
          hasActiveFilters || isOpen 
            ? 'bg-black text-white border-black' 
            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
        }`}
      >
        <Filter size={14} />
        Filter
        {hasActiveFilters && (
          <span className="flex items-center justify-center w-4 h-4 ml-1 text-[10px] font-bold bg-white text-black rounded-full">
            {(currentCity ? 1 : 0) + (currentDate ? 1 : 0)}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-50 p-4 animate-in fade-in slide-in-from-top-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-900">Filter Inquiries</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          </div>
          
          <form onSubmit={handleApply} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">City</label>
              <div className="relative">
                <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input 
                  type="text" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Indore..."
                  className="w-full pl-8 pr-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Event Date</label>
              <div className="relative">
                <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-2 pt-4 border-t border-gray-100">
              <button 
                type="button"
                onClick={handleClear}
                className="flex-1 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Clear
              </button>
              <button 
                type="submit"
                className="flex-[2] flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-black rounded-md hover:bg-gray-900 transition-colors"
              >
                <Search size={12} />
                Apply Filters
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* Invisible overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
