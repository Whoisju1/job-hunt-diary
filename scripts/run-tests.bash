#!/bin/bash

docker compose -f docker-compose.test.yml up -d &&
    docker compose exec api-test npx jest --watchAll --all --runInBand
