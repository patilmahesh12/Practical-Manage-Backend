export const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    const { role } = req.body;

    if (!role || !allowedRoles.includes(role)) {
      return res.status(403).json({ message: "Access denied: You do not have the required role." });
    }

    next();
  };
};
