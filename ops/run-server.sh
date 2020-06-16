NC='\033[0m'
GREEN='\033[0;32m'

rm -rf tmpfile
rm -rf ssmtmpfile
printf "${GREEN}Clean uneccessary files!${NC}\n"
if [ "$(pm2 id hischool-app)" = "[]" ]; then
  printf "${GREEN}Start app!${NC}\n"
  pm2 start npm --name hischool-app -- start src/server/index.js
else
  printf "${GREEN}Restart app!${NC}\n"
  pm2 restart hischool-app
fi
