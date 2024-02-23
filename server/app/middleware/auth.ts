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
        if (!err) {
          req.user = user; // Successfully authenticated, attach user to request
        }
        // Proceed regardless of token validity; errors are handled or ignored
        next();
      }
    );
  } else {
    // No token was provided, continue processing request
    next();
  }
};
