let scanf = require('scanf');

const produtos = [
  {
    nome: 'Notebook',
    categoria: 'Eletrônico',
    valor: 1999.99,
  },
  {
    nome: 'Impressora',
    categoria: 'Eletrônico',
    valor: 999.99,
  },
  {
    nome: 'Caneta BIC',
    categoria: 'Escolar',
    valor: 0.5,
  },
  {
    nome: 'Lapiseira Pentel',
    categoria: 'Escolar',
    valor: 7.5,
  },
];

function listar_por_categoria(cate) {
  produtos.forEach((p) => {
    if (p.categoria == cate) {
      console.log(p);
    }
  });
}

function listar_por_valor(valor_minimo, valor_maximo) {
  produtos.forEach((p) => {
    if (p.valor >= valor_minimo && p.valor <= valor_maximo) {
      console.log(p);
    }
  });
}

function listar() {
  produtos.forEach((p) => {
    console.log(p);
  });
}

const escolar = 'Escolar';
listar_por_categoria(escolar);
listar_por_valor(5, 10);
