#!/bin/bash
clear
echo Taking down containers
docker-compose down &&
echo Starting containers
docker-compose up "$@" -d &&
docker-compose logs -f
