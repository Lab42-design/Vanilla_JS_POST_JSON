const postjson_xhr = function() {};

postjson_xhr.prototype.accept_form = function(source) {
  this.form = source;
  this.data = new FormData(this.form);
  this.method = source.getAttribute('method');
  this.action = source.getAttribute('action');
};

postjson_xhr.prototype.post_data = function(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(this.method, this.action, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    callback(xhr.response);
  };
  xhr.send(this.data);
};

module.exports = new postjson_xhr();
