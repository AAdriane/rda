// Dados dos projetos exibidos nos cards da home e na página de detalhe.
// As pastas dentro de public/images/projetos/ não podem ser listadas em
// tempo de execução (não há backend), então os arquivos de cada projeto
// precisam ser declarados aqui.
export const PROJETOS = [
  {
    slug: 'sapateira',
    folder: 'sapateira',
    images: ['sapateira.jpg', 'sapateira-2.jpg'],
    thumbnail: '/images/sapateira.jpg',
    title: 'Sapateira',
    description:
      'Sapateira prática e funcional, ideal para organizar seus calçados.',
    secondaryDescription: 'Organização prática para seus calçados.',
  },
  {
    slug: 'roupeiro',
    folder: 'roupeiro',
    images: ['roupeiro.jpg', 'roupeiro-2.jpg'],
    thumbnail: '/images/roupeiro.jpg',
    title: 'Roupeiro',
    description:
      'Roupeiro espaçoso e resistente, produzido com material de alta qualidade. Com portas de correr, é ideal para otimizar o espaço do seu quarto.',
    secondaryDescription: 'Espaçoso e resistente, perfeito para roupas.',
  },
  {
    slug: 'banheiro',
    folder: 'banheiro',
    images: ['banheiro.jpg'],
    thumbnail: '/images/banheiro.jpg',
    title: 'Banheiro planejado',
    description:
      'Banheiro planejado com móveis sob medida, otimizando o espaço. Possui LED embutido para iluminação mais eficiente.',
    secondaryDescription:
      'Móveis planejados que otimizam o espaço do banheiro.',
  },
  {
    slug: 'cristaleira',
    folder: 'cristaleira',
    images: [
      'cristaleira-1.jpeg',
      'cristaleira-2.jpeg',
      'cristaleira-3.jpeg',
      'cristaleira-4.jpeg',
    ],
    thumbnail: '/images/cristaleira-1.jpg',
    title: 'Cristaleira para sala de jantar',
    description:
      'Cristaleira sob medida em design americano para sala de jantar. Possui banco estofado para maior conforto e luz de LED para destacar os objetos expostos.',
    secondaryDescription:
      'Acabamento refinado que valoriza sua sala de jantar.',
  },
  {
    slug: 'caixa-areia',
    folder: 'caixa-areia',
    images: ['caixa-areia.jpg'],
    thumbnail: '/images/caixa-areia.jpg',
    title: 'Caixa de Areia em madeira',
    description:
      'Caixa de areia para crianças feita em madeira. Possui bancos laterais que ao fechar formam uma tampa, garantindo segurança e praticidade.',
    secondaryDescription: 'Ideal para crianças, com design seguro e funcional.',
  },
  {
    slug: 'mesa',
    folder: 'mesa',
    images: ['mesa.jpg'],
    thumbnail: '/images/mesa.jpg',
    title: 'Mesa em madeira maciça',
    description: 'Mesa em madeira maciça, combinando beleza e durabilidade.',
    secondaryDescription: 'Beleza e durabilidade em madeira maciça.',
  },
  {
    slug: 'painel-ripado',
    folder: 'painel-ripado',
    images: ['painel-ripado.jpg', 'painel-ripado-2.jpeg'],
    thumbnail: '/images/painel-ripado.jpg',
    title: 'Painel Ripado',
    description:
      'Painel ripado em madeira, combinando estilo e funcionalidade.',
    secondaryDescription: 'Estilo e funcionalidade em madeira ripada.',
  },
];

export function getProjetoBySlug(slug) {
  return PROJETOS.find((projeto) => projeto.slug === slug);
}
