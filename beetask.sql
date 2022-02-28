
CREATE TABLE IF NOT EXISTS USERS (
  userId SERIAL NOT NULL,
  email VARCHAR(45) NOT NULL,
  names VARCHAR(45) NOT NULL,
  surnames VARCHAR(45) NOT NULL,
  password VARCHAR(61) NOT NULL,
  PRIMARY KEY (userId),
  UNIQUE (email),
 CONSTRAINT proper_email CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'),

CONSTRAINT proper_password CHECK (password ~ ’^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_|¬°{}\-><¿%*^#?&])[A-Za-z\d@$!_|¬°{}\-><¿%*^#?&]{5,30}’ ),

CONSTRAINT proper_names CHECK (names ~ ‘^[a-zA-Z]{2,32}(([ ][a-zA-Z]{2,32}){1,2})?$’),

CONSTRAINT proper_surnames CHECK (surnames ~ ’^[a-zA-Z]{2,32}(([ ][a-zA-Z]{2,32}){1,2})?$’)
);

--el correo sera una cadena de caracteres que en medio de si tendran un @ y terminaran en .  seguido de mas caracteres
--la contrasena tendra al menos un carácter especial, una mayuscula y un numero. debe ser mayor o igual a 5 y menos a 30
--los nombres serán compuestos por solo letras del abecedario y no podrán tener mas de 3 nombres , lo mismo para apellidos





-- -----------------------------------------------------
-- Table SUBJECT
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS SUBJECT (
  idSUBJECT serial,
  subjectName VARCHAR(45) NOT NULL,
  description VARCHAR(45) NOT NULL DEFAULT '',
  userId INT NOT NULL,
  PRIMARY KEY (idSUBJECT),
  CONSTRAINT foreignUser
    FOREIGN KEY (userId)
    REFERENCES USERS (userId)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;


-- -----------------------------------------------------
-- Table SECTION
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS SECTION (
  idSECTION SERIAL,
  sectionName VARCHAR(45) NOT NULL DEFAULT 'TAREAS',
  gradePercentage INT NOT NULL DEFAULT 0,
  idSUBJECT INT NOT NULL,
  PRIMARY KEY (idSECTION),
  CONSTRAINT foreignSubject
    FOREIGN KEY (idSUBJECT)
    REFERENCES SUBJECT (idSUBJECT)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;


-- -----------------------------------------------------
-- Table TASK
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TASK (
  idTASK SERIAL,
  name VARCHAR(45) NOT NULL DEFAULT 'Tarea',
  description VARCHAR(45) NOT NULL DEFAULT '',
  datetime TIMESTAMP,
  priority VARCHAR(45) NOT NULL DEFAULT 'Normal',
  grade NUMERIC(10,2) NOT NULL DEFAULT 0.00,
  idSECTION INT NOT NULL,
  PRIMARY KEY (idTASK),
  CONSTRAINT foreignSection
    FOREIGN KEY (idSECTION)
    REFERENCES SECTION (idSECTION)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
;
