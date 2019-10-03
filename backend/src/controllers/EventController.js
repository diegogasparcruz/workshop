const Event = require('../models/Event');

module.exports = {

  async index(req, res){

    const events = await Event.find().sort('-createdAt');

    return res.json(events);

  },

  async store(req, res){

    const event = await Event.create(req.body);

    return res.json(event);

  },
  
  async show(req, res){

    const event = await Event.findById(req.params.id);

    return res.json(event);

  },

  async update(req, res){

    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(event);

  }, 

  async destroy(req, res){

    await Event.findByIdAndDelete(req.params.id);

    return res.json({ message: 'Deletado com sucesso!' });

  }

}