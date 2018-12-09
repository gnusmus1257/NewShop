// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBOl4H6IduVD8C6pJ8gd-XJHlh5ODh6_oU',
    authDomain: 'shop-b7ac7.firebaseapp.com',
    databaseURL: 'https://shop-b7ac7.firebaseio.com',
    projectId: 'shop-b7ac7',
    storageBucket: 'shop-b7ac7.appspot.com',
    messagingSenderId: '46182963584'
  },
  algolia: {
  	appId: 'GN8EKPWZQ1',
  	apiKey: 'efbe87c7d034c0bc1948ade6ca97bb64',
    indexName: 'getstarted_actors',
    urlSync: false
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
