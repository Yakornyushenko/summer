FROM node:14-alpine as client
WORKDIR /summer/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

FROM node:14-alpine as server
WORKDIR /summer/server
COPY server/package*.json ./
RUN npm install
COPY server/ .
RUN npm run build

FROM node:14-alpine
WORKDIR /summer
COPY --from=client /summer/client/build ./client/build
COPY --from=server /summer/server/dist ./server
EXPOSE 5000
CMD ["npm", "run", "start:prod"]