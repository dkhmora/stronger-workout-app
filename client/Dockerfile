# Stage 1
FROM node:18-alpine

WORKDIR /client
COPY package.json package-lock.json* ./
RUN npm install
COPY . .

CMD ["npm", "start"]

# Uncomment for production build
# RUN npm run build

# # Stage 2
# FROM nginx:1.25.3-alpine

# COPY --from=build-stage /client/build /usr/share/nginx/html
# EXPOSE $REACT_DOCKER_PORT

# CMD nginx -g 'daemon off;'
