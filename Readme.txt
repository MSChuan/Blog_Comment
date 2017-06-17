Demo url: https://mschuan.github.io/Blog-UI/dist_prod/index.html

If clone these files, you can directly run "npm install" to download the dependencies because the configs are all in package.json.
Otherwise, you can create a new folder in your computer and run following commands to re-generate package.json.
PS: Not all followings are used in todolist example, but they are often used by people. 

    npm init
    npm install react react-dom redux react-redux redux-thunk css-loader style-loader sass-loader node-sass file-loader url-loader autoprefixer postcss-loader --save
    npm install webpack -g 
    npm install webpack --save-dev 
    npm install extract-text-webpack-plugin html-webpack-plugin --save-dev
    npm install babel-loader babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-2 babel-plugin-transform-decorators-legacy babel-plugin-import babel-cli --save-dev
    npm install path webpack-dev-server redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor react-hot-loader@next --save-dev
    npm install bootstrap react-bootstrap react-router react-router-dom --save
    npm install jquery simditor expose-loader simditor-emoji --save

How to run the code:

    npm start

open url "localhost:3000" in your browser

Production pack:

    npm run build