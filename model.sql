CREATE ROLE scraper WITH LOGIN SUPERUSER PASSWORD 'scraperpass';
CREATE DATABASE content ENCODING 'UTF-8' OWNER scraper;
\c content;
CREATE TABLE content_t(id serial primary key,contenido text,categoria varchar(65)[],fecha date,img varchar(255)[],external varchar(255)[],link varchar(180),tuit varchar(40)[],pined boolean default false);
create table view(id integer unique,id_f integer,title varchar(255),categoria varchar(30)[],fecha date,img varchar(255),pined BOOLEAN DEFAULT FALSE,link VARCHAR(255));

--test duplicates view

select * from view ou where (select count(*) from view inr where inr.id = ou.id) > 1

-- select catetgoria
select id,categoria from content_t where categoria IN ('{DeRedes,Política}');

-- search table
CREATE TABLE search(id serial primary key,id_f integer,texto text,categoria varchar(38)[]);
CREATE INDEX ON search USING GIN (to_tsvector('spanish',texto));
SELECT * FROM posts where searchtext @@ to_tsquery('keyword');