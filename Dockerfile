FROM node:13.0.1

RUN


COPY packeage.json
RUN npm install
COPY . .