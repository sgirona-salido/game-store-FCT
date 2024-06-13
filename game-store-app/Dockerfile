FROM node:20.11-alpine
WORKDIR /app
COPY . /app

RUN npm install
RUN npm install -g @angular/cli


#CMD ["ng", "serve", "--host", "0.0.0.0"]

CMD ["ng",  "serve", "--proxy-config",  "proxy.conf.json",  "--host", "0.0.0.0"]
