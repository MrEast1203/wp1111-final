import Event from '../models/event';

exports.GetEvent = async (req, res) => {
  const id = req.query.id;
  await Event.find({ id: id }).exec((err, data) => {
    if (!err) res.status(200).send({ message: 'success', contents: data });
    else res.status(403).send({ message: 'error', contents: [] });
  });
};
