CREATE ROLE scraper WITH LOGIN SUPERUSER PASSWORD 'scraperpass';
CREATE DATABASE content ENCODING 'UTF-8' OWNER scraper;
\c content;
CREATE TABLE content_t(id serial primary key,contenido text,categoria varchar(65)[],fecha date,img varchar(255)[],external varchar(255)[],link varchar(180),tuit varchar(40)[],pined boolean default false);
create table view(id integer unique,id_f integer,title varchar(255),categoria varchar(30)[],fecha date,img varchar(255)[],pined BOOLEAN DEFAULT FALSE);

--test duplicates view

select * from view ou where (select count(*) from view inr where inr.id = ou.id) > 1