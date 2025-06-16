module.exports = {
    overwrite: true,
    schema: "./api/src/schema.gql",
    documents: "./tob/**/*.graphql",
    generates: {
      "./tob/features/utils/graphql/typeDefs/": {
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
  