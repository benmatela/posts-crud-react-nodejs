# Backend

This project was written with [Node.js](https://nodejs.org/en/) v16.13.1

### How it works:


* Backend for `/frontend` app.
* Allows CRUD operations 


# Environment variables
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|NODE_ENV           | Node server value            | "development"      |
|SERVER_PORT           | Node server value            | 3001      |
|SERVER_HOSTNAME           | Node server value            | "0.0.0.0"      |
|CORS           | Node server value            | "http://localhost:3000"      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) v16.13.1

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs dependencies.

### `npm start`

Runs the app in the development mode.\
Endpoint example: [http://localhost:3001/posts](http://localhost:3001/posts)

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.


## Project Structure
The folder structure of this app:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from your build.  |
| **src/endpoints**      | Insomia call examples 
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
| **src/services**      | Services define functions to serve our routes. 
| **src/util**              | Common libraries and configurations to be used across the app.  
| **src/util**/config.js              | Initializes environment variables.  
| **src/util**/logging.js              | Creates logging for the app.  
| **src/routes**           | Contain all our routes                      
| **src/models**           | Models for the entire app 
| **src**/index.js         | Entrypoint to express app                                                               |
| **tests**/         | Tests for the app           
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   | tsconfig.json            | Config settings for compiling source code only written in TypeScript    


## Testing
The tests are  written in Mocha and the assertions done using Chai

``` ts
"chai": "^4.3.6",
"mocha": "^9.2.2",
"supertest": "^6.2.4"
```

### Example post.test.js
``` ts
const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/index");

describe("GET posts", () => {
    it("should return a list of posts", (done) => {
      request(app)
        .get("/api/v1/posts")
        .expect(200)
        .then((res) => {
          const response = res._body;

          expect(response).to.be.a("array").of.length(100);

          done();
        })
        .catch((err) => done(err));
    });
});
```

# Backend
