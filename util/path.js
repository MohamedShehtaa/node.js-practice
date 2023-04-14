const  path = require('path')

// create a function to helps me construct a path  to the parent directory 
 
module.exports = path.dirname(process.mainModule.filename) //Return the directory name of a path

//process.mainModule=> (refer to main :app.js)The process.mainModule property provides an alternative way of retrieving require.main. The difference is that if the main module changes at runtime, require.main may still refer to the original main module in modules that were required before the change occurred. Generally, it's safe to assume that the two refer to the same module.
// 'mainModule' is deprecated so 'll use main