namespace couchbaseTry001 {
/*
    Learning
    What: couchbase
    Level: try
    Exercice: 001
    Target: Discovery
*/

var couchbase = require("couchbase");

// Connect to Couchbase Server

var cluster = new couchbase.Cluster('127.0.0.1');
var bucket = cluster.openBucket('beer-sample','beer-sample', function(err: any) {
  if (err) {
    // Failed to make a connection to the Couchbase cluster.
    throw err;
  }

  // Retrieve a document

  bucket.get('aass_brewery-juleol', function(err: any, result: any) {
    if (err) {
      // Failed to retrieve key
      throw err;
    }

    var doc = result.value;

    console.log(doc.name + ', ABV: ' + doc.abv);
    
  /*
    // Store a document

    doc.comment = "Random beer from Norway";

    
    bucket.replace('aass_brewery-juleol', doc, function(err: any, result: any) {
      if (err) {
        // Failed to replace key
        throw err;
      }

      console.log(result);

      // Success!
      process.exit(0);
    });
   */
  
   process.exit(0);
  });
});
}
