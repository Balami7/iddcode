"use client";

import React from 'react';

const MaintenanceMarquee = () => {
  return (
    <div className="w-full bg-yellow-400 border-y-2 border-black overflow-hidden py-10">
      {/* Use the custom CSS class here */}
      <div className="animate-marquee-custom">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-black font-black uppercase text-xs tracking-widest mx-4">
              Maintenance going on, we will be back online in 48hrs
            </span>
            <span className="w-2 h-2 bg-black rounded-full mx-4"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceMarquee;
