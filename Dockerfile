# Stage 1
FROM node:14.16.1 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm install
RUN npm install -g @angular/cli@11.2.8
COPY . .
RUN npm run build --prod

# Stage 2
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/app-multiplica /usr/share/nginx/html

#FROM node:14.16.1

# Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json package-lock.json ./

# RUN npm install

# RUN npm install -g npm install -g @angular/cli@11.2.8
# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
# COPY . .

# EXPOSE 4200
# CMD ng serve --host 0.0.0.0
