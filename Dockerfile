### STAGE 1: Build ###
FROM node:14.10.1-alpine as build
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /app
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.19.2-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]