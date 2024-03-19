import jwt from "jsonwebtoken";

export default (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Assuming Bearer token

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not defined.");
    }

    jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err: jwt.VerifyErrors | null, user: any) => {
        if (err) {
          // Token verification failed
          return res.status(401).json({ error: "Unauthorized" });
        }

        // Token is valid, check expiry
        if (user.exp && user.exp * 1000 < Date.now()) {
          // Token has expired
          return res.status(401).json({ error: "Token expired" });
        }

        // Token is valid and not expired, attach user to request
        req.user = user;
        next();
      }
    );
  } else {
    // No token was provided, continue processing request
    next();
  }
};
