//dependecia
//comonjs, module

const request = require('request')
// direccion de la api endpoint
const url='https://swapi.dev/api/people'
//hacer operacion asincrono
let r = request(url, 
                {json:true} ,
                (error, reqpuesta, body)=>{
                    let Jedis =body.results
                    Jedis.forEach(Jedi => {
                        console.log (Jedi.name)
                        console.log("----------------------------")
                        
                    });
                }

                )