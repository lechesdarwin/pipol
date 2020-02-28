CREATE ROLE scraper WITH LOGIN SUPERUSER PASSWORD 'scraperpass';
CREATE DATABASE content ENCODING 'UTF-8' OWNER scraper;
CREATE TABLE content(id integer primary key,content text,categoria varchar(65)[],fecha date,img varchar(255)[],external varchar(255)[],link varchar(180),tuit varchar(40)[],pined boolean default false);