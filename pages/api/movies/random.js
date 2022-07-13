import { movies } from "./index";

export default function (req, res) {
  if (req.method === "GET") {
    res.status(200).json(movies[parseInt(Math.random() * 20)]);
  }
}
