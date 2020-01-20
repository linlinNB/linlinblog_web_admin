FROM node:alpine as build

# 将当前项目拷贝到container容器内部
WORKDIR /linlinblog-web-admin
COPY . /linlinblog-web-admin/

# 安装当前项目的依赖相关，并且按照正常逻辑打包
RUN npm install

RUN npm run build

# 配置当前项目的nginx
FROM nginx:1.16.0-alpine

# 将打包的文件放置在container容器内的nginx配置文件内部
COPY --from=build /linlinblog-web-admin/build /usr/share/nginx/html

# 删除原有nginx的配置文件
RUN rm /etc/nginx/conf.d/default.conf

# 替换原有的nginx的配置文件
COPY nginx/nginx.conf /etc/nginx/conf.d

# 开启nginx
EXPOSE 80
CMD ["nginx","-g", "daemon off;"]


