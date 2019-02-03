# Webpack starter application
This is a simple Webpack 4 tutorial, which should help you familiarize with the basics of webpack.

## Requirements
Node.js 

## Setup

- `npm install`

## Build

- `npm run build` for development mode 

- `npm run build:prod` for production mode

The build commands build our simple app from the `./src` folder and output to `./dist` folder.

## Build in development using webpack-dev-server
- `npm run dev`

This will run webpack in dev mode using webpack-dev-server. It also enables hot reloading, which allows you to
 modify your source code without having to refresh the browser after each change. 

The run command will serve the folder `./dist` using the Express server at http://localhost:8080

## Configuration
Webpack comes with a configuration file with the following structure :
```$json
var config = {
    entry: { ... },
    output: { ... },
    module: {
        rules: [ ...
        ]
    }
}
```

## Loaders
- babel-loader for JS files
- style-loader & css-loader && less-loader for LESS files
- file-loader for HTML files

Here's the complete config for `webpack.config.js`
