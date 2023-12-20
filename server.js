import express from 'express';
const app = express();
import pg from 'pg';
//import cors from 'cors';
const db = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "blogPosts",
    password: "123456",
    port: 5432
})

db.connect();
app.use(express.static('public'))
//app.use(cors());
app.use(express.json());
app.get("/api/users", async (req, res)=>{
    try {
        console.log("received");
        const {rows} = await db.query("SELECT name FROM users;")
        res.send(rows);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000!')
})