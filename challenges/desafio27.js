db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
    $and: [{
        natureza: "Doméstica"
      },
      {
        "empresa.nome": "PASSAREDO"
      },
    ],
  }),
});

db.resumoVoos.findOne({
  {
    empresa: "PASSAREDO"
  },
  {
    _id: false,
    empresa: true,
    totalVoosDomesticos: true
  }
});

// Agradecimentos a Lucas Martins Turma 10 - Tribo B, Por ter me auxiliado na criação do codigo 