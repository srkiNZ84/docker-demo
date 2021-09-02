# NodeJS ExpressJS HelloWorld Docker demo

## About

A simple docker image I use for demo or test of docker build/publish/scan etc...

## How to build

npm init

npm install express --save

docker build -t myimagename:v0.1 .

## How to run

docker run -ti --rm -p 3000:3000 myimagename:v0.1


