\c volunteers;
INSERT INTO Areas (area_name) 
	VALUES ('south Manchester'),
	('Rochdale'),
	('Leeds'),
	('North Manchester'),
	('Oldham');

INSERT INTO Users (user_name, area, Phone, Email, ProfilePicture)
	VALUES ('Ben', 1, '07425199999', 'ben@hotmail.com', 'http://google.ben.jpg'),
('wasan', 2, '07425199999', 'wasan@hotmail.com', 'http://google.wasan.jpg'),
('Leo', 1, '07425199999', 'Leo@hotmail.com', 'http://google.Leo.jpg'),
('Kameron', 3, '07425199999', 'Kameron@hotmail.com', 'http://google.Kameron.jpg');

INSERT INTO Groups (group_name,admin_id,league) 
	VALUES ('A',1,4), ('B',1,3), ('C',2,4), ('D',3,4);

INSERT INTO GroupUser (user_id,group_id) 
	VALUES (1,1), (2,1), (3,1), (1,2), (2,2), (2,3), (3,3), (1,4), (4,4);