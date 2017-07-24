\c volunteers;
INSERT INTO Areas (area_name) 
	VALUES ('Stretford'),
	('Rochdale'),
	('Bolton'),
	('Sale'),
	('Oldham'),
	('Bury'),
	('Moston'),
	('Blackley'),
	('Levenshulme');

INSERT INTO Users (user_fName, user_lName, area, Phone, Email, ProfilePicture)
	VALUES ('Ben','Whitfield', 1, '07425199999', 'ben@hotmail.com', 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg'),
('Wasan','Salih', 1, '07425199999', 'wasan@hotmail.com', 'http://www.regionunaujienos.lt/wp-content/uploads/2017/05/60ca55.jpg'),
('Leo','Duffy', 1, '07425199999', 'Leo@hotmail.com', 'http://www.equineworld.co.uk/media/k2/items/cache/665e3353c5a0a1298b58f0408e39e998_L.jpg'),
('Kamran','Mujtaba', 3, '07425199999', 'Kameron@hotmail.com', 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg');

INSERT INTO Groups (group_name,area_id,admin_id,description ,contact_details) 
	VALUES ('Champions',1,1,'We are here to help', '123456789'),
	 ('Babel',1,2,'We can give you standards', '123456789'), 
	 ('Oldies',2,3,'Lovely group for Old People ', '123456'), 
	 ('Cats',3,4,'every thing about take care of cats', '789456123'),
	('Coders',4,4,'Learn code with us', '71116123');

INSERT INTO GroupUser (user_id,group_id,userPoints) 
	VALUES (1,1,100), (2,1,200), (3,1,200), (1,2,150), (2,2,250), (2,3,80), (3,3,90), (1,4,250), (4,4,300);

INSERT INTO Skills (skill_name)
VALUES ('chef'), ('cleaner'), ('Math Tutor'), ('English Tutor'), ('Tech Tutor');

INSERT INTO Events (event_name, area_id, event_date, event_time, group_id, event_description)
VALUES ('It is not too old to learn computer',2,'2017-1-30','10:30',3,'your age more than 50, not too old to learn computers'),
('Lets learn cooking',2,'2016-6-12','10:30',2,'any one can learn cooking'),
('Eid party',1,'2017-1-30','10:30',3,'come Celebrate with us'),
('Kids Party',3,'2015-1-30','10:30',2,'Have a fun with us');

INSERT INTO UserSkill (user_id, skill_id)
VALUES (1,1), (2,1), (3,1), (4,5), (4,3), (2,5);

INSERT INTO UserEvents (user_id, event_id)
VALUES (1,1), (2,1), (3,4), (4,3), (1,2);

INSERT INTO EventSkill (event_id, skill_id)
VALUES (1,3), (1,5), (3,1), (3,2), (2,1);