import jwt from "jsonwebtoken";

export const verifyUser = async (req, res, next) => {
  try {
    // 1️⃣ Extract token from headers
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 2️⃣ Verify the token
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3️⃣ Attach user info to request object
    req.user = decoded; // now req.user will have id and email

    // 4️⃣ Continue to controller
    next();
  } catch (error) {
    console.error("❌ Token verification failed:", error.message);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
