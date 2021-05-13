#!/bin/bash

# Execute test using the exec command for docker-compose
docker-compose exec api npx jest --watchAll --all --runInBand