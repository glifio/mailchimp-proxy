This is a proxy HTTP server, primarily used for injecting an authorization header into proxied requests, so that client side applications can't see private secrets.

make sure to add a `.env` file that exports a TOKEN variable. The token gets added as an "Authorization" header to the requests, and stripped off the response.

```js
const injectedHeader = { Authorization: `Bearer ${TOKEN}` }
```
