### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    - **Callbacks:** Functions passed as arguments to other functions, which are executed after a certain operation has completed.
    - **Promises:** Objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
    - **Async/Await:** Syntactic sugar built on top of Promises that allows for writing asynchronous code that looks synchronous, making it easier to read and maintain.

- What is a Promise?

    A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states:

    - **Pending:** The initial state, neither fulfilled nor rejected.
    - **Fulfilled:** The operation completed successfully.
    - **Rejected:** The operation failed.

- What are the differences between an async function and a regular function?

    - **Async Function:**
        - Declared with the async keyword.
        - Implicitly returns a Promise.
        - Can use the await keyword to pause execution until a Promise is resolved.
    - **Regular Function:**
        - Does not return a Promise unless explicitly returning one.
        - Cannot use await without being declared as async.

- What is the difference between Node.js and Express.js?

    - **Node.js:**
        - A JavaScript runtime built on Chrome's V8 JavaScript engine.
        - Allows the execution of JavaScript code server-side.
        - Provides modules and libraries for file system operations, HTTP servers, and more.
    - **Express.js:**
        - A web application framework built on top of Node.js.
        - Simplifies the creation of web servers and APIs.
        - Provides middleware and routing capabilities to handle HTTP requests and responses.

- What is the error-first callback pattern?

    - The error-first callback pattern is a convention used in Node.js where callbacks are provided with an error object as the first argument, followed by any result data. This pattern allows for consistent error handling and control flow in asynchronous operations.

- What is middleware?

    - Middleware refers to functions that have access to the request and response objects in an Express.js application. They can perform tasks such as logging, authentication, data parsing, and more before passing control to the next middleware function or route handler.

- What does the `next` function do?

    - The `next` function in Express.js is used to pass control to the next middleware function in the stack. If not called, the request will be left hanging. It's essential for chaining multiple middleware functions together.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)


```js

      async function getUsers() {
        const elie = await $.getJSON('https://api.github.com/users/elie');
        const joel = await $.getJSON('https://api.github.com/users/joelburton');
        const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

        return [elie, matt, joel];
      }

```
