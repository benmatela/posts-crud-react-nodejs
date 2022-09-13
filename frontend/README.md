# Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### How it works:


* This app performs basic CRUD operations
* When the app loads it renders a list of Posts
* To edit/remove a Post, simply click on it from the list.


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) v16.13.1
- `/backend` API should be running. See the README file inside the folder to learn how to run it.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs dependencies.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test ––coverage a`

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
| **public**                 | Public Files.  |
| **src/assets**      | Contains assets for the app 
| **src/component**      | Contains all the components of the app
| **src/services**      | Contains services accessed by the components
| **src/tests**      | Contains all the tests for the app
| **node_modules**         | Contains all  npm dependencies                                                            |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   | tsconfig.json            | Config settings for compiling source code only written in TypeScript    
| tailwind.config.js              | Config settings for TailwindCSS  

## Testing
The tests are  written in Mocha and the assertions done using Chai

``` ts
const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/index");
```

### Example post.spec.js
``` ts
import { cleanup, render } from "@testing-library/react";
import { AddPost } from "../components/posts/AddPost";

it("should render", () => {
    const component = render(
        <AddPost mode={"add"} />
    );

    expect(component).toMatchSnapshot();
});
```


# Frontend
