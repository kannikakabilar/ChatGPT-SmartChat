FROM node:latest

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm install --legacy-peer-deps

RUN npm install vite --save-dev

RUN npm install -g vite 

EXPOSE 5173

CMD ["npm", "run", "dev"]