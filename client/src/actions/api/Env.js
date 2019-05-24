const config = {
  demo: {
    baseURL: 'http://cold-snack.mnya5sphky.us-west-2.elasticbeanstalk.com/',
  },
  development: {
    baseURL: 'http://localhost:4200/api',
  },
  production: {
    baseURL: '',
  },
  staging: {
    baseURL: '',
  },
};

const env = 'development';
export default config[env];
