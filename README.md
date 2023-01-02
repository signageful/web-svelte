# Signageful Website

## Host on our Bare Metal Machine

```
sudo adduser \
   --system \
   --shell /bin/bash \
   --gecos 'Signageful Web' \
   --group \
   --disabled-password \
   --home /home/signageful-web \
   signageful-web
```

### Setup Private Key and Public Key

```bash
sudo su - signageful-web
ssh-keygen -t rsa -b 4096 -m PEM -C "github-actions-signageful-web"
```

### Copy Public Key to authorized key

Grab the conents of `~/.ssh/id_rsa.pub` with `cat` and append it to `~/.ssh/authorized_keys` with `>>`.

```bash
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
cat ~/.ssh/gh-actions.pub >> ~/.ssh/authorized_keys
```

### Setup Secrets for GitHub Actions

```bash
# copy the output
cat ~/.ssh/id_rsa

# Github Secret location
Settings -> Secrets -> Actions -> New repository secret
PRIVATE_KEY = "Copy generated private key from vps to github secret"
HOST = "YOUR SERVER ADDRESS, example: 172.41.91.123" # hostname -I
USERNAME = "YOUR SERVER USERNAME, example: signageful-web"
```

### nginx config

```bash
sudo nano /etc/nginx/sites-available/signageful.com
```

```nginx
server {
	server_name signageful.com;
    listen 80;
	listen [::]:80;

	location / {
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header Host $http_host;
		proxy_pass http://127.0.0.1:3000;
	}

	location ~ /.well-known {
		allow all;
	}
}
```

```bash
sudo ln -s /etc/nginx/sites-available/signageful.com /etc/nginx/sites-enabled/signageful.com
sudo nginx -t 
sudo systemctl restart nginx
```