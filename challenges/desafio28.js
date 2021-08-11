const empresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insert({
  empresa,
  totalVoosDomesticos: db.voos.count({
    $and: [{
        natureza: "Doméstica",
      },
      {
        "empresa.nome": empresa,
      },
    ],
  }),
});
db.resumoVoos.findOne({
  empresa,
}, {
  _id: false,
  empresa: true,
  totalVoosDomesticos: true,
});