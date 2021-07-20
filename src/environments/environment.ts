// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  tmdbBaseUrl: 'https://api.themoviedb.org',
  tmdbApiVersion: '3',
  tmdbApiNewVersion: '4',
  tmdbApiKey: '3cfc6e1dd231bd1f2caa198e7317a6a4',
  tmdbApiReadAccessKey:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ZjNmUxZGQyMzFiZDFmMmNhYTE5OGU3MzE3YTZhNCIsInN1YiI6IjYwZWZiOTZlYTQ0ZDA5MDAyZDQ0ZjNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvvleDHS5FWTK9UbhKfeuW8L5w4hyjGHAphNtQJuYSY',
  firebase: {
    apiKey: 'AIzaSyAV6yhUmJWeYYgJIH2_Op8VgTMa1JX9mI4',
    authDomain: 'hubmovies-a26fc.firebaseapp.com',
    databaseURL: 'https://hubmovies-a26fc.firebaseio.com',
    projectId: 'hubmovies-a26fc',
    storageBucket: 'hubmovies-a26fc.appspot.com',
    messagingSenderId: '559417527686',
  },
};
