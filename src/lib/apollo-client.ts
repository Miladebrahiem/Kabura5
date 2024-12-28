import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://miladjosofe44.sg-host.com/graphql',
  cache: new InMemoryCache(),
});