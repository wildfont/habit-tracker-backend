try {
  process.loadEnvFile();
} catch (error) {
  console.warn(".env file not found, using default environment variables.");
}


const PORT = process.env.PORT || 5005;