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

//lets you get req.body from forms
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

app.get("/api/users", async (req, res)=>{
    try {
        console.log("received");
        const {rows} = await db.query("SELECT id, name FROM users;")
        //console.log(results);
        res.send(rows);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
})

app.get("/api/:id/posts", async (req, res)=>{
    const {id} = req.params;
    try {
        console.log("received");
        const {rows} = await db.query("select * from users inner join posts ON users.id = posts.user_id AND users.id = $1;", [id])
        //console.log(rows);
        res.send(rows);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
})

app.post("/api/:id/posts", async (req, res)=>{
    const {id} = req.params;
    const {blog, feeling} = req.body;
    try {
        console.log("received");
        await db.query("INSERT INTO posts (user_id, blog, feeling) values ($1, $2, $3);", [id, blog, feeling])
        res.redirect("/");
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000!')
})