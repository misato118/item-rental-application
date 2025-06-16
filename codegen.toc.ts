module.exports = {
  overwrite: true,
  schema: "./api/src/schema.gql",
  documents: "./toc/**/*.graphql",
  generates: {
    "./toc/features/utils/graphql/typeDefs/": {
      preset: "client",
      plugins: [],
      config: {
        scalars: {
            DateTime: "Date",
        }
      }
    },
  },
};
