FROM alpine:latest
# install nodejs
RUN apk add --no-cache nodejs npm
# create working directory
WORKDIR /app
# copy web app code
COPY . /app
# install npm packages
RUN npm install
# expose the port
EXPOSE 3000
# set entrypoint for execution
ENTRYPOINT ["node"]
# provide command for entrypoint
CMD ["server.js"]
