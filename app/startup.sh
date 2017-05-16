#!/bin/bash
docker-compose  -f ../docker-compose.yml up mongo &
ROOT_URL=http://localhost:5001 MONGO_URL=mongodb://localhost/daap meteor  run --port 5001 --settings settings.json
