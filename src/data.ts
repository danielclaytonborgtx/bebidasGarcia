export const categories = [
  {
    id: 1,
    name: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Comida",
    image:
      "https://media.istockphoto.com/id/1358848345/pt/foto/traditional-fried-coxinha-on-a-black-plate-on-a-slate-background-brazilian-snack.jpg?s=1024x1024&w=is&k=20&c=l_I_HivRKfUXMM3cbSfsskd3FGxXM-Dm9FPCi9tqyCw=",
  },
  {
    id: 3,
    name: "Outros",
    image:
      "https://tiermaker.com/images/templates/tier-list-de-salgadinhos-1381757/13817571638408700.jpeg",
  },
];

export const subCategories = [
  {
    id: 1,
    categoryId: 1,
    name: "Cervejas",
    image:
      "https://recursos.clubedomalte.com.br/i/_mainstream/populares_mob_.png",
  },
  {
    id: 2,
    categoryId: 1,
    name: "Refrigerantes",
    image:
      "https://www.imagensempng.com.br/wp-content/uploads/2021/07/Bebida-latinha-Png-800x445.png",
  },
  {
    id: 3,
    categoryId: 1,
    name: "Sucos",
    image:
      "https://embalagemmarca.com.br/wp-content/uploads/2016/05/Maguary.jpg",
  },
  {
    id: 4,
    categoryId: 2,
    name: "Lanches",
    image:
      "https://www.sabornamesa.com.br/media/k2/items/cache/0b2c0f4f7276d5cab9ebf370bc3a4b57_XL.jpg",
  },
  {
    id: 5,
    categoryId: 2,
    name: "Caldos",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrqRrrGh_ibl2z11NNBJtlmIJ1B_yZWM-mQ&usqp=CAU",
  },
];

export const products = [
  {
    id: 1,
    subCategoryId: 1,
    name: "Skol",
    price: 7.0,
    image:
      "https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/cerveja-skol-lata-350-ml1-88e9ddb969ead66b5115676905786743-640-0.jpg",
  },
  {
    id: 2,
    subCategoryId: 1,
    name: "Brahma",
    price: 7.0,
    image:
      "https://images-americanas.b2w.io/produtos/136883834/imagens/cerveja-brahma-chopp-lata-473ml/136883834_1_large.jpg",
  },
  {
    id: 3,
    subCategoryId: 2,
    name: "Coca-Cola",
    price: 5.0,
    image:
      "https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/1984-refrigerante-coca-cola-lata-350ml.jpg?s=ef1f9ccf20330fe8f998c65372625c77",
  },
  {
    id: 4,
    subCategoryId: 2,
    name: "Guaraná",
    price: 5.0,
    image:
      "https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/1935-refrigerante-guarana-antarctica-lata-350ml.jpg?s=68ad7993ce4359e664782d2ab309bfcf",
  },
  {
    id: 5,
    subCategoryId: 3,
    name: "Laranja",
    price: 5.0,
    image: "https://media.soujusto.com.br/products/la2.png",
  },
  {
    id: 6,
    subCategoryId: 3,
    name: "Uva",
    price: 5.0,
    image:
      "https://images.tcdn.com.br/img/img_prod/602464/suco_uva_maguary_200ml_3263_1_bbe3717320ca6e96a042cbb42833b36d.jpg",
  },
  {
    id: 7,
    subCategoryId: 4,
    name: "X-Burguer",
    price: 10.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIiooXENOh5obj09ZK_csRsH_z81dtbLfkA&usqp=CAU",
  },
  {
    id: 8,
    subCategoryId: 4,
    name: "X-Salada",
    price: 12.0,
    image:
      "https://73c166dfsi.execute-api.us-east-1.amazonaws.com/prod/thumborVerify?h=orig&w=orig&u=https%3A%2F%2Fduisktnou8b89.cloudfront.net%2Fimg%2Fitems%2F606b3a1c505db.png",
  },
  {
    id: 9,
    subCategoryId: 5,
    name: "Caldo de Feijão",
    price: 10.0,
    image:
      "https://i2.wp.com/www.tvcatiafonseca.com.br/wp-content/uploads/2019/02/CALDO-DE-FEIJAO.jpg?fit=679%2C476&ssl=1",
  },
  {
    id: 10,
    subCategoryId: 5,
    name: "Caldo de Mandioca",
    price: 10.0,
    image:
      "https://naoca.blog.br/wp-content/uploads/2023/06/Caldo-de-Mandioca.png",
  },
];

export const sales = [
  {
    id: 1,
    title: "Promoção de Cervejas",
    description: "Compre 3 cervejas e ganhe 1",
    price: 10.0,
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "Promoção de Refrigerantes",
    description: "Compre 3 refrigerantes e ganhe 1",
    price: 10.0,
    image:
      "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];
