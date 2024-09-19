import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-6">
      <div className="text-3xl font-bold mb-8">
        <span className="text-blue-600">surface</span>
        <span className="text-black">labs</span>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" className="text-black">Getting Started</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-600">Overview</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-600">Funnels</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-600">Leads</a>
          </li>
          {/* Add more items as necessary */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
