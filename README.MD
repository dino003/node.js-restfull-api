# Creating a RESTful API with Node.js
This repository is about building a RESTful API with Node.js: 

with docker
## Usage
build your image
$ docker build -t <your username>/node-api .

# Run the image
$ docker run -p 49160:8080 -d <your username>/node-api

# Enter the container
$ docker exec -it <container id> /bin/bash

# test 
 Docker mapped the 8080 port inside of the container to the port 49160 on your machine.

Now you can call your app using curl (install if needed via: sudo apt-get install curl):

$ curl -i localhost:49160


without docker
# Usage 
you need to have node installed on your machine
# Run
$ npm install



Make sure to also add your Mongo Atlas Admin Username to a nodemon.json file (which you have to create).

```
{
    "env": {
        "MONGO_ATLAS_PW": "YOUR_MONGO_USER_PW"
    }
}
```
