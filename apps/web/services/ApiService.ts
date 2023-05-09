import { ApolloClient, InMemoryCache } from "@apollo/client";

export class ApiService {
  private client;

  constructor() {
    this.client = new ApolloClient({
      uri: process.env.NEXT_PUBLIC_CMS_URL,
      cache: new InMemoryCache(),
    });
  }

  getInstance() {
    return this.client;
  }
}
