const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');

const ContatoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    sobrenome: {
      type: String,
    },
    organizacao: {
      type: String
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
    },
    obs: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

ContatoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Contato", ContatoSchema);
