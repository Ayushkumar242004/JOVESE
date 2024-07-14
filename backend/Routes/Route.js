const express = require('express')
const router=express.Router()
const mongoose=require('mongoose')
const controller=require('../controllers/controller')
const validatemiddleware=require('../middlewares/validate-middleware')
const signupSchema = require('../validators/miniValidation')
const authMiddleware=require('../middlewares/auth-validation')
router.route('/').get(controller.home);
router.route('/signup').post(validatemiddleware(signupSchema),controller.signup);
router.route('/userdata').get(authMiddleware,controller.userdata)
router.route('/login').post(controller.login)

router.route('/profileupdate').patch(authMiddleware,controller.profileupdate)
router.route('/getuserdata').get(authMiddleware,controller.userdata)
module.exports=router