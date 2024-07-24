#!/bin/bash

DOCKER_NAME="io-beamcalc-web"
DNS="beam.fault.no"
PORT=3008



docker stop ${DOCKER_NAME} && docker rm ${DOCKER_NAME}
docker build . -t ${DOCKER_NAME}
docker run -dit --name ${DOCKER_NAME} --restart unless-stopped -p 127.0.0.1:${PORT}:${PORT} \
 --env "VIRTUAL_HOST=${DNS}" \
 --env "LETSENCRYPT_HOST=${DNS}" \
 ${DOCKER_NAME}