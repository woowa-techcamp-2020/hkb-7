#!/bin/bash
git fetch
local_hash=$(git rev-parse master)
remote_hash=$(git rev-parse origin/master)

if [ ${local_hash} != ${remote_hash} ];then
  git pull

  date
  echo "server restart"
  
  killall -9 node

  cd client
  npm install
  npm run build

  cd ../server
  npm install
  npm start
else
  echo "Nothing to do"
  exit 0
fi
