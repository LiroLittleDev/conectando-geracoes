CREATE DATABASE conectando_geracoes;

USE conectando_geracoes;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  idade INT,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
