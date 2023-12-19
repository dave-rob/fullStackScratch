import express from 'express';
const app = express();
import pg from 'pg';

const db = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "blogPosts",
    password: "123456",
    port: 5432
})

db.connect();
app.use(express.static('public'))
app.use(express.json());
app.get("/api/users", async (req, res)=>{
    const {rows} = await db.query("SELECT name FROM users;")
    return rows;
})
app.listen(3000, ()=>{
    console.log('Listening on port 3000!')
})