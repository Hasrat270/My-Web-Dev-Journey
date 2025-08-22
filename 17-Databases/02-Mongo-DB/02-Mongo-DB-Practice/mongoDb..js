// MONGO DB PRACTICE QUERIES


// ratingportal> db.restaurants.insertOne({ name: "Chai Cafe", address: { street: "Some street 1", streetNumber: "23b" } })
// {
//   acknowledged: true,
//   insertedId: ObjectId('68a772ea52e1b299d9eec4a9')
// }
// ratingportal> db.restaurants.insertOne({ name: "Burger House", address: { street: "Some street 2", streetNumber: "23a" } })
// {
//   acknowledged: true,
//   insertedId: ObjectId('68a7730b52e1b299d9eec4aa')
// }
// ratingportal> show dbs
// admin         40.00 KiB
// config        92.00 KiB
// local         40.00 KiB
// ratingportal   8.00 KiB
// ratingportal> db.restaurants.find()
// [
//   {
//     _id: ObjectId('68a772ea52e1b299d9eec4a9'),
//     name: 'Chai Cafe',
//     address: { street: 'Some street 1', streetNumber: '23b' }
//   },
//   {
//     _id: ObjectId('68a7730b52e1b299d9eec4aa'),
//     name: 'Burger House',
//     address: { street: 'Some street 2', streetNumber: '23a' }
//   }
// ]
// ratingportal> db.restaurants.find({ restaurants[0] })
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:33)

// > 1 | db.restaurants.find({ restaurants[0] })
//     |                                  ^
//   2 |

// ratingportal> db.restaurants.find({ restaurants,[0] })
// Uncaught:
// SyntaxError: Unexpected token (1:38)

// > 1 | db.restaurants.find({ restaurants,[0] })

// ratingportal> db.restaurants.find({ name: "Chai Cafe" })
// [
//   {
//     _id: ObjectId('68a772ea52e1b299d9eec4a9'),
//     name: 'Chai Cafe',
//     address: { street: 'Some street 1', streetNumber: '23b' }
//   }
// ]
// ratingportal> db.restaurants.find()
// [
//   {
//     _id: ObjectId('68a772ea52e1b299d9eec4a9'),
//     name: 'Chai Cafe',
//     address: { street: 'Some street 1', streetNumber: '23b' }
//   },
//   {
//     _id: ObjectId('68a7730b52e1b299d9eec4aa'),
//     name: 'Burger House',
//     address: { street: 'Some street 2', streetNumber: '23a' }
//   }
// ]
// ratingportal> db.restaurants.find({}, { name: 1 })
// [
//   { _id: ObjectId('68a772ea52e1b299d9eec4a9'), name: 'Chai Cafe' },
//   { _id: ObjectId('68a7730b52e1b299d9eec4aa'), name: 'Burger House' }
// ]
// ratingportal> db.restaurants.find({}, { name: 0 })
// [
//   {
//     _id: ObjectId('68a772ea52e1b299d9eec4a9'),
//     address: { street: 'Some street 1', streetNumber: '23b' }
//   },
//   {
//     _id: ObjectId('68a7730b52e1b299d9eec4aa'),
//     address: { street: 'Some street 2', streetNumber: '23a' }
//   }
// ]
// ratingportal> db.restaurants.find({}, { address: 1 })
// [
//   {
//     _id: ObjectId('68a772ea52e1b299d9eec4a9'),
//     address: { street: 'Some street 1', streetNumber: '23b' }
//   },
//   {
//     _id: ObjectId('68a7730b52e1b299d9eec4aa'),
//     address: { street: 'Some street 2', streetNumber: '23a' }
//   }
// ]
// ratingportal> db.restaurants.find({}, { address: 0 })
// [
//   { _id: ObjectId('68a772ea52e1b299d9eec4a9'), name: 'Chai Cafe' },
//   { _id: ObjectId('68a7730b52e1b299d9eec4aa'), name: 'Burger House' }
// ]
// ratingportal> db.restaurants.find()
// [
//   {
//     _id: ObjectId('68a772ea52e1b299d9eec4a9'),
//     name: 'Chai Cafe',
//     address: { street: 'Some street 1', streetNumber: '23b' }
//   },
//   {
//     _id: ObjectId('68a7730b52e1b299d9eec4aa'),
//     name: 'Burger House',
//     address: { street: 'Some street 2', streetNumber: '23a' }
//   }
// ]
// ratingportal> db.restaurants.find({}, { _id: 1, name: 1 })
// [
//   { _id: ObjectId('68a772ea52e1b299d9eec4a9'), name: 'Chai Cafe' },
//   { _id: ObjectId('68a7730b52e1b299d9eec4aa'), name: 'Burger House' }
// ]
// ratingportal> db.restaurants.find({}, { _id: 1, address: 1 })
// [

// ratingportal> db.restaurants.find()
// [
//   {
//     _id: ObjectId('68a772ea52e1b299d9eec4a9'),

// ratingportal> db.restaurants.find()
// [
//   {
//     _id: ObjectId('68a772ea52e1b299d9eec4a9'),
//     name: 'Chai Cafe',
//     address: { street: 'Some street 1', streetNumber: '23b' }
//   },
//   {
//     _id: ObjectId('68a7730b52e1b299d9eec4aa'),
//     name: 'Burger House',
//     address: { street: 'Some street 2', streetNumber: '23a' }
//   }
// ]
// ratingportal> db.restaurants.updateOne({_id: ObjectId("68a7730b52e1b299d9eec4aa")}, {$set: { name: "Pizza House" }})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// ratingportal> db.restaurants.find()
// [
//   {
//     _id: ObjectId('68a772ea52e1b299d9eec4a9'),
//     name: 'Chai Cafe',
//     address: { street: 'Some street 1', streetNumber: '23b' }
//   },
//   {
//     _id: ObjectId('68a7730b52e1b299d9eec4aa'),
//     name: 'Pizza House',
//     address: { street: 'Some street 2', streetNumber: '23a' }
//   }
// ]
// ratingportal> db.restaurants.find()
// [
//   {
//     _id: ObjectId('68a772ea52e1b299d9eec4a9'),
//     name: 'Chai Cafe',
//     address: { street: 'Some street 1', streetNumber: '23b' }
//   },


// ratingportal> db.restaurants.find()
// [
//   {
//     _id: ObjectId('68a7fb0f52e1b299d9eec4ae'),
//     name: 'Chai Cafe',
//     address: {
//       street: 'Some Street',
//       streetNumber: '120',
//       postalCode: 12030,
//       city: 'Munich',
//       country: 'Germany'
//     },
//     type: { typeId: ObjectId('68a7f86552e1b299d9eec4ab'), name: 'German' }
//   }
// ]
// ratingportal> db.types.find()
// [
//   { _id: ObjectId('68a7f86552e1b299d9eec4ab'), name: 'German' },
//   { _id: ObjectId('68a7f86c52e1b299d9eec4ac'), name: 'American' },
//   { _id: ObjectId('68a7f87352e1b299d9eec4ad'), name: 'Italian' }
// ]
// ratingportal> db.restaurants.insertOne({name: "Berlin Burger House", address: { street: "Some Street", streetNumber: "220", postalCod
// ratingportal> db.types.find()
// [
//   { _id: ObjectId('68a7f86552e1b299d9eec4ab'), name: 'German' },
//   { _id: ObjectId('68a7f86c52e1b299d9eec4ac'), name: 'American' },
//   { _id: ObjectId('68a7f87352e1b299d9eec4ad'), name: 'Italian' }
// ]
// ratingportal> db.restaurants.insertOne({name: "Berlin Burgerhouse", address: {street: "Foodstreet", streetNumber: "220", postalCode: 830982, city: "Munich", country: "Germany"}, type: {typeId: ObjectId("68a7f86c52e1b299d9eec4ac"), name: "American"}})
// {
//   acknowledged: true,
//   insertedId: ObjectId('68a7fe1052e1b299d9eec4af')
// }
// ratingportal> db.restaurants.find()
// [
//   {
//     _id: ObjectId('68a7fb0f52e1b299d9eec4ae'),
//     name: 'Chai Cafe',
//     address: {
//       street: 'Some Street',
//       streetNumber: '120',
//       postalCode: 12030,
//       city: 'Munich',
//       country: 'Germany'
//     },
//     type: { typeId: ObjectId('68a7f86552e1b299d9eec4ab'), name: 'German' }
//   },
//   {
//     _id: ObjectId('68a7fe1052e1b299d9eec4af'),
//     name: 'Berlin Burgerhouse',
//     address: {
//       street: 'Foodstreet',
//       streetNumber: '220',
//       postalCode: 830982,
//       city: 'Munich',
//       country: 'Germany'
//     },
//     type: { typeId: ObjectId('68a7f86c52e1b299d9eec4ac'), name: 'American' }
//   }
// ]
// ratingportal> db.reviews.insertOne({reviewer: {fisrtname: "Hasrat", lastName: "Khan"}, rating: 3, text: "This was okay - could be better!", date: new Date("2025-08-22"), restaurant: { id: ObjectId("68a7fb0f52e1b299d9eec4ae"), name: "Chai Cafe" } })
// {
//   acknowledged: true,
//   insertedId: ObjectId('68a83c7652e1b299d9eec4b0')
// }
// ratingportal> db.reviews.find()
// [
//   {
//     _id: ObjectId('68a83c7652e1b299d9eec4b0'),
//     reviewer: { fisrtname: 'Hasrat', lastName: 'Khan' },
//     rating: 3,
//     text: 'This was okay - could be better!',
//     date: ISODate('2025-08-22T00:00:00.000Z'),
//     restaurant: { id: ObjectId('68a7fb0f52e1b299d9eec4ae'), name: 'Chai Cafe' }
//   }
// ]
// ratingportal> db.reviews.insertOne({reviewer: {fisrtname: "Shehzad", lastName: "Khan"}, rating: 5, text: "This was Amazing!", date: new Date("2025-08-22"), restaurant: { id: ObjectId("68a7fe1052e1b299d9eec4af"), name: "Berlin Burgerhouse" } })
// {
//   acknowledged: true,
//   insertedId: ObjectId('68a8401552e1b299d9eec4b1')
// }
// ratingportal> db.review.find()

// ratingportal> db.reviews.find()
// [
//   {
//     _id: ObjectId('68a83c7652e1b299d9eec4b0'),
//     reviewer: { fisrtname: 'Hasrat', lastName: 'Khan' },
//     rating: 3,
//     text: 'This was okay - could be better!',
//     date: ISODate('2025-08-22T00:00:00.000Z'),
//     restaurant: { id: ObjectId('68a7fb0f52e1b299d9eec4ae'), name: 'Chai Cafe' }
//   },
//   {
//     _id: ObjectId('68a8401552e1b299d9eec4b1'),
//     reviewer: { fisrtname: 'Shehzad', lastName: 'Khan' },
//     rating: 5,
//     text: 'This was Amazing!',
//     date: ISODate('2025-08-22T00:00:00.000Z'),
//     restaurant: {
//       id: ObjectId('68a7fe1052e1b299d9eec4af'),
//       name: 'Berlin Burgerhouse'
//     }
//   }
// ]
// ratingportal> db.reviews.find({rating: {$gt: 4}})
// [
//   {
//     _id: ObjectId('68a8401552e1b299d9eec4b1'),
//     reviewer: { fisrtname: 'Shehzad', lastName: 'Khan' },
//     rating: 5,
//     text: 'This was Amazing!',
//     date: ISODate('2025-08-22T00:00:00.000Z'),
//     restaurant: {
//       id: ObjectId('68a7fe1052e1b299d9eec4af'),
//       name: 'Berlin Burgerhouse'
//     }
//   }
// ]
// ratingportal> db.reviews.find({$and: [{ rating: {$gt: 1}}, { rating: {$lt: 3} }] })

// ratingportal> db.reviews.find({$and: [{ rating: {$gt: 1}}, { rating: {$lte: 3} }] })
// [
//   {
//     _id: ObjectId('68a83c7652e1b299d9eec4b0'),
//     reviewer: { fisrtname: 'Hasrat', lastName: 'Khan' },
//     rating: 3,
//     text: 'This was okay - could be better!',
//     date: ISODate('2025-08-22T00:00:00.000Z'),
//     restaurant: { id: ObjectId('68a7fb0f52e1b299d9eec4ae'), name: 'Chai Cafe' }
//   }
// ]
// ratingportal> db.restaurants.find()
// [
//   {
//     _id: ObjectId('68a7fb0f52e1b299d9eec4ae'),
//     name: 'Chai Cafe',
//     address: {
//       street: 'Some Street',
//       streetNumber: '120',
//       postalCode: 12030,
//       city: 'Munich',
//       country: 'Germany'
//     },
//     type: { typeId: ObjectId('68a7f86552e1b299d9eec4ab'), name: 'German' }
//   },
//   {
//     _id: ObjectId('68a7fe1052e1b299d9eec4af'),
//     name: 'Berlin Burgerhouse',
//     address: {
//       street: 'Foodstreet',
//       streetNumber: '220',
//       postalCode: 830982,
//       city: 'Munich',
//       country: 'Germany'
//     },
//     type: { typeId: ObjectId('68a7f86c52e1b299d9eec4ac'), name: 'American' }
//   }
// ]
// ratingportal> db.restaurants.updateOne({_id: ObjectId('68a7fb0f52e1b299d9eec4ae'}, {$set: {"address.street": "Chai Street"}})
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:66)

// > 1 | db.restaurants.updateOne({_id: ObjectId('68a7fb0f52e1b299d9eec4ae'}, {$set: {"address.street": "Chai Street"}})
//     |                                                                   ^
//   2 |

// ratingportal> db.restaurants.updateOne({_id: ObjectId('68a7fb0f52e1b299d9eec4ae')}, {$set: {"address.street": "Chai Street"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// ratingportal> db.restaurants.find()
// [
//   {
//     _id: ObjectId('68a7fb0f52e1b299d9eec4ae'),
//     name: 'Chai Cafe',
//     address: {
//       street: 'Chai Street',
//       streetNumber: '120',
//       postalCode: 12030,
//       city: 'Munich',
//       country: 'Germany'
//     },
//     type: { typeId: ObjectId('68a7f86552e1b299d9eec4ab'), name: 'German' }
//   },
//   {
//     _id: ObjectId('68a7fe1052e1b299d9eec4af'),
//     name: 'Berlin Burgerhouse',
//     address: {
//       street: 'Foodstreet',
//       streetNumber: '220',
//       postalCode: 830982,
//       city: 'Munich',
//       country: 'Germany'
//     },
//     type: { typeId: ObjectId('68a7f86c52e1b299d9eec4ac'), name: 'American' }
//   }
// ]
// ratingportal>