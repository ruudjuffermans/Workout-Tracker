#!/bin/bash

help() {
    echo "Usage: $0 {start|stop|clean|help}"
    echo
    echo "start    - Build and start Docker containers."
    echo "stop     - Stop and remove Docker containers."
    echo "clean    - Remove Docker images, volumes, and unused data."
    echo "help     - Display this help message."
}

# Function to start Docker containers
start() {
    echo "Starting Docker containers..."
    docker-compose up --build
}

# Function to stop Docker containers
stop() {
    echo "Stopping Docker containers..."
    docker-compose down
}

# Function to clean up Docker images, volumes, and unused data
clean() {
    echo "Cleaning up Docker..."
    docker rmi -f $(docker images -aq)
    docker system prune -f
    docker volume rm $(docker volume ls -qf dangling=true)
}

# Check the argument passed
case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    clean)
        clean
        ;;
    help)
        help
        ;;
    *)
        echo "Invalid argument: $1"
        help
        exit 1
        ;;
esac
