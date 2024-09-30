import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'dashboard',
  remotes: ['login', 'todo'],
};

export default config;
