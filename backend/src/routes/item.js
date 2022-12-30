import Item from '../models/item';

exports.GetItem = async (req, res) => {
  const id = req.query.id;
  await Item.find({ id: id }).exec((err, data) => {
    if (!err) res.status(200).send({ message: 'success', contents: data });
    else res.status(403).send({ message: 'error', contents: [] });
  });
};
