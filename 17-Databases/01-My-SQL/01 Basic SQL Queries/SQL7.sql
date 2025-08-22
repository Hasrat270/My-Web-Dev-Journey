CREATE TABLE adresses (
    `id` INT NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(255) NOT NULL,
    `street_number` VARCHAR(50) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `postal_code` INT NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);