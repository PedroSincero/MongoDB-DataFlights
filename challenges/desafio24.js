db.voos.findOne({
  $and: [{
      litrosCombustivel: {
        $exists: true,
      },
    },
    {
      $and: [{
          "empresa.nome": {
            $not: {
              $in: ["GOL", "AZUL"],
            },
          },
        },
        {
          litrosCombustivel: {
            $lt: 600,
          },
        },
      ],
    },
  ],
}, {
  vooId: true,
  _id: false,
  litrosCombustivel: true,
  "empresa.nome": true,
});