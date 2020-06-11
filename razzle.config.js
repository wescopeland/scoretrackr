module.exports = {
  modify: require('razzle-heroku'),
  plugins: [
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
