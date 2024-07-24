FROM node:18-slim as base

ENV NODE_ENV=production

ARG PORT=3002
ENV PORT $PORT
EXPOSE $PORT

RUN npm i npm@latest -g

COPY --chown=node:node ./entrypoint.sh /usr/local/bin/


RUN chmod +x /usr/local/bin/entrypoint.sh

USER node

WORKDIR /app

COPY --chown=node:node package.json package-lock.json* ./
RUN npm ci && npm cache clean --force
ENV PATH /app/node_modules/.bin:$PATH

COPY --chown=node:node . ./src


ENTRYPOINT ["entrypoint.sh"]
CMD ["node", "src/app.js"]