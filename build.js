const build_object = [
    {
        id: 1,
        person: {
            name: "julian",
        }
    },
    {
        id: 2,
        person: {
            name: "tom",
	    firstname: "test"	
        }
    }
]

const fs = require('fs')
fs.writeFileSync('./build.json',JSON.stringify(build_object))
