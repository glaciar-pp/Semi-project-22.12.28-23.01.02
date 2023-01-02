SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS factPok;
DROP TABLE IF EXISTS taro;




/* Create Tables */

CREATE TABLE factPok
(
	qNo int DEFAULT 1 NOT NULL AUTO_INCREMENT,
	content varchar(200) NOT NULL,
	ans1 varchar(200) NOT NULL,
	ans2 varchar(200) NOT NULL,
	PRIMARY KEY (qNo)
);


CREATE TABLE taro
(
	qNo int DEFAULT 1 NOT NULL AUTO_INCREMENT,
	content varchar(200) NOT NULL,
	ans1 varchar(200) NOT NULL,
	ans2 varchar(200) NOT NULL,
	PRIMARY KEY (qNo)
);



