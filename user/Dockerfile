FROM 'node:10-alpine'

WORKDIR /app/user
COPY package.json .

RUN npm i
RUN npm i sequelize-cli -g

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "start" ]