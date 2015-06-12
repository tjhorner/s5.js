var unirest = require("unirest");

function s5(token, secret){
  var S5_BASE = "https://s5.studentrnd.org";
  var API_BASE = S5_BASE + "/api/";

  this.token = token || "";
  this.secret = secret || "";

  var get = function(endpoint, params, callback){
    params.token = this.token;
    params.secret = this.secret;
    unirest.get(API_BASE + endpoint)
    .query(params)
    .end(function(res) {
      if (res.error) {
        console.log(res.error);
        callback({});
      } else {
        callback(res.body);
      }
    });
  };

  var getUser = function(user, callback){
    get("user", {username: user, secret: secret}, callback);
  };

  var getOAuthURI = function(oauthCallback, scope){
    return S5_BASE + "/oauth/" + this.token + "?return=" + encodeURIComponent(oauthCallback) + "&scope=" + encodeURIComponent(scope);
  };

  var exchangeCode = function(code, callback){
    get("oauth/exchange", {code: code}, callback);
  };

  var me = function(accessToken, callback){
    get("user/me", {access_token: accessToken, secret: this.secret}, callback);
  };

  this.getUser = getUser;
  this.getOAuthURI = getOAuthURI;
  this.exchangeCode = exchangeCode;
  this.me = me;
  this._get = get;

  return this;
}

module.exports = s5;
