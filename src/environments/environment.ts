// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyBXx6LM4v6n1Ge-TBmVhPOz7Omm5C-yTfc",
    authDomain: "the-talk-ticketing.firebaseapp.com",
    databaseURL: "https://the-talk-ticketing.firebaseio.com",
    projectId: "the-talk-ticketing",
    storageBucket: "the-talk-ticketing.appspot.com",
    messagingSenderId: "1050954402448"
  }
};
