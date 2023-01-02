SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS NEW_TABLE;

/* Create Tables */

CREATE TABLE NEW_TABLE
(
	qNo int NOT NULL AUTO_INCREMENT,
	content varchar(200) NOT NULL,
	ans1 varchar(200) NOT NULL,
	ans2 varchar(200) NOT NULL,
	PRIMARY KEY (qNo)
);
