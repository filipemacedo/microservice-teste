FROM 'node:10-alpine'

WORKDIR /app/gateway
COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]