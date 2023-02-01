const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movie_library_db'
    },
    console.log(`Connected to movie_library_db database.`)
);

app.get('/api/movies', (req, res) => {
  db.query(`SELECT * FROM movies`, function(err, result){
    if(err){
        console.log(err);
        res.status(404).send("Server Error")
    } else {
        res.json(result)
    }
  })
});

app.get('/api/reviews', (req, res) => {
    db.query(`SELECT movie_name AS movie, review FROM movies JOIN reviews ON movies_id=movies.id GROUP BY movies_id`, function(err, result){
      if(err){
          console.log(err);
          res.status(404).send("Server Error")
      } else {
          res.json(result)
      }
    })
  });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})