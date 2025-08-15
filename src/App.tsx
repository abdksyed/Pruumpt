import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import ConfigurationPage from './pages/ConfigurationPage'
import PromptsPage from './pages/PromptsPage'
import ResultsPage from './pages/ResultsPage'

function App() {
  return (
    <Layout>
      {/* Route definitions - like Flask @app.route() but for frontend */}
      <Routes>
        {/* Default route - redirect to configuration */}
        <Route path="/" element={<Navigate to="/config" replace />} />
        
        {/* Main application routes */}
        <Route path="/config" element={<ConfigurationPage />} />
        <Route path="/prompts" element={<PromptsPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Layout>
  )
}

export default App
