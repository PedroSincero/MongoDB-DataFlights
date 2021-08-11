const latam = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  latam,
  totalVoosDomesticos: db.voos.count({
    $and: [{
        natureza: "Doméstica",
      },
      {
        "empresa.nome": latam,
      },
    ],
  }),
});
db.resumoVoos.findOne({
  latam,
}, {
  _id: false,
  empresa: true,
  totalVoosDomesticos: true,
});