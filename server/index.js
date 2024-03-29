const express =require('express');
const app=express();

const userRoutes = require('./routes/auth')
const eventRoutes = require('./routes/eventRoutes')
require ('./db/db')

const port = 3000;

const cors = require('cors');
app.use(cors()) ;

const corsOptions = {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"], 
    allowedHeaders: ["Content-Type"], 
    credentials: true 
};

app.use(express.json());
app.use(cors(corsOptions)); 

app.use('/api/users',userRoutes)
app.use('/api/events',eventRoutes)

app.get('/', (req,res)=>{
    res.send('<p>Hello World</p>') 
})

app.use((err,req,res,next) =>{
    console.log(req.body);
    console.log(next);
    console.error(err.stack);
    res.status(500).json({ success: false, message: "Internal server error" });
});

app.listen(port,()=>{ 
    console.log(`Server is listening at port ${port}`);
})