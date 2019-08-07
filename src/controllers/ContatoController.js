const Contato = require("../models/Contato");

class ContatoController {
  //lista todos os contatos
  async index(req, res) {
    const { page = 1 } = req.query;

    // const contato = await Contato.paginate({}, { page, limit: 10 });
    const contato = await Contato.find({});
    return res.json(contato);
  }

  //mostra contato

  async show(req, res) {
    const { nome } = req.body;

    const contato = await Contato.findOne({ nome });

    return res.json(contato);
  }

  //cria contato
  async store(req, res) {
    const {
      nome,
      sobrenome,
      organizacao,
      telefone,
      telefone2,
      cidade,
      estado,
      obs
    } = req.body;

    const contato = await Contato.create({
      nome,
      sobrenome,
      organizacao,
      telefone,
      telefone2,
      cidade,
      estado,
      obs
    });

    await contato.save();

    return res.json({ contato });
  }

  //atualiza contato
  async update(req, res, params) {
    const {
      nome,
      sobrenome,
      organizacao,
      telefone,
      telefone2,
      cidade,
      estado,
      obs
    } = req.body;

    const contato = await Contato.findByIdAndUpdate(
      req.params.id,
      {
        nome,
        sobrenome,
        organizacao,
        telefone,
        telefone2,
        cidade,
        estado,
        obs
      },
      {
        new: true
      }
    );

    await contato.save();

    return res.json({ contato });
  }

  //deleta contato
  async delete(req, res, params) {
    const contato = await Contato.findByIdAndRemove(req.params.id);

    return res.send();
  }
}

module.exports = new ContatoController();
