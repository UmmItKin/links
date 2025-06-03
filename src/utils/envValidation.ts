// Environment validation utility
export const validateEnvironment = () => {
  const requiredEnvVars = {
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
  };

  const missing: string[] = [];
  const present: string[] = [];

  Object.entries(requiredEnvVars).forEach(([key, value]) => {
    if (!value || value.trim() === '') {
      missing.push(key);
    } else {
      present.push(key);
    }
  });

  console.log('Environment Variables Status:');
  if (present.length > 0) {
    console.log('✅ Present:', present);
  }
  if (missing.length > 0) {
    console.log('❌ Missing:', missing);
    console.log('Analytics features will be disabled.');
  }

  return {
    isValid: missing.length === 0,
    missing,
    present
  };
};

// Call this during app initialization
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  validateEnvironment();
} 