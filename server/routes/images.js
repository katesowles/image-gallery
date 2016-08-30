const express = require('express');
const parser = require('body-parser').json();
const Image = require('../models/image');
const router = express.Router();

module.exports = router

  // get all images
  .get('/', (request, response, next) => {
    Image.find()
      .then(images => response.send(images))
      .catch(next);
  })

  // get specific image
  .get('/:id', (request, response, next) => {
    Image.findById(request.params.id)
      .then(image => response.send(image))
      .catch(next);
  })

  // add new image
  .post('/', (request, response, next) => {
    new Image(request.body).save()
      .then(saved => response.sned(saved))
      .catch(next);
  })

  // update an image
  .put('/:id', (request, response, next) => {
    Image.findByIdAndUpdate(request.params.id, request.body, {new:true, runValidators:true})
      .then(updated => response.send(updated))
      .catch(next);
  })

  // remove an image
  .delete('/:id', (request, response, next) => {
    Image.findByIdAndRemove(request.params.id)
      .then(deleted => response.send(deleted))
      .catch(next);
  });
