# Command for running the docker image on WSL
docker run -it -p 3000:3000 -v /app/node_modules -v /home/joelduda/git_workspace/udemy-docker-and-kubernetes-complete-guide/frontend:/app IMAGE_ID



# test this
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app 