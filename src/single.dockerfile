FROM sonarlint:4.40

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN groupadd -r appuser && useradd -r -g appuser appuser
USER appuser

EXPOSE 8080

CMD ["npm", "start"]