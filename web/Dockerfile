FROM node:12
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json yarn.lock ./
RUN yarn

# Copying source files
COPY . /usr/src/app

# Building app
RUN yarn build

# Running the app
CMD ["yarn", "start"]
