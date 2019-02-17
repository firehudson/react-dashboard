import convict from 'convict';

const config = convict({
  server: {
    baseUrl: {
      doc: 'Base url for backend server',
      format: String,
      default: 'http://localhost:3001',
      env: 'BACKEND_URL',
      arg: 'backend_url',
    },
  },
});

export default config;
