import Hero from "../models/hero";

exports.GetHero = async (req, res) => {
  const id = req.query.id;
  console.log("req", req);
  console.log("id", id);
  await Hero.find({ id: id }).exec((err, data) => {
    if (!err) {
      console.log("data", data);
      res.status(200).send({ message: "success", contents: data });
    } else {
      console.log("err", err);
      res.status(403).send({ message: "error", contents: [] });
    }
  });
};

exports.CreateHero = async (req, res) => {
  const body = req.body;
  const hero = new Hero(body);
  try {
    await hero.save();
    res.status(200).send({ message: "success", contents: body });
  } catch (e) {
    console.log(err);
    res.status(403).send({ message: "error", contents: [] });
  }
};
//ffff
exports.UpdateHero = async (req, res) => {
  const body = req.body;
  try {
    updated_hero = await Hero.updateOne({ id: body.id }, { $set: body });
    res.status(200).send({ message: "success", contents: updated_hero });
  } catch (err) {
    console.log(err);
    res.status(403).send({ message: "error", contents: [] });
  }
};
