# Build client
FROM node:14-alpine as client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Build server
FROM node:14-alpine as server
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ .
RUN npm run build

# Start server
FROM node:14-alpine
WORKDIR /app
COPY --from=client /app/client/build ./client/build
COPY --from=server /app/server/dist ./server
EXPOSE 5000
CMD ["npm", "run", "start:prod"]