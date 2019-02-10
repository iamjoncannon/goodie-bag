'use strict'
const axios = require('axios')
const { db, Candy } = require('./../db/models/Candy')

const router = require('express').Router()

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

router.get('/candy', async (req, res, next)=>{

	let data  = await Candy.findAll()
	res.json(data)
	res.end()

})

router.put('/candy', async (req, res, next)=>{

	const [numberOfAffectedRows, affectedRows]  = await Candy.update( 
		    {
		      quantity: req.body.quant, 
		    },
		    {
		      where: { id: req.body.id, },
		      returning: true,
		      plain: true
		    }
		  );
	
	res.json(affectedRows.dataValues)
	res.end()

})

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
