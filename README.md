# Project Title - Health Connect

This Project aims to help solve the problem of Supply and Demand mismatch in the Healthcare Industry.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You’ll need to install the latest version of the Ionic CLI and Cordova. Before you do that,
you’ll need a recent version of Node.js. [Download the installer](https://nodejs.org/en/) for
Node.js 6 or greater and then proceed to install the Ionic CLI and Cordova for native app development:

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal / console window. Older versions may produce errors.

### Steps to run the project locally

- Install the latest version of the Ionic CLI and Cordova.
```bash
$ npm install -g cordova ionic
```

There are 4 Folders in this Project.

1 - api-server : This is the folder containing the files for the api-server. Can change directory to this folder and run the command "npm install" to install the node_modules and "nodemon server.js" to run the api server locally.

2 - websocket-io : This is the folder containing the files for websocket-io server. It is used to listen and emit socket connections for chatting. Can change directory to this folder and run command "npm install" to install the node_modules, "ionic cordova prepare" to install plugins and and "node server.js" to start the server locally.

3 - health-connect-normal : This is the folder containing the frontend files used to develop the application. To run the application locally, can change directory to this folder and run command "npm install" to install the node_modules , "ionic cordova prepare" to install plugins and "ionic serve" to start local testing. 

To emulate browser environment, run command "ionic cordova run browser"
To emulate android environment, run command "ionic cordova run android" (Must have android emulator installed in local machine)
To emulate ios environment, run command ionic cordova emulate ios --target="iPhone-7-Plus" (Must have iPhone emulator installed in local machine, target can be any iOS emulator, the above is using iPhone-7-Plus as example)

4 - health-connect-pro : This is the folder containing the frontend files used to develop the application. To run the application locally, can change directory to this folder and run command "npm install" to install the node_modules and "ionic serve" to start local testing. 

To emulate browser environment, run command "ionic cordova run browser"
To emulate android environment, run command "ionic cordova emulate android" (Must have android emulator installed in local machine)
To emulate ios environment, run command "ionic cordova emulate ios --target="iPhone-7-Plus" (Must have iPhone emulator installed in local machine, target can be any iOS emulator, the above is using iPhone-7-Plus as example)



## Live Version of the App

You can access the live version of the application via:

1) Health Connect Professional
Web App
- http://health-connect-pro.s3-website-ap-southeast-1.amazonaws.com

Android Version
- APK File is included in this repository

2) Health Connect Normal
- http://health-connect-normal.s3-website-ap-southeast-1.amazonaws.com

Android Version
- APK File is included in this repository

3) API Server

- Hosted at Heroku, Endpoint is "https://api-server-sheen.herokuapp.com"

4) Websocket Server

- Hosted at Heroku, Endpoint is "https://websocket-io-sheen.herokuapp.com/"

## Enjoy!!

