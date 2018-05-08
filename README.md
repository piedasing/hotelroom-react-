# react + react-router + webpack

###### 安裝套件版本如下:
|    套件    |     版本    |    套件    |     版本    |
| :--------: | :--------: | :--------: | :--------: |
|react|16.3.2|style-loader|0.21.0|
|react-dom|16.3.2|css-loader|0.28.11|
|react-router-dom|4.2.2|babel-loader|    7.1.4   |
|babel-preset-es2015|6.24.1|webpack-cli|2.1.3|
|babel-preset-stage-2|6.24.1|webpack|4.8.1|
|babel-preset-react|6.24.1|webpack-dev-server|3.1.4|

#### Start
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

> 註: 在windows系統中， copy後的路徑需使用 '\' (反斜線)， MacOS則是用 '/' (斜線)

> 檔案請看 [package.json](https://github.com/piedasing/hotelroom-react-/blob/master/package.json)

以上為安裝各個項目的步驟

## 開始使用

##### 建立src資料夾
> mkdir src

> 進入src資料夾中並建立 index.html、 css資料夾 以及 app資料夾

> css資料夾內放置需要的css檔案

>> app資料夾內建立 index.js 、 component資料夾(放置所有react的組件)

>> 詳細內容請見 [src](https://github.com/piedasing/hotelroom-react-/tree/master/src)

##### 目前專案目錄配置如下
> my-project
>> node_modules

>> package.json

>> webpack.config.js

>> src

>>> index.html

>>> app

>>>> component

>>>>> App.js

>>>>> Home.js

>>>>> ...等等

>>>> index.js

>>> css

>>>> style.css

## 啟動
> npm start

>> webpack打包後，即產生dist資料夾，透過loacalhost:8080即可看到成果!!

