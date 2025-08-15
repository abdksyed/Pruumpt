// Configuration Types - TypeScript interfaces for AI model configuration management
// Think of these as Python dataclasses that define the structure of our data

/**
 * Individual AI model configuration
 * Like a Python dataclass with all the fields for one AI model setup
 */
export interface ModelConfiguration {
  /** Unique identifier for this configuration */
  id: string;
  
  /** User-friendly name for this configuration (e.g., "Creative GPT", "Analytical Gemini") */
  name: string;
  
  /** The AI model to use (e.g., "gpt-4", "gemini-pro", "claude-3-sonnet") */
  model: string;
  
  /** Whether this model supports reasoning/chain-of-thought */
  reasoning: boolean;
  
  /** Whether this model can search the web/has internet access */
  search: boolean;
  
  /** Temperature setting (0.0 to 2.0) - controls randomness/creativity */
  temperature: number;
  
  /** Maximum tokens for response length */
  maxTokens: number;
  
  /** Optional API key for this specific model (if different from default) */
  apiKey?: string;
  
  /** Optional custom endpoint URL for self-hosted models */
  endpoint?: string;
}

/**
 * State interface for the Configuration Page component
 * Like defining the shape of your component's state in React
 */
export interface ConfigurationPageState {
  /** Array of model configurations (1-8 items allowed) */
  configurations: ModelConfiguration[];
  
  /** Maximum number of configurations allowed */
  readonly maxConfigurations: 8;
  
  /** Currently selected/active configuration ID for editing */
  activeConfigurationId: string | null;
  
  /** Whether we're currently in edit mode for any configuration */
  isEditing: boolean;
}

/**
 * Props that can be passed to ConfigurationPage component
 * Currently minimal, but allows for future extensibility
 */
export interface ConfigurationPageProps {
  /** Optional initial configurations to load */
  initialConfigurations?: ModelConfiguration[];
  
  /** Callback when configurations change (for parent components) */
  onConfigurationsChange?: (configurations: ModelConfiguration[]) => void;
  
  /** Whether the page is in read-only mode */
  readOnly?: boolean;
}

/**
 * Utility type for creating a new configuration
 * Omits the 'id' field since it will be generated automatically
 */
export type NewModelConfiguration = Omit<ModelConfiguration, 'id'>;

/**
 * Utility type for configuration update operations
 * Makes all fields optional except id (for partial updates)
 */
export type ConfigurationUpdate = Partial<ModelConfiguration> & {
  id: string;
};

/**
 * Available AI model options
 * Like a Python enum defining the models we support
 */
export const AVAILABLE_MODELS = [
  'gpt-4',
  'gpt-4-turbo',
  'gpt-3.5-turbo',
  'claude-3-opus',
  'claude-3-sonnet', 
  'claude-3-haiku',
  'gemini-pro',
  'gemini-1.5-pro',
  'llama-2-70b',
  'llama-2-13b',
] as const;

/**
 * Type for available models (derived from the array above)
 * This ensures TypeScript knows exactly which strings are valid
 */
export type AvailableModel = typeof AVAILABLE_MODELS[number];

/**
 * Default configuration values
 * Like Python default arguments for creating new configurations
 */
export const DEFAULT_CONFIGURATION: NewModelConfiguration = {
  name: '',
  model: 'gpt-4',
  reasoning: false,
  search: false,
  temperature: 0.7,
  maxTokens: 2000,
};

/**
 * Constants for configuration limits and validation
 */
export const CONFIGURATION_LIMITS = {
  MIN_CONFIGURATIONS: 1,
  MAX_CONFIGURATIONS: 8,
  MIN_TEMPERATURE: 0.0,
  MAX_TEMPERATURE: 2.0,
  MIN_MAX_TOKENS: 1,
  MAX_MAX_TOKENS: 8000,
  MAX_NAME_LENGTH: 50,
} as const;

/**
 * Utility functions for working with configurations
 */

/**
 * Generate a new unique ID for a configuration
 * Like Python's uuid.uuid4() but simpler
 */
export function generateConfigurationId(): string {
  return `config_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Create a new configuration with default values and generated ID
 * Like a Python factory function
 */
export function createNewConfiguration(
  overrides: Partial<NewModelConfiguration> = {}
): ModelConfiguration {
  return {
    id: generateConfigurationId(),
    ...DEFAULT_CONFIGURATION,
    ...overrides,
  };
}

/**
 * Validate a configuration object
 * Returns array of error messages (empty if valid)
 */
export function validateConfiguration(config: ModelConfiguration): string[] {
  const errors: string[] = [];
  
  if (!config.name.trim()) {
    errors.push('Configuration name is required');
  }
  
  if (config.name.length > CONFIGURATION_LIMITS.MAX_NAME_LENGTH) {
    errors.push(`Configuration name must be ${CONFIGURATION_LIMITS.MAX_NAME_LENGTH} characters or less`);
  }
  
  if (!AVAILABLE_MODELS.includes(config.model as AvailableModel)) {
    errors.push('Invalid model selected');
  }
  
  if (config.temperature < CONFIGURATION_LIMITS.MIN_TEMPERATURE || 
      config.temperature > CONFIGURATION_LIMITS.MAX_TEMPERATURE) {
    errors.push(`Temperature must be between ${CONFIGURATION_LIMITS.MIN_TEMPERATURE} and ${CONFIGURATION_LIMITS.MAX_TEMPERATURE}`);
  }
  
  if (config.maxTokens < CONFIGURATION_LIMITS.MIN_MAX_TOKENS || 
      config.maxTokens > CONFIGURATION_LIMITS.MAX_MAX_TOKENS) {
    errors.push(`Max tokens must be between ${CONFIGURATION_LIMITS.MIN_MAX_TOKENS} and ${CONFIGURATION_LIMITS.MAX_MAX_TOKENS}`);
  }
  
  return errors;
}