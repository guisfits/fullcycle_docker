FROM node:15-slim

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

WORKDIR /usr/src/app
RUN mkdir src

COPY package*.json .
RUN npm install

COPY src/ src/

EXPOSE 3000

CMD ["npm", "run", "start"]
