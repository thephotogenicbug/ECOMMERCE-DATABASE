const app = require('./app')

const dotenv = require('dotenv')
const connectDB = require('./config/database')

//config
dotenv.config({ path: "config/config.env" });

// connecting to database
connectDB()



app.listen(process.env.PORT, () =>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})