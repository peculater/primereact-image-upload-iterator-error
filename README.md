# Example case for PrimeReact FileUpload component error in React 18+

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Making the error happen

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Error case

Click "Choose File" to pick a file, then "Upload" to try to upload it.

Notice that there is a stacktrace in the console, pointing to the file uploader.  Notice as well that the component errors before trying to actually upload the file.

In Chrome the error is

```
fileupload.esm.js:108 Uncaught TypeError: Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.
    at _createForOfIteratorHelper (fileupload.esm.js:108:1)
    at upload (fileupload.esm.js:292:1)
    at HTMLUnknownElement.callCallback (react-dom.development.js:4161:1)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4210:1)
    at invokeGuardedCallback (react-dom.development.js:4274:1)
    at invokeGuardedCallbackAndCatchFirstError (react-dom.development.js:4288:1)
    at executeDispatch (react-dom.development.js:9038:1)
    at processDispatchQueueItemsInOrder (react-dom.development.js:9070:1)
    at processDispatchQueue (react-dom.development.js:9083:1)
    at dispatchEventsForPlugins (react-dom.development.js:9094:1)
```

