const rules = [
    // ...other rules
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
  ];
  
  // ...rest of the webpack configuration
  