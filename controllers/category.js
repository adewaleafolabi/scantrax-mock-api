// ./controllers/category
//const Model = require('../model');
//const {Product, Manufacturer} = Model;
const categories = [
  {
    "image": null,
    "id": 1,
    "catName": "Default",
    "description": "Default Product Category",
    "dateCreated": 1485630900000
  },
  {
    "image": "http://res.cloudinary.com/debrasgr/image/upload/v1501752774/Shoes.jpg.jpg",
    "id": 8,
    "catName": "Shoes",
    "description": "Categories for Shoes",
    "dateCreated": 1501752775000
  },
  {
    "image": "http://res.cloudinary.com/debrasgr/image/upload/v1507148447/Bags.jpg.png",
    "id": 9,
    "catName": "Bags",
    "description": "Categories for all Bags",
    "dateCreated": 1507148447000
  },
  {
    "image": "http://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAA3ZAAAAJGMwOGJjYmQ0LTgyZjYtNGE0Mi04Nzg3LTIxMTI2N2FmYzEwZA.jpg",
    "id": 10,
    "catName": "Clothes",
    "description": "Categories for all clothes",
    "dateCreated": 1507148495000
  }
];

const categoryController = {
    all (req, res) {
      // Returns all categories
      res.json({categoryList: categories})
    }
};

module.exports = categoryController;