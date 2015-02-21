# s5.js

s5 is the StudentRND Service Single Sign-On System. Here's the node module to interact with it.

## Examples

```javascript
var s5 = require('s5');

// Create an s5 instance with your API credentials
var sso = new s5("YOUR_API_KEY", "YOUR_API_SECRET");

// Get the OAuth URI with extended privileges
sso.getOAuthURI("http://example.com/oauth/s5", "extended");

// Exchange the provided code for an access token
sso.exchangeCode(code, callback);

// Get a user
sso.getUser("tjhorner", callback);

// Get user from access token
sso.me(accessToken, callback);
```
