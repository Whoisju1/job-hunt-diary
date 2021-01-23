#!/bin/bash

service=api
deploymentFile=master-deployment.yml

# create resources
kubectl apply -f=$deploymentFile &&
# lunch service created from configuration
minikube service $service
