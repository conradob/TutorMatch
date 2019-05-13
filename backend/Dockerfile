FROM node:dubnium-stretch
MAINTAINER Conrado Fonseca <conradob@live.com>

# APP directory
RUN mkdir -p /home/node
WORKDIR /home/node/

# Install app dependencies
COPY package.json package-lock.json /home/node/
RUN npm install

# Bundle app source
COPY . /home/node

# Expose port
EXPOSE 4444

CMD ["npm", "start"]
