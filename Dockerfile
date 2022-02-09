FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

# VOLUME ["/app/feedback"] 
# VOLUME ["/app/node_modules"]

# CMD [ "node", "index.js" ]
CMD ["npm", "start"]

    