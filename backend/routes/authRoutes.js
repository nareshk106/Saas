import express from "express"
import { Login, Register, verifyToken } from "../controllers/routeControllers.js";
const router = express.Router()
import { verifyUser } from "../middlewares/authMiddleware.js"; // ✅ import middleware
// register routes 
router.post('/register', Register);
// login routes 
router.post('/login', Login);
// veryfying routes 
// router.get("/verify-token", verifyToken);
// ✅ Token verification route (protected by middleware)
// ✅ Token verification route (protected by middleware)
router.get("/verify", verifyUser, (req, res) => {
  res.status(200).json({
    valid: true,
    user: req.user, // comes from middleware
    message: "Token verified successfully",
  });
});


    export default router;