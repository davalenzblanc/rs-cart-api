create table carts (
	id uuid not null primary key,
	created_at date not null,
	updated_at date not null,
	status statuses not null
);

create table products (
	id uuid not null primary key,
	title varchar(255) not null,
	description varchar not null,
	price decimal(5,2) not null
);

create table users (
	id uuid not null primary key,
	name varchar(255) not null,
	email varchar(255) not null,
	password varchar(255) not null
)

INSERT INTO users (id, name, email, password) VALUES
(gen_random_uuid(), 'Alice', 'alice@example.com', 'password123'),
(gen_random_uuid(), 'Bob', 'bob@example.com', 'password456'),
(gen_random_uuid(), 'Charlie', 'charlie@example.com', 'password789');

INSERT INTO products (id, title, description, price) VALUES
(gen_random_uuid(), 'Product A', 'Description A', 100),
(gen_random_uuid(), 'Product B', 'Description B', 200),
(gen_random_uuid(), 'Product C', 'Description C', 300);

INSERT INTO carts (id, user_id, created_at, updated_at, status) VALUES
(gen_random_uuid(), '192ad7f0-6c22-4a36-b1ed-e24923cac45b', current_date, current_date, 'OPEN'),
(gen_random_uuid(), '3abde76a-5c26-4d80-89cf-39a8ea2f0c99', current_date, current_date, 'ORDERED'),
(gen_random_uuid(), 'f4ea6b91-7929-4811-a910-d4d788a901e4', current_date, current_date, 'OPEN');

INSERT INTO cart_items (cart_id, product_id, count) VALUES
('733c7340-8afb-4480-ba8d-c51def4cd751', '388111c6-484c-40f8-ada8-204cb9862bba', 2),
('ef9e4233-69f4-4cda-afeb-7e5e9f7a8c55', '388111c6-484c-40f8-ada8-204cb9862bba', 5);