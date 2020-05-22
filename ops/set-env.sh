#!/bin/bash

TMPFILE="tmpfile"
SSMTMPFILE="ssmtmpfile"

API_KEY=$1
AUTH_DOMAIN=$2
DATABASE_URL=$3
PROJECT_ID=$4
STORAGE_BUCKET=$5
MESSAGING_SENDER_ID=$6
APP_ID=$7
MEASUREMENT_ID=$8

rm -rf ${TMPFILE} ${SSMTMPFILE} || true
cp .env.sample ${TMPFILE}
grep -o '\{.*}' .env.sample >> ${SSMTMPFILE}

for envSSM in $(cat ${SSMTMPFILE}); do
  storename=$(echo ${envSSM} | cut -f 1 -d '}' | cut -f 2 -d '{')
  value=${!storename}
  sed -i "s|${envSSM}|$value|g" ${TMPFILE}
done
cp ${TMPFILE} .env
cat .env
