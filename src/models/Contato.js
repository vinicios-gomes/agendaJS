const mongoose = require("mongoose");

const ContatoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    telefone: {
      type: String,
      required: true
    },
    telefone2: {
      type: String,
      required: false
    },
    cidade: {
      type: String
    },
    estado: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Contato", ContatoSchema);
