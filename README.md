 ## K5Web

- 世界业余无线电日 K5Web 正式开源，添加开源许可协议。
- 感谢所有 HAM 。

## 简介
基于https://github.com/silenty4ng/k5web 
原项目本地部署教程


## 必要条件：yarn
## 1.下载源码：
git clone https://github.com/silenty4ng/k5web.git

# 安装依赖
yarn
# 2.开始编译
yarn build
# 调试
yarn dev
 #  生成桌面端软件
yarn make
## 3. 利用nginx部署
下载后安装，将上述编译完成后的dist内的文件，全部复制到nginx的 html 文件下.
之后打开 http://localhost 即可
# 开启nginx服务
start nginx
# 关闭nginx服务
taskkill /f /t /im nginx.exe
