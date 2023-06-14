import 'dotenv/config';
import type { AWS } from '@serverless/typescript';
import { modules } from 'src/modules';

const serverlessConfiguration: AWS = {
  service: 'simple-kitchen',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    stage: '{opt:stage}, dev',
    environment: {
      'SPOONACULAR_KEY': process.env.SPOONACULAR_KEY
    }
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node18',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
  // import the function via paths
  functions: {
    ...modules,
  },
};

module.exports = serverlessConfiguration;
