
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: __dirname + "/src",
  entry: {
    javascript: "./app.jsx",
    html: "./index.html",
  },

  output: {
    filename: "app.js",
    /*
     * The location where the generated files are stored.
     * This entire directory is uploaded to the deployment location
     */
    path: __dirname + "/dist",
  },

  module: {
    loaders: [
      {
        /*
         * Apply transform to all .js files that
         * are not in node_modules
         */

        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          "react-hot",
          "eslint-loader",
          "babel-loader"
        ],
      },

      {
        /*
         * Process SCSS files from bottom to top
         * first SASS and then autoprefixer
         */
        test: /\.scss$/,
        include: /src/,
        loaders: [
                'style',
                'css',
                'autoprefixer?browsers=last 3 versions',
                'sass?outputStyle=expanded'
            ]
        },

      {
        /*
         * Copy all html files to dist dir
         */
        test: /\.(html|json)$/,
        loader: "file?name=[name].[ext]",
      },

      {
        /*
         * Move all image type files to public folder
         * use require to pick them up again
         */
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file?name=public/[name].[ext]",
      },

      {
        test: /\.(ico)$/i,
        loader: "file?name=[name].[ext]"
      },

    ],
  },
  resolve: {
    root: __dirname,
    // alias directories to search for
    alias: {
        "Main": 'src/component/Main/Main',
        "style": 'src/style.scss',
        "AppDispatcher": "src/dispatcher/AppDispatcher",
        "Step1": "src/component/Steps/Step1",
        "Step5": "src/component/Steps/Step5",
        "StepsIndicator": "src/component/Steps/StepsIndicator",

        "SubLOStore": "src/store/SubLOStore",
        "StepsStore": "src/store/StepsStore",
        "SubLOConstant": "src/constant/SubLOConstant",
        "StepsConstant": "src/constant/StepsConstant",
        "SubLOAction": "src/action/SubLOAction",
        "StepsAction": "src/action/StepsAction",
    },
    modulesDirectories: ["node_modules", "images"],
    // allows files to be required without extensions
    extensions: ["", ".js", ".jsx", ".json"]
  }
}
