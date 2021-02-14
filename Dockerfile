FROM node:14.15-alpine

# https://github.com/webplug-lab/vue-dockerize.git

# install simple http server for serving static content
# RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY ./package*.json ./ 

# install vue-cli
RUN npm install -g @vue/cli

# install project dependencies
RUN npm install

# update npm
#RUN npm update

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . ./

RUN chmod g+s /app

# build app for production with minification
#RUN npm run build

#EXPOSE 80
#CMD [ "http-server", "dist" ]
CMD [ "npm", "run", "serve" ]
