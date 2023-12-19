create table Posts (
	id INT PRIMARY KEY,
	user_id INT REFERENCES Users(id),
	blog VARCHAR(33),
	feeling VARCHAR(7)
);
insert into Posts (id, user_id, blog, feeling) values (1, 12, 'I saw a unicorn today!', 'happy');
insert into Posts (id, user_id, blog, feeling) values (2, 4, 'The aliens are coming!', 'content');
insert into Posts (id, user_id, blog, feeling) values (3, 4, 'I saw a unicorn today!', 'content');
insert into Posts (id, user_id, blog, feeling) values (4, 15, 'I can fly!', 'excited');
insert into Posts (id, user_id, blog, feeling) values (5, 3, 'The aliens are coming!', 'happy');
insert into Posts (id, user_id, blog, feeling) values (6, 8, 'I can fly!', 'happy');
insert into Posts (id, user_id, blog, feeling) values (7, 2, 'I saw a unicorn today!', 'content');
insert into Posts (id, user_id, blog, feeling) values (8, 8, 'I saw a unicorn today!', 'happy');
insert into Posts (id, user_id, blog, feeling) values (9, 5, 'I saw a unicorn today!', 'sad');
insert into Posts (id, user_id, blog, feeling) values (10, 1, 'The aliens are coming!', 'excited');
insert into Posts (id, user_id, blog, feeling) values (11, 12, 'I discovered a secret treasure!', 'excited');
insert into Posts (id, user_id, blog, feeling) values (12, 2, 'I saw a unicorn today!', 'angry');
insert into Posts (id, user_id, blog, feeling) values (13, 10, 'I saw a unicorn today!', 'happy');
insert into Posts (id, user_id, blog, feeling) values (14, 11, 'I saw a unicorn today!', 'excited');
insert into Posts (id, user_id, blog, feeling) values (15, 12, 'I saw a unicorn today!', 'sad');
insert into Posts (id, user_id, blog, feeling) values (16, 13, 'I can fly!', 'excited');
insert into Posts (id, user_id, blog, feeling) values (17, 4, 'I discovered a secret treasure!', 'excited');
insert into Posts (id, user_id, blog, feeling) values (18, 4, 'The aliens are coming!', 'happy');
insert into Posts (id, user_id, blog, feeling) values (19, 6, 'My cat can speak three languages!', 'sad');
insert into Posts (id, user_id, blog, feeling) values (20, 7, 'The aliens are coming!', 'content');
insert into Posts (id, user_id, blog, feeling) values (21, 4, 'I saw a unicorn today!', 'angry');
insert into Posts (id, user_id, blog, feeling) values (22, 15, 'The aliens are coming!', 'angry');
insert into Posts (id, user_id, blog, feeling) values (23, 12, 'I can fly!', 'excited');
insert into Posts (id, user_id, blog, feeling) values (24, 15, 'The aliens are coming!', 'happy');
insert into Posts (id, user_id, blog, feeling) values (25, 13, 'I saw a unicorn today!', 'happy');
insert into Posts (id, user_id, blog, feeling) values (26, 9, 'I can fly!', 'excited');
insert into Posts (id, user_id, blog, feeling) values (27, 3, 'The aliens are coming!', 'angry');
insert into Posts (id, user_id, blog, feeling) values (28, 14, 'I saw a unicorn today!', 'happy');
insert into Posts (id, user_id, blog, feeling) values (29, 14, 'My cat can speak three languages!', 'sad');
insert into Posts (id, user_id, blog, feeling) values (30, 13, 'My cat can speak three languages!', 'excited');
