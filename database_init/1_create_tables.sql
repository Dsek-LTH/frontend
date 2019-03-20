CREATE TABLE roles (
    uid INT unsigned NOT NULL primary key AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    is_current BOOLEAN NOT NULL,
    mastery VARCHAR(150) NOT NULL,
    term VARCHAR(30) NOT NULL,
    description VARCHAR(500) NOT NULL,
    max_people INT unsigned
);

CREATE TABLE role_instances (
    role BIGINT unsigned NOT NULL,
    user VARCHAR(20) NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL
);
