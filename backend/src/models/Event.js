

const { model, Schema } = require('mongoose');

const EventSchema = new Schema({
  
  nome: { type: String, required: true },
  local: { type: String, required: true },
  horario: { type: String, required: true },
  data: { type: Date, required: true }

}, {
  timestamps: true
});

module.exports = model('Event', EventSchema);
