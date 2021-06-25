# Command for running the docker image on WSL
docker run -it -p 3000:3000 -v /app/node_modules -v /home/joelduda/git_workspace/udemy-docker-and-kubernetes-complete-guide/frontend:/app joelduda/frontend



# test this - guide said it wouldn't work on WSL2
# update - seems to work fine for me?
docker run -p 3000:3000 -v /home/node/app/node_modules -v $(pwd):/home/node/app joelduda/frontend