var s5 = require('../lib/s5')(process.env.S5_API_TOKEN, process.env.S5_API_SECRET);
var assert = require('assert');

describe('s5', function(){
  describe('#getUser()', function(){

    it('should get an s5 user', function(done){
      assert.doesNotThrow(function(){
        s5.getUser("tylermenezes", function(user){
          assert.equal(1, user.id);
          done();
        });
      });
    });

  });

  describe('#getOAuthURI()', function(){

    it('should return a valid s5 OAuth URI', function(){
      assert.equal("https://s5.studentrnd.org/oauth/" + s5.token + "?return=http%3A%2F%2Fexample.com%2Foauth%2Fs5&scope=extended",
                   s5.getOAuthURI("http://example.com/oauth/s5", "extended"));
    });

  });

  describe('#me()', function(){

    it('should get the user associated with an access token', function(done){
      assert.doesNotThrow(function(){
        // you'll need to manually auth and get the code
        s5.me(process.env.S5_ACCESS_TOKEN, function(user){
          assert.equal("number", typeof(user.id));
          assert.equal("string", typeof(user.first_name));
          done();
        });
      });
    });

  });
});
