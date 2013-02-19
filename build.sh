#!/bin/bash

set -e

ZIP="${PWD}/tmp/hdo-crx.zip"
ROOT=`dirname $0`

rm -f $ZIP
mkdir -p `dirname ${ZIP}`
jar cf "${ZIP}" ${ROOT}/*.{js,html,json}
echo "Created ${ZIP}"