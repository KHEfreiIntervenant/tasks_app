FROM node:17.3.0 as base

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./




FROM base as test
RUN npm install -g
COPY . .
CMD [ "npm", "test", "--", "--watchAll=false" ]

# FROM base as prod
# RUN npm ci --production
# COPY . .
# CMD [ "node", "server.js" ]




# # add app
# COPY . ./app

# # start app
# CMD ["npm", "start"]
