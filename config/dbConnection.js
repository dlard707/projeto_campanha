const{Client} = require('pg')

const client = new Client({

    connectionString:process.env.DATABASE_URL || 'postgres://jarnlovgcomedo:0ce6cc6b828561a5afca345e4c646777682c858b4366f854f11417486a04fdc1@ec2-44-198-24-0.compute-1.amazonaws.com:5432/d3qslg0sgfht58',
    ssl:{
        rejectUnauthorized:false
    }
})

client.connect()

module.exports = client