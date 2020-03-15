const firebase = require("firebase/app");
import "firebase/database";
import "firebase/firebase-auth";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref().remove();

// database.ref("expenses").on("value", snapshot => {
//   const arr = [];
//   snapshot.forEach(snap => {
//     arr.push({
//       id: snap.key,
//       ...snap.val()
//     });
//   });
//   console.log(arr);
// });

// var x = 0;
// expenses.forEach(expense => {
//   database.ref("expenses").push(expense);
// });

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.val());
// });

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.val());
// });

// databse.ref("expenses").once()

// //create
// database
//   .ref()
//   .set({
//     name: "Nico",
//     age: 43,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google"
//     },
//     isSingle: true,
//     location: {
//       city: "Paris",
//       country: "France"
//     }
//   })
//   .then(() => {
//     console.log("Person successfully saved");
//   })
//   .catch(error => {
//     console.log("An error as occured while saving person, ", error);
//   });

// // read

// database.ref().on("value", snapshot => {
//   console.log(snapshot.val());
// });

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Error while fetching data", e);
//   }
// );

// database.ref().update({
//   job: {
//     title: "Software developer",
//     company: "steam"
//   }
// });

// .then(() => {
//   console.log("Person successfully retrieve");
// })
// .catch(error => {
//   console.log("An error as occured while retrieving person, ", error);
// });

// // update
// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     job: {
//       title: "Software developer",
//       company: "Amazon"
//     },
//     location: {
//       city: "New york",
//       country: "France"
//     }
//   })
//   .then(() => {
//     console.log("Person successfully updated");
//   })
//   .catch(error => {
//     console.log("An error as occured while updating person, ", error);
//   });

// database
//   .ref()
//   .update({
//     name: "Andrew",
//     age: 26,
//     job: "Software developer",
//     isSingle: null
//   })
//   .then(() => {
//     console.log("Person successfully updated");
//   })
//   .catch(error => {
//     console.log("An error as occured while updating person, ", error);
//   });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Successfully removed");
//   })
//   .catch(error => {
//     console.log("Error while removing, ", error);
//   });
