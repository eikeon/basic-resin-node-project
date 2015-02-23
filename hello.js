console.log('hi');

var dns = require('dns');

dns.lookup('www.google.com', function onLookup(err, addresses, family) {
  console.log('addresses:', addresses);
});

dns.lookup('marvin.local', function onLookup(err, addresses, family) {
  console.log('addresses:', addresses);
});
