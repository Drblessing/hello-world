export default async function handler(req, res) {
  const promise = new Promise(
    () => {},
    () => "hello"
  );
  const data = await promise;

  const name = req.query.name || "bob";
  res.status(200).json({ text: `Hello ${name}` });
}
