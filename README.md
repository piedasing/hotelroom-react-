# react + react-router + webpack

###### 創建資料夾並進到資料夾中
> mkdir my-project
> cd my-project

###### 初始化專案(產生package.json)
> npm init

## Install
#### 安裝 react、react-dom
> npm install react react-dom --save

#### 安裝 babel
> npm install babel-loader babel-preset-react babel-preset-es2015 babel-preset-stage-2 --save

#### 安裝 react-router
> npm install react-router-dom --save

#### 安裝 webpack
> npm install webpack webpack-dev-server webpack-cli --save

#### 建立 webpack.config.js (類似 gulp 的 gulpfile.js)
> 檔案請看 [webpack.config.js](https://github.com/piedasing/hotelroom-react-/blob/master/webpack.config.js)

#### 修改package.json
> "scripts"內改成 :
>> "start": "npm run build",

>> "copy": "copy src\\index.html dist\\index.html && copy src\\css\\style.css dist\\style.css",

>> "build": "webpack -d && npm run copy && webpack-dev-server --content-base src/ --inline --hot --history-api-fallback",

>> "build:prod": "webpack -p && npm run copy "

> 檔案請看 [package.json](https://github.com/piedasing/hotelroom-react-/blob/master/package.json)


