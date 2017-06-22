#!/bin/bash
docker-compose -f app/bin/docker-compose.yml rm -f mongo
docker-compose -f app/bin/docker-compose.yml up -d mongo
cd app/ && meteor npm install && ROOT_URL=http://localhost:5001 MONGO_URL=mongodb://localhost/daap meteor  run --port 5001 --settings settings.json
