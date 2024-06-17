const express = require('express')
const router=express.Router()
const mongoose=require('mongoose')
const controller=require('../controllers/controller')
router.route('/').get(controller.home);

module.exports=router