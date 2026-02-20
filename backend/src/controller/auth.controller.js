const userRole = require("../domain/user.role");
const authService = require("../service/auth.service");

class AuthController {
  async sendLoginOtp(req, res) {
    try {
      const email = req.body.email;
      
      await authService.sendLoginOtp(email);
      return res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
      res
        .status(error instanceof Error ? 400 : 500)
        .json({ message: error.message });
    }
  }

  async CreateUser(req , res) {
    try {
      const jwt = await authService.createUser(req.body);      

      const response = {
        jwt,
        user: userRole.CUSTOMER,
        message: "User created successfully" // This line is causing the error.
      };
      return res.status(200).json(response);
    } catch (error) {
      res
        .status(error instanceof Error ? 400 : 500)
        .json({ message: error.message });
    }
  }

  async signInUser(req, res) {
    try {
      const response = await authService.signIn(req.body);

      return res.status(200).json(response);
    } catch (error) {
      res
        .status(error instanceof Error ? 400 : 500)
        .json({ message: error.message });
    }
  }
}

module.exports = new AuthController();
