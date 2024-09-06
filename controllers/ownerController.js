import Owner from '../models/ownerModel.js';

export async function getOwners(req, res) {
  try {
    const owners = await Owner.find();
    res.json(owners);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function postOwner(req, res) {
  const owner = new Owner(req.body);
  try {
    const newOwner = await owner.save();
    res.status(201).json(newOwner);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function putOwner(req, res) {
  try {
    const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }
    res.json(owner);
  } catch (error) {
    res.status(400).json(error);
  }
}
