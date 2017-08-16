const express = require('express');
const router = express.Router();
const Note = require('../models/note');
//CRUD
//GET - fetching data from database
//POST - create new document in database in mongo,
//PUT - update an existing document
//DELETE - destroying a existing document

router.get('/', (req, res) => {
  Note.find( ( err, notes) => {
    res.json(notes);
  });
});

//{ title: 'example', body: 'new body'}
router.post('/', (req, res) => {
  let { title, body, lender, em, sd, dd, fa, sm } = req.body;
  new Note({
    title,
    body,
    lender,
    em,
    sd,
    dd,
    fa,
    sm,
  }).save( (err, note) => {
    if (err)
      return res.json(err);
    return res.json(note);
  });
});


// DELETE - localhost:3001/api/notes/_!@$#@RWFD%^
// if under new, add { upsert : true }, will create a new note if did not find a matching result
// without new, will return the old model, but with new true, will return the updated model from mongo
router.put('/:id', (req, res) => {
  let { title, body,  lender, em, sd, dd, fa, sm  } = req.body;
  Note.findByIdAndUpdate(
    req.params.id,
    { $set: { title, 
      body, 
      lender, 
      em,
      sd,
      dd,
      fa,
      sm, updatedAt: Date.now() }},
    { new: true },
    ( err, note) => {
      if (err)
        return res.json(err)
      return res.json(note)
    }
  )
});

router.delete('/:id', (req, res) => {
  Note.findByIdAndRemove(req.params.id, (err) => {
    if (err)
      return res.json(err)
    return res.sendStatus(204);
  });
});

module.exports = router;
