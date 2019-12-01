const { graphql } = require('graphql');
const { schema } = require('../../index');

const { createAuthor } = require('../services/AuthorService');

const setupTest = require('./helpers');

const MUTATION_AUTHOR = `
    mutation addAuthor($data: AuthorInput!){
        createNewAuthor(data:$data){
            _id
            email
        }
    }
`;

describe('Test Mutation Create Author', () => {
   beforeEach(async () => await setupTest());

   it('Should create author', () => {
      const makeTest = async () => {
          const data = {
              first_name : "prueba first",
              last_name : "prueba last",
              email: "prueba@mail.com",
              password: "prueba"
          };
          graphql(schema, MUTATION_AUTHOR, null, {}, { data })
              .then(response => {
                 expect(response.data.createNewAuthor).toHaveProperty('email', data.email);
                  expect(response.data.createNewAuthor).toHaveProperty('_id');
              });
      };
      makeTest();
   });

    it('Should not Create an Author', () => {
        const makeTest = async () => {
            const data = {
                first_name: 'Prueba',
                last_name: 'prueba',
                email: 'prueba@prueba.com',
                password: 'prueba'
            };

            await createAuthor(data);

            graphql(schema, MUTATION_AUTHOR, null, {}, {
                data
            })
                .then(response => {
                    expect(response).toHaveProperty('errors');
                    // expect(response.data.createNewAuthor).toHaveProperty('email', data.email);
                    // expect(response.data.createNewAuthor).toHaveProperty('_id');
                });
        };

        makeTest();
    });
});
