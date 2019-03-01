const postjson_fetch = function() {
};

postjson_fetch.prototype.accept_form = function(source) {
  this.form = source;
  this.method = source.getAttribute('method');
  this.action = source.getAttribute('action');
};

postjson_fetch.prototype.post_data = function() {
    return fetch(this.action, {
    method: this.method,
    mode: 'cors',
    body: new FormData(this.form)
    }).then(response => response.json());
};

module.exports = new postjson_fetch();
