DROP DATABASE IF EXISTS volunteers;
CREATE DATABASE volunteers;
\c volunteers
CREATE TABLE Users (
	user_id SERIAL PRIMARY KEY,
	user_name VARCHAR(100),
	area INTEGER
		FOREIGN KEY(area_id) REFERENCES Areas(area_id),
	Phone INTEGER,
	Email VARCHAR(100),
	ProfilePicture VARCHAR
);

CREATE TABLE Areas (
	area_id SERIAL PRIMARY KEY,
	area_name VARCHAR
);
CREATE TABLE Groups (
	group_id SERIAL PRIMARY KEY,
	group_name VARCHAR,
	admin_id INTEGER,
		FOREIGN KEY (user_id) REFERENCES Users(user_id),
	leaguied INTEGER 
		CHECK (leaguied BETWEEN 1 AND 5)
;)

CREATE TABLE Group-User (
	id: SERIAL PRIMARY KEY,
	user_id: INTEGER REFERENCES Users,
	group_id: INTEGER REFERENCES Groups
);