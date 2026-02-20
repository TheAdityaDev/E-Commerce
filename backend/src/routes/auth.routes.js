const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
const rateLimitRoute = require("../api/apilimit.api");
const abortSignal = require("../api/abort.api");

router.post('/sent/login-signup-otp',rateLimitRoute,abortSignal(3000),authController.sendLoginOtp)
router.post('/signup',rateLimitRoute,abortSignal(3000),authController.CreateUser)
router.post('/signin',rateLimitRoute,abortSignal(3000),authController.signInUser)
module.exports = router