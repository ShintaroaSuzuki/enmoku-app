import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type CreateUserMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  name: Types.Scalars['String'];
  avatar: Types.Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name: string } };

export type AllUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, avatar: string } | null> };

export type UniqueUserByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type UniqueUserByIdQuery = { __typename?: 'Query', uniqueUser: { __typename?: 'User', id: string, name: string, avatar: string } };


export const CreateUserDocument = gql`
    mutation createUser($id: ID!, $name: String!, $avatar: String!) {
  createUser(id: $id, name: $name, avatar: $avatar) {
    id
    name
  }
}
    `;
export const AllUsersDocument = gql`
    query allUsers {
  users {
    id
    name
    avatar
  }
}
    `;
export const UniqueUserByIdDocument = gql`
    query uniqueUserById($id: ID!) {
  uniqueUser(id: $id) {
    id
    name
    avatar
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    },
    allUsers(variables?: AllUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllUsersQuery>(AllUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allUsers', 'query');
    },
    uniqueUserById(variables: UniqueUserByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UniqueUserByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UniqueUserByIdQuery>(UniqueUserByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'uniqueUserById', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;