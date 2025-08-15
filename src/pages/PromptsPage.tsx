// Prompts Page - Where users write and test prompts with variables
// Like a Python function that handles prompt input and processing

function PromptsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Prompt Engineering</h1>
      <p className="text-gray-600 mb-4">
        Create prompts with variables like {{name}} for batch testing across models.
      </p>
      
      {/* Placeholder for future prompt editor */}
      <div className="space-y-4">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Prompt Input Area</h3>
          <p className="text-gray-600 text-sm">
            Large textarea for writing prompts will go here.
            <br />
            Example: "Hello {{name}}, please explain {{topic}} in simple terms."
          </p>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Variable Configuration</h3>
          <p className="text-gray-600 text-sm">
            Table for defining {{variables}} will go here.
            <br />
            Users can set: name = "Alice", topic = "React hooks"
          </p>
        </div>
      </div>
    </div>
  );
}

export default PromptsPage;