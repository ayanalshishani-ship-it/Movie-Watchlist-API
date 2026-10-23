
export function authorizeModification(req, res, next) {
  const targetUserId = Number(req.params.userId);
  const requesterId = Number(req.user.id);

  if (
    req.user.role !== "parent" &&
    (req.user.role !== "child" || targetUserId !== requesterId)
  ) {
    return res.status(403).json({
      error: "Access denied",
    });
  }

  next();
}
