#!/bin/bash
METEOR_PORT=8001
docker-compose -f app/bin/docker-compose.yml rm -f mongo bigchaindb
docker-compose -f app/bin/docker-compose.yml up mongo bigchaindb &
cd app/ && ROOT_URL=http://localhost:$METEOR_PORT MONGO_URL=mongodb://localhost/daap /Users/Shared/code/meteor/meteor run --port $METEOR_PORT --settings settings.json
