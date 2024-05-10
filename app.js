name: Node.js with MongoDB

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build and Run
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14'

      - name: Install Dependencies
        run: npm install

      - name: Start MongoDB Service
        uses: supercharge/mongodb-start@v1
        with:
          mongo-version: 'latest'
          port: 27017

      - name: Connect to MongoDB
        run: |
          node -e "require('./app.js')"
          sleep 5  # Give some time for MongoDB to start before running the application
