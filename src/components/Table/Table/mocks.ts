export const mocks = {
 data: {
  columns: [
   {
    heading: 'Nome',
    value: 'nome',
   },
   {
    heading: 'E-mail',
    value: 'email',
   },
   {
    heading: 'CPF',
    value: 'cpf',
   },
   {
    heading: 'Telefone',
    value: 'telefone',
   },
  ],
  response: {
   content: [
    {
     user_id: '1',
     nome: 'caio santos',
     email: 'user@commerce.com',
     cpf: '11111111115',
     telefone: '11943959999',
     data_nascimento: '13/06/2000',
     tipo: 'admin',
    },
    {
     user_id: '1',
     nome: 'caio santos 2',
     email: 'user@commerce.com',
     cpf: '11111111115',
     telefone: '11943959999',
     data_nascimento: '13/06/2000',
     tipo: 'admin',
    },
   ],
   pageable: {
    sort: {
     empty: false,
     sorted: true,
     unsorted: false,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 10,
    paged: true,
    unpaged: false,
   },
   last: true,
   totalPages: 1,
   totalElements: 2,
   number: 0,
   size: 10,
   sort: {
    empty: false,
    sorted: true,
    unsorted: false,
   },
   first: true,
   numberOfElements: 2,
   empty: false,
  },
 },
};
