// Results Page - Where users see side-by-side comparison of AI model outputs
// Like a Python function that displays experiment results in a table

function ResultsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Experiment Results</h1>
      <p className="text-gray-600 mb-4">
        Compare AI model responses side-by-side to find the best configuration.
      </p>
      
      {/* Placeholder for future results table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 p-4 border-b">
          <h3 className="font-semibold">Results Comparison Table</h3>
        </div>
        
        <div className="p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-medium text-blue-800">Gemini 1.5 Pro</h4>
              <p className="text-sm text-blue-600 mt-2">Model response will appear here</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-medium text-green-800">Gemini 1.5 Flash</h4>
              <p className="text-sm text-green-600 mt-2">Model response will appear here</p>
            </div>
            <div className="bg-purple-50 p-4 rounded">
              <h4 className="font-medium text-purple-800">Custom Config</h4>
              <p className="text-sm text-purple-600 mt-2">Model response will appear here</p>
            </div>
          </div>
          
          <p className="text-gray-500">
            Side-by-side comparison table with response times, costs, and quality metrics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;