const Contato = require("../models/Contato");

class ContatoController {
  //lista todos os contatos
  async listContato(req, res) {
    try {
      const contato = await Contato.find().sort("-createdAt");

      return res.json(contato);
    } catch (err) {
      return res.status(400).send({ error: "Erro ao listar contato" });
    }
  }

  //cria contato
  async createContato(req, res) {
    const { nome, telefone, telefone2, cidade, estado } = req.body;

    const contato = await Contato.create({
      nome,
      telefone,
      telefone2,
      cidade,
      estado
    });

    // req.io.emit("contato", contato);

    await contato.save();

    return res.json({ contato });
  }

  //mostra contato pelo id
  async showContato(req, res, params) {
    try {
      const contato = await Contato.findById(req.params.id);

      return res.send(contato);
    } catch (err) {
      return res.status(400).send({ error: "Erro ao listar contato" });
    }
  }

  //atualiza contato pelo id
  async atualizaContato(req, res, params) {
    try {
      const { nome, telefone, telefone2, cidade, estado } = req.body;

      const contato = await Contato.findByIdAndUpdate(
        req.params.id,
        {
          nome,
          telefone,
          telefone2,
          cidade,
          estado
        },
        {
          new: true
        }
      );

      await contato.save();

      return res.send({ contato });
    } catch (err) {
      return res.status(400).send({ error: "Erro ao atualizar contato" });
    }
  }
  async deletaContato(req, res, params) {
    try {
      const contato = await Contato.findByIdAndRemove(req.params.id);

      return res.send();
    } catch (err) {
      return res.status(400).send({ error: "Erro ao deletar o contato" });
    }
  }
}

module.exports = new ContatoController();
