ssh selfpathKey; cd /var/www/selfpaths-private

git pull origin && yarn install && yarn build && pm2 restart 14