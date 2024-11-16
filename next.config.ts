// next.config.js

const nextConfig = {
  reactStrictMode: true,
  env: {
    // Expose environment variables to the application
    API_KEY: process.env.API_KEY, // Ensure this is set in your .env file
  },
};

module.exports = nextConfig;
