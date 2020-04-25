#!/bin/bash

TMPFILE="tmpfile"
SSMTMPFILE="ssmtmpfile"

apiKey=$1
authDomain=$2
databaseURL=$3
projectId=$4
storageBucket=$5
messagingSenderId=$6
appId=$7
measurementId=$8

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
