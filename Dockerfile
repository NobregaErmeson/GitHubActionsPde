FROM cypress/included:13.7.2

WORKDIR /app

COPY ./package.json ./package.json
COPY ./cypress ./cypress
COPY ./cypress.config.js ./cypress.config.js

RUN npm install

ENTRYPOINT [""]
CMD [ "npx","cypress", "run" ]