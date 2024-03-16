FROM nginx:mainline AS web-base

# ポートの解放
EXPOSE 443

# nginx.confのコピー
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf


FROM web-base AS web-dev

# 証明書のコピー
COPY ./nginx/certificate /etc/nginx/ssl

# confファイルのコピー
COPY ./nginx/conf_dev /etc/nginx/conf



FROM node:21.7.1-slim AS app-base

# シェルの指定
SHELL ["/bin/bash", "-c"]

# ポートの解放
EXPOSE 3000

# npmを最新版にする
RUN npm install -g npm@latest


FROM app-base AS app-dev

# 作業ディレクトリの指定
WORKDIR /var/app