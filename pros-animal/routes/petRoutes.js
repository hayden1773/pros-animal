const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

// Define routes
// petController.js

const Pet = require('../models/Pet');

exports.createPet = async (req, res) => {
  try {
    const { name, species, breed, age } = req.body;
    const pet = new Pet({ name, species, breed, age });
    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.get('/', petController.getAllPets);
router.post('/', petController.createPet);
router.get('/:id', petController.getPetById);
router.put('/:id', petController.updatePet);
router.delete('/:id', petController.deletePet);

module.exports = router;