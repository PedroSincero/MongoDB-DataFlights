db.voos.findOne({
  $and: [{
      $or: [{
        "empresa.nome": "DELTA AIRLINES",
      }, {
        "empresa.nome": "AMERICAN AIRLINES",
      }],
    },
    {
      $and: [{
          "aeroportoDestino.sigla": "KJFK",
        },
        {
          "aeroportoOrigem.sigla": "SBGR",
        },
      ],
    },
  ],
}, {
  vooId: true,
  _id: false,
});