#!/bin/bash

# version number should be the first argument
image_version=$1

echo $image_version | grep -G '^[0-9]+$'

if ! [[ $image_version =~ ^[0-9]+$ ]];
  then
  echo "\"$image_version\" is not an interger."
  exit 1
fi

image_name=whoisju1/job-hunt-diary-api:$image_version

echo building image \"$image_name\"
docker image build $image ./api &&
docker push $image &&
echo \"$image_name\" pushed to Docker Hub.
