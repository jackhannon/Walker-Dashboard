CREATE DATABASE agent_store;


CREATE TABLE agent (
  id serial PRIMARY KEY,
  name varchar(50) NOT NULL,
  description varchar NOT NULL,
  data_points jsonb
);


INSERT INTO agent (name, description, data_points)
VALUES ('Tree', 'An agent which performs one skill at a time using selective and perceptive concepts', 
    '[{"distance": 0, "speed": 0}, 
      {"distance": 1, "speed": 0.5}, 
      {"distance": 2, "speed": 1}, 
      {"distance": 3, "speed": 1.2}, 
      {"distance": 4, "speed": 1.5}, 
      {"distance": 5, "speed": 1.8}, 
      {"distance": 6, "speed": 2}, 
      {"distance": 7, "speed": 2.2}, 
      {"distance": 8, "speed": 2.4}, 
      {"distance": 9, "speed": 2.5}
    ]'::jsonb),
('Network', 'An agent which uses skills relying on skills to drive a feedback loop', 
    '[{"distance": 0, "speed": 0}, 
      {"distance": 1, "speed": 1}, 
      {"distance": 2, "speed": 2}, 
      {"distance": 3, "speed": 2.5}, 
      {"distance": 4, "speed": 3}, 
      {"distance": 5, "speed": 3}, 
      {"distance": 6, "speed": 3.2}, 
      {"distance": 7, "speed": 3.4}, 
      {"distance": 8, "speed": 3.5}, 
      {"distance": 9, "speed": 3.8}
    ]'::jsonb);