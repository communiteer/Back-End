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

INSERT INTO Groups (group_name,area_id,admin_id,league) 
	VALUES ('A',1,1,4), ('B',1,1,3), ('C',2,2,4), ('D',3,3,4);

INSERT INTO GroupUser (user_id,group_id) 
	VALUES (1,1), (2,1), (3,1), (1,2), (2,2), (2,3), (3,3), (1,4), (4,4);

INSERT INTO Skills (skill_name)
VALUES ('chef'), ('cleaner'), ('Math Tutor'), ('English Tutor'), ('Tech Tutor');

INSERT INTO Events (event_name, area_id, event_date, event_time, group_id, event_description)
VALUES ('It is not too old to learn computer',2,'2017-1-30','10:30',1,'aaaaaa'),
('It is not too old to cook',2,'2016-6-12','10:30',2,'aaaaaa'),
('Eid party',1,'2017-1-30','10:30',3,'aaaaaa'),
('Kids Partyr',3,'2015-1-30','10:30',4,'aaaaaa');

