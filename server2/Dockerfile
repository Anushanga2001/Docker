# docker image
FROM node:20.2.0-alpine

# set working directory
WORKDIR /app

# copy
COPY . .

# install
RUN npm install

# CMD
CMD ["node", "index.js"]