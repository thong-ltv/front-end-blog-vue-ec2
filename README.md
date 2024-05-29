# Front-end a blog use vue js

# Step 1: Create an simple app use vue js
+ node: v20.11.1
+ npm: 8.19.3
+ vue: 3.4.21

# Step 2: Create an ec2 instance, allow port: 5173 in inbound security, ubuntu system

# Step 3: Setup Eslactic Ip for ec2 instance

# Step 4: Connect an instance by ssh client

# Step 5: Setup packages
```
sudo su -
```
```
sudo apt update
```
```
sudo apt upgrade
```

# Step 6: Install nvm and node
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```
```
source ~/.bashrc
```
```
nvm install node
```
To check version:
```
nvm -v
node -v
```

# Step 7: Install nginx, git, pm2
```
sudo apt install nginx
```
```
sudo apt install git
```
```
npm install pm2 -g
```

# Step 8: Clone code from github and run
```
git clone https://github.com/thong-ltv/front-end-blog-vue-ec2.git
```
```
cd front-end-blog-vue-ec2
```
```
npm run dev
```
=> app run on: http://{elastic-ip}:5173/

# Step 9: Run app by use pm2 
```
npm run build
```
```
pm2 serve dist 5173 --name "vue-app" –spa
```

# Step 10: Config nginx to hidden port on url
```
cd ../
```
```
cd /etc/nginx/sites-available/
```
```
sudo nano default
```
then, pass code below location /
```
proxy_pass http://localhost:5173;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
```
ctrl + 0, ctrl + x  to exit

start app:
```
sudo systemctl restart nginx
```

# Step 11: Create free domanin name on noip.com

# Step 12: Config SSL for domain name use certbot (certbot auto config SSL in nginx)
```
sudo apt-get update
```
```
sudo apt-get install certbot python3-certbot-nginx
```
```
sudo certbot --nginx -d domain name
```
