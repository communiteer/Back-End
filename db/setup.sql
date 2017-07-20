DROP DATABASE IF EXISTS volunteers;
CREATE DATABASE volunteers;
\c volunteers;

CREATE TABLE Areas (
	area_id SERIAL PRIMARY KEY,
	area_name VARCHAR
);

CREATE TABLE Users (
	user_id SERIAL PRIMARY KEY,
	user_fName VARCHAR,
	user_lName VARCHAR,
	area INTEGER REFERENCES Areas(area_id),
	Phone VARCHAR,
	Email VARCHAR,
	ProfilePicture VARCHAR
);


CREATE TABLE Groups (
	group_id SERIAL PRIMARY KEY,
	group_name VARCHAR,
	area_id INTEGER REFERENCES Areas(area_id),
	admin_id INTEGER REFERENCES Users(user_id),
	league INTEGER 
		CHECK (league BETWEEN 1 AND 5)
);

CREATE TABLE GroupUser (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES Users(user_id),
	group_id INTEGER REFERENCES Groups(group_id)
);

CREATE TABLE Skills (
	skill_id SERIAL PRIMARY KEY,
	skill_name VARCHAR
);

CREATE TABLE Events (
	event_id SERIAL PRIMARY KEY,
	event_name VARCHAR,
	area_id INTEGER REFERENCES Areas(area_id),
	event_date DATE,
	event_time TIME,
	group_id INTEGER REFERENCES Groups(group_id),
	event_description VARCHAR
);

CREATE TABLE UserSkill (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES Users(user_id),
	skill_id INTEGER REFERENCES Skills(skill_id)
);
CREATE TABLE UserEvents (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES Users(user_id),
	event_id INTEGER REFERENCES Events(event_id)
);