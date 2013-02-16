#!/bin/bash

ZIP="${PWD}/../hdo-crx.zip"
DIR=`dirname $0`

jar cf "${ZIP}" ${DIR}/*.{js,html,json}
echo "Created ${ZIP}"