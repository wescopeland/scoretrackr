module.exports = {
  modify: require('razzle-heroku'),
  plugins: [
    'compression',
    {
      name: 'typescript',
      options: {
        forkTsChecker: {
          tsconfig: './tsconfig.json',
          tslint: './tslint.json',
          watch: './src',
          typeCheck: true
        }
      }
    }
  ]
};
