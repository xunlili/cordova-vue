本项目结构是cordova项目里面嵌套了vue手脚架。已经默认添加了android、ios、browser三个平台

在cordova-vue目录下
npm install

在cordova-vue/vue（vue脚手架）目录下
npm install

通过usb连接电脑直接打包到手机
npm run run-android
cordova run ios

直接打包apk到电脑的output
npm run build-android

浏览器调试
npm run run-browser

打包成web压缩包
npm build browser
