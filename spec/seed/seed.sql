\c volunteers;
INSERT INTO Users (user_name,area,Phone,Email,ProfilePicture)VALUES ('Ben',1,'07425 199999','ben@hotmail.com','http://google.ben.jpg'),
('wasan',2,'07425 199999','wasan@hotmail.com','http://google.wasan.jpg'),
('Leo',1,'07425 199999','Leo@hotmail.com','http://google.Leo.jpg'),
('Kameron',3,'07425 199999','Kameron@hotmail.com','http://google.Kameron.jpg');

INSERT INTO Areas (area_name)VALUES('south Manchester'),('Rochdale'),('Leeds'),('North Manchester'),('Oldham');
INSERT INTO Groups (group_name,admin_id,leaguied)VALI+VALUES('A',1,4),('B',1,3),('C',2,4),('D',3,5);
INSERT INTO Group-User(user_id,group_id)VALUES(1,1),(2,1),(3,1),(1,2),(2,2),(2,3),(3,3),(1,4),(4,4);


/**


CREATE TABLE Group-User (
	id: SERIAL PRIMARY KEY,
	user_id: INTEGER REFERENCES Users,
	group_id: INTEGER REFERENCES Groups
);
);*/