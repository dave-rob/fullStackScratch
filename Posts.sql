create table Posts (
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES Users(id),
	blog VARCHAR(33),
	feeling VARCHAR(7)
);
insert into Posts (user_id, blog, feeling) values (12, 'I saw a unicorn today!', 'happy');
insert into Posts (user_id, blog, feeling) values (4, 'The aliens are coming!', 'content');
insert into Posts (user_id, blog, feeling) values (4, 'I saw a unicorn today!', 'content');
insert into Posts (user_id, blog, feeling) values (15, 'I can fly!', 'excited');
insert into Posts (user_id, blog, feeling) values (3, 'The aliens are coming!', 'happy');
insert into Posts (user_id, blog, feeling) values (8, 'I can fly!', 'happy');
insert into Posts (user_id, blog, feeling) values (2, 'I saw a unicorn today!', 'content');
insert into Posts (user_id, blog, feeling) values (8, 'I saw a unicorn today!', 'happy');
insert into Posts (user_id, blog, feeling) values (5, 'I saw a unicorn today!', 'sad');
insert into Posts (user_id, blog, feeling) values ( 1, 'The aliens are coming!', 'excited');
insert into Posts (user_id, blog, feeling) values ( 12, 'I discovered a secret treasure!', 'excited');
insert into Posts (user_id, blog, feeling) values ( 2, 'I saw a unicorn today!', 'angry');
insert into Posts (user_id, blog, feeling) values ( 10, 'I saw a unicorn today!', 'happy');
insert into Posts (user_id, blog, feeling) values ( 11, 'I saw a unicorn today!', 'excited');
insert into Posts (user_id, blog, feeling) values ( 12, 'I saw a unicorn today!', 'sad');
insert into Posts (user_id, blog, feeling) values ( 13, 'I can fly!', 'excited');
insert into Posts (user_id, blog, feeling) values ( 4, 'I discovered a secret treasure!', 'excited');
insert into Posts (user_id, blog, feeling) values ( 4, 'The aliens are coming!', 'happy');
insert into Posts (user_id, blog, feeling) values ( 6, 'My cat can speak three languages!', 'sad');
insert into Posts (user_id, blog, feeling) values ( 7, 'The aliens are coming!', 'content');
insert into Posts (user_id, blog, feeling) values ( 4, 'I saw a unicorn today!', 'angry');
insert into Posts (user_id, blog, feeling) values ( 15, 'The aliens are coming!', 'angry');
insert into Posts (user_id, blog, feeling) values ( 12, 'I can fly!', 'excited');
insert into Posts (user_id, blog, feeling) values ( 15, 'The aliens are coming!', 'happy');
insert into Posts (user_id, blog, feeling) values ( 13, 'I saw a unicorn today!', 'happy');
insert into Posts (user_id, blog, feeling) values ( 9, 'I can fly!', 'excited');
insert into Posts (user_id, blog, feeling) values ( 3, 'The aliens are coming!', 'angry');
insert into Posts (user_id, blog, feeling) values ( 14, 'I saw a unicorn today!', 'happy');
insert into Posts (user_id, blog, feeling) values ( 14, 'My cat can speak three languages!', 'sad');
insert into Posts (user_id, blog, feeling) values ( 13, 'My cat can speak three languages!', 'excited');
