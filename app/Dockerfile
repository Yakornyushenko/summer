FROM node:14-alpine as client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

FROM node:14-alpine as server
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ .
RUN npm run build

FROM node:14-alpine
WORKDIR /app
COPY --from=client /app/client/build ./client/build
COPY --from=server /app/server/dist ./server
EXPOSE 5000
CMD ["npm", "run", "server:prod"]