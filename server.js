import express from 'express';
const app = express();
import basicAuth from 'express-basic-auth';
import pg from 'pg';
import 'dotenv/config'

const connectionString= process.env.DATABASE_URL;

const db = new pg.Pool({
    connectionString
})

//db.connect();
app.use(express.static('public'))

//lets you get req.body from forms and parse URL-encoded data
app.use(express.urlencoded({ extended:true}));
app.use(express.json());




app.get("/api/users", async (req, res)=>{
    try {
        //console.log("received");
        const {rows} = await db.query("SELECT id, name FROM users;")
        //console.log(results);
        res.send(rows);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
})
app.use(basicAuth({
    authorizer:myAuthorizer,
    authorizeAsync:true,
    challenge: true,//gives popup if try to go to browser
    unauthorizedResponse: req => (`unauthorized!`)
}))

async function myAuthorizer(username, password,cb) {
    const {rows} = await db.query("SELECT password FROM users where name = $1;", [username])
    console.log(rows[0].password)
    // const userMatches = basicAuth.safeCompare(username, 'customuser')
    // const passwordMatches = basicAuth.safeCompare(password, 'custompassword')

    // return userMatches & passwordMatches
    if (basicAuth.safeCompare(password, rows[0].password))
    return cb(null, true)
else
    return cb(null, false)
}

app.get("/api/:id/posts", async (req, res)=>{
    const {id} = req.params;
    try {
        //console.log("received");
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
        //console.log("received");
        await db.query("INSERT INTO posts (user_id, blog, feeling) values ($1, $2, $3);", [id, blog, feeling])
        res.redirect("/");
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
})

app.post("/api/register", async (req, res)=>{
    const {name, email, password} = req.body;
    try {
        //console.log("received");
        await db.query("INSERT INTO users (name, email, password) values ($1, $2, $3);", [name, email, password])
        res.redirect("/");
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000!')
})