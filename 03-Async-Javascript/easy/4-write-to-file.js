const fs = require('fs')
let data = "This is written using javascript and not by hands."
 

fs.writeFile('../files/4-write-to-file.txt', data, (err) => {
 
    
    if (err) throw err;
})