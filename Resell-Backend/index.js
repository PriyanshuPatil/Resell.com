const connection=require("../Resell-Backend/configs/db")
const  express=require("express") ;
const cors=require("cors");
const { usersRouter } = require("./routes/user.routes");
const { postRouter } = require("./routes/post.routes");
const app=express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
require("dotenv").config();
app.use("/users",usersRouter)
app.use("/postad",postRouter)

app.get("/", (req, res) => {
    res.send("Home-Page");
    
  });

app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("connected to DB");
      } catch (err) {
        console.log(err.message);
      }
      console.log(`application running at ${process.env.port}`);
})
