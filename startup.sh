#!/bin/bash
# This needs to be run with super user privelleges 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
node -e "console.log('Running Node.js ' + process.version)"
node -v
sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo docker ps   
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
sudo yum install git -y
sudo docker-compose down -v
sudo docker stop $(sudo docker ps -aq) && sudo docker rm $(sudo docker ps -aq) && sudo docker rmi $(sudo docker images -q) && sudo docker volume rm $(sudo docker volume ls -q) && sudo docker network rm $(sudo docker network ls -q)
cd ./front-end
npm i 
cd ../back-end
npm i 
sudo docker-compose up postgres
npx prisma generate
npx prisma db push
sudo docker-compose down postgres
cd ..
sudo docker-compose build
sudo docker-compose up
