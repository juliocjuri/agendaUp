echo "Node version"
node -v
echo "Using new node version"
nvm use 18.10

echo "Killing pm2 actions..."
pm2 kill

echo "Jump to app folder"
cd /home/ubuntu/agendaUp

echo "Update app from Git"
git pull origin main

echo "Install app dependencies"
cd ./backend
sudo rm -rf node_modules package-lock.json
npm install

cd ../app
sudo rm -rf node_modules package-lock.json
npm install

cd ./frontend
sudo rm -rf node_modules package-lock.json
npm install

echo "Build your app"
npm run build

echo "Run new PM2 action"
cd ../../../
