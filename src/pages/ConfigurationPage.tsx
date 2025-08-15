// Configuration Page - Where users set up AI model settings
// Think of this like a Python function that returns JSX instead of a string

function ConfigurationPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AI Model Configuration</h1>
      <p className="text-gray-600 mb-4">
        Set up your AI models for prompt comparison experiments.
      </p>
      
      {/* Placeholder for future configuration forms */}
      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <p className="text-gray-500">
          Model configuration forms will go here.
          <br />
          This is where users will set up Gemini, GPT, etc.
        </p>
      </div>
    </div>
  );
}

// Export as default - this is like Python's "if __name__ == '__main__'"
// It allows other files to import this component
export default ConfigurationPage;