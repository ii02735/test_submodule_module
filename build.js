const build_object = [
    {
        id: 1,
        person: {
            name: "julian",
            firstname: "test2"
        }
    },
    {
        id: 2,
        person: {
            name: "tom",
	        firstname: "test"	
        }
    },
    {
        id: 3,
        person: {
            name: "richard",
	        firstname: "test3"	
        }
    }
]

const fs = require('fs')
fs.writeFileSync('./build.json',JSON.stringify(build_object))
