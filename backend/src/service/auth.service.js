const userRole = require("../domain/user.role");
const addressModel = require("../model/Address.model");
const cartModel = require("../model/cart.model");
const SellerModel = require("../model/seller.model");
const userModel = require("../model/User.model");
const verificationCodeModel = require("../model/verificatioCode.model");
const generateOtp = require("../util/genereateotp.util");
const jwtProvider = require("../util/jwtProvider.util");
const sendEmail = require("../util/sendEmail.util");
const bcrypt = require("bcrypt");

class authService {
  async sendLoginOtp(email) {
    const SIGNIN_PREFIX = "signin_";
    
    if (email.startsWith(SIGNIN_PREFIX)) {
      email =  email.slice(SIGNIN_PREFIX.length);
      
      const seller = await SellerModel.findOne({ email });
      const user = await userModel.findOne({ email });
      if (!user && !seller) throw new Error("User not found");
    }

    // Find existing OTP
    const existingVerificationCode = await verificationCodeModel.findOne({
      email,
    });

    // Delete old OTP if it exists
    if (existingVerificationCode) {
      await existingVerificationCode.deleteOne();
    }

    // Generate new OTP
    const otp = generateOtp.generateOtp();
    const hashedOtp = await generateOtp.hashOtp(otp);

    console.log("otp", otp);

    await verificationCodeModel.create({
      email,
      otp: hashedOtp,
      createdAt: new Date(),
    });

    // Send email
    const subject = "Zosh Bazar Login/Signup OTP";
    const body = `Your OTP is ${otp}. Please enter it to complete login process.`;

    setImmediate(() => {
      sendEmail(email, subject, body).catch((err) => {
        console.error("Email error:", err);
      });
    });
  }

  async createUser(req) {
    const { email, password, mobile, alternateNumber, name } = req;

    let user = await userModel.findOne({ email });

    if (user) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    let newUser = await userModel.create({
      email,
      password: hashedPassword,
      mobile,
      alternateNumber,
      name,
      role: userRole.CUSTOMER,
    });
    await newUser.save();

    const cart = await cartModel.create({
      user: newUser._id,
    });
    await cart.save();

    return jwtProvider.createJWT({ email });
  }

  async signIn(req) {
    const { email, password, otp } = req;

    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    if (!password || !user.password) {
      throw new Error("Password missing");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const verificationCode = await verificationCodeModel.findOne({ email });
    if (!verificationCode) {
      throw new Error("Verification code not found");
    }

    const OTP_EXPIRY = 5 * 60 * 1000; // 5 minutes
    if (Date.now() - verificationCode.createdAt.getTime() > OTP_EXPIRY) {
      throw new Error("OTP expired");
    }

    if (!otp) {
      throw new Error("OTP missing");
    }

    const hashedInputOtp = await generateOtp.hashOtp(otp);
    if (hashedInputOtp !== verificationCode.otp) {
      throw new Error("Invalid OTP");
    }

    await verificationCode.deleteOne();

    const token = jwtProvider.createJWT({ email });

    return {
      message: "Login successful",
      token,
      role: user.role,
    };
  }
}

module.exports = new authService();
