const express = require('express')
const router=express.Router()
const mongoose=require('mongoose')
const controller=require('../controllers/controller')
// const validatemiddleware=require('../middlewares/validate-middleware')
// const signupSchema = require('../validators/validators')
// const authMiddleware=require('../middlewares/auth-validation')
router.route('/').get(controller.home);
router.route('/signup').post(controller.signup);
router.route('/userdata').get(controller.userdata)
router.route('/login').post(controller.login)

// router.route('/profileupdate').patch(controller.profileupdate)
// router.route('/getuserdata').get(controller.userdata)

module.exports=router