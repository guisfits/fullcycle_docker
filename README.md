# FullCycle | #02 Docker 🐳

This repository contains code from the _FullCycle bootcamp_ of the Docker module.

## Instructions

### Node, NGINX, MySQL

The main application is a **NodeJS** app, with **NGINX** as reverse proxy and **MySQL** as database. To run it:

`docker compose up --build -d`

> Notice: On your first time running, the database will have a higher latency to start, so you should wait a few seconds to test it.

`curl http://localhost:8080`

Every time you fetch this url, it will return a list of names with one more item

### Go

The second one is a **Go** app with a docker image with less than 2MB

You can build the image:  
`docker build -t guisfits/fullcycle ./go`

Or pull from DockerHub:  
`docker pull guisfits/fullcycle`

And run it:  
`docker run guisfits/fullcycle`
