export default function handler(req, res) {
  const name = req.query.name || "bob";
  res.status(200).json({ text: `Hello ${name}` });
}
