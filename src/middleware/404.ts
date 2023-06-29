import { RequestHandler } from "express";

const error404: RequestHandler = (req, res) => {
  return res.status(404).json({ message: "Could not this route" });
};

export default error404;
