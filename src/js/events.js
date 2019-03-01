const form = document.querySelector('form');
// const postjson_fetch = require('./postjson_fetch');
const postjson_xhr = require('./postjson_xhr');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  postjson_xhr.accept_form(this);
  postjson_xhr.post_data(function(json) {
    console.log('json.username', json.username);
    console.log('json.password', json.password);
  });

  // postjson_fetch.accept_form(this);
  // postjson_fetch.post_data().then(result => {
  //   console.log(result);
  // });
});
