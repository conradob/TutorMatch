FROM node:dubnium-stretch
MAINTAINER Conrado Fonseca <conradob@live.com>

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

# APP directory
RUN mkdir -p /home/node
WORKDIR /home/node/

# Install app dependencies
COPY package.json package-lock.json /home/node/
RUN npm install

# Bundle app source
COPY . /home/node

# Build for non-local environment
RUN if [ $NODE_ENV != "local" ] ; then npm run build ; fi

# Expose port
EXPOSE 3000

CMD ["npm", "start"]
