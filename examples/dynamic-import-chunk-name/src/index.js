// Dynamic import with a named chunk via webpackChunkName magic comment.
import(/* webpackChunkName: "my-foo-chunk" */ './foo.js').then(({ hello }) => {
  document.getElementById('root').innerHTML += `<p>[named] ${hello()}</p>`;
});

// Dynamic import without a chunk name — rspack assigns an automatic chunk id.
import('./foo.js').then(({ hello }) => {
  document.getElementById('root').innerHTML += `<p>[unnamed] ${hello()}</p>`;
});
