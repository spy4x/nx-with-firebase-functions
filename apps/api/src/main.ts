import * as functions from 'firebase-functions';
import {name} from 'faker'; // Example of a dependency usage

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send(`Hello from ${name.firstName()}!`);
});
