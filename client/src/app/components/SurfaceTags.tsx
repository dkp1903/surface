import React, { useState } from 'react';

const SurfaceTags: React.FC = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [testConnectionStatus, setTestConnectionStatus] = useState('');

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

  // Function to handle copying the snippet
  const handleCopy = () => {
    navigator.clipboard.writeText(codeString)
      .then(() => {
        setCopySuccess('Snippet copied!');
        setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
      })
      .catch(() => setCopySuccess('Failed to copy.'));
  };

  // Function to simulate connection testing
  const handleTestConnection = () => {
    setTestConnectionStatus('Testing connection...');
    setTimeout(() => {
      const success = Math.random() > 0.5;  // Random success/failure for simulation
      if (success) {
        setTestConnectionStatus('Connection successful!');
      } else {
        setTestConnectionStatus('Connection failed.');
      }
    }, 2000);  // Simulate a delay for testing
  };

  return (
    <div className="flex-1 bg-white p-6">
      {/* Fix for text color */}
      <h1 className="text-2xl font-semibold mb-4 text-black">Getting started</h1>

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
              <code>{codeString}</code>
            </pre>
            <button onClick={handleCopy} className="bg-blue-500 text-white py-1 px-3 mt-4 rounded">
              Copy Snippet
            </button>
            {copySuccess && <p className="text-green-500 mt-2">{copySuccess}</p>}
          </div>
        )}
      </div>

      <div className="flex items-center mb-4">
        <span className="text-gray-700">Checking for Tag...</span>
      </div>

      {/* Test connection button with status */}
      <button 
        onClick={handleTestConnection} 
        className="bg-gray-200 text-black py-2 px-4 rounded"
      >
        Test connection
      </button>
      {testConnectionStatus && <p className="mt-2 text-gray-700">{testConnectionStatus}</p>}

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
