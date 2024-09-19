import React, { useState } from 'react';

const SurfaceTags: React.FC = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const codeString = `
<script>
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'surface.start': new Date().getTime(),
      event: 'surface.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'surface' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.surface-analytics.com/tag.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'surface', 'SURFACE_TAG_ID');
</script>
  `;

  return (
    <div className="flex-1 bg-white p-6">
      <h1 className="text-2xl font-semibold mb-4">Getting started</h1>

      {/* Accordion for "Install the Surface Tag" */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <div className="cursor-pointer" onClick={toggleAccordion}>
          <h2 className={`text-xl font-bold mb-2 ${isAccordionOpen ? 'text-black' : 'text-gray-800'}`}>
            Install the Surface Tag
          </h2>
          <p className="text-gray-700">Enable tracking and analytics.</p>
        </div>

        {isAccordionOpen && (
          <div className="bg-white p-4 rounded-md border mb-4">
            <pre className="bg-gray-900 text-white p-4 rounded-md text-xs overflow-auto">
              <code>
                {codeString}
              </code>
            </pre>
            <button className="bg-blue-500 text-white py-1 px-3 mt-4 rounded">Copy Snippet</button>
          </div>
        )}
      </div>

      <div className="flex items-center mb-4">
        <span className="text-gray-700">Checking for Tag...</span>
      </div>
      <button className="bg-gray-200 text-black py-2 px-4 rounded">Test connection</button>

      {/* Test Surface Tag Events Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Test Surface Tag Events</h2>
        <p className="text-gray-700 mb-4">Test if the Surface Tag is properly emitting events.</p>
        <button className="bg-gray-200 text-black py-2 px-4 rounded">Test Tag</button>
      </div>
    </div>
  );
};

export default SurfaceTags;
