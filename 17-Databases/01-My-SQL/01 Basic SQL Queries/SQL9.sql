CREATE TABLE reviews (
    `id` INT NOT NULL AUTO_INCREMENT,
    `reviewer_name` VARCHAR(255) NOT NULL,
    `rating` INT NOT NULL,
    `text` TEXT,
    `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `restaurant_id` INT NOT NULL,
    PRIMARY KEY (`id`)
);