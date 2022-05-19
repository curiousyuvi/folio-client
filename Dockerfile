FROM node:18-slim

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm i

EXPOSE 5000

CMD ["npm","start"]