USE movie_library_db;
INSERT INTO movies(movie_name)
VALUES
("Cloud Atlas"),
("Extremely Loud & Incredibly Close"),
("Hair");

INSERT INTO reviews(movies_id,review)
VALUES
(1,"I was hypnotized by Cloud Atlas"),
(1,"There were so many prosthetic noses"),
(2,"Fascinating despite itself. Which every way you fall, this will provoke a strong reaction"),
(3,"Visually and musically at least, Hair is done beautifully, faithful to its roots");
