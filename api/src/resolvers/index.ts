const resolvers = {
  Data: {
    __resolveType: (obj: any) => {
      if (obj.__typename === 'JobApplication') {
        return [];
      }
    }
  },
  Query: {

  },
  Mutation: {

  }
}

export default resolvers;