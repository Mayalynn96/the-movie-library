DROP DATABASE IF EXISTS movie_library_db;
CREATE DATABASE movie_library_db;
USE movie_library_db;
CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_name VARCHAR(100)
);
CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movies_id INT,
    Foreign Key (movies_id) REFERENCES movies(id) ON DELETE CASCADE,
    review TEXT
);