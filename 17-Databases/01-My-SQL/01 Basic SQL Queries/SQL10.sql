SELECT reviews.*, restaurants.name AS restaurant_name, adresses.*, types.name AS restaurant_type FROM reviews 
INNER JOIN restaurants on reviews.restaurant_id = restaurants.id
INNER JOIN adresses on restaurants.address_id = adresses.id
INNER JOIN types on restaurants.type_id = types.id
where rating > 3