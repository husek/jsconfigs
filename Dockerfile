FROM mhart/alpine-node:12 AS builder
WORKDIR /app
COPY . .

ARG NPM_TOKEN
RUN echo ${NPM_TOKEN}

RUN echo "//registry.yarnpkg.com/:_authToken=$NPM_TOKEN" > .npmrc
RUN npm install react-scripts -g --silent
RUN yarn install
RUN rm -f .npmrc
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]