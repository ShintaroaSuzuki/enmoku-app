import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type CreateConcertMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  date: Types.Scalars['DateTime'];
  userId: Types.Scalars['String'];
}>;


export type CreateConcertMutation = { __typename?: 'Mutation', createConcert: { __typename?: 'Concert', id: string, title: string, date: any } };

export type ConcertsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ConcertsQuery = { __typename?: 'Query', concerts: Array<{ __typename?: 'Concert', id: string, title: string, date: any, notes?: Array<{ __typename?: 'ConcertNote', id: string, body: string }> | null }> };

export type CreateUserMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  name: Types.Scalars['String'];
  avatar: Types.Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name: string } };

export type UserQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, avatar: string, concerts?: Array<{ __typename?: 'Concert', id: string, title: string, date: any }> | null } };

export type UsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, avatar: string } | null> };


export const CreateConcertDocument = gql`
    mutation createConcert($title: String!, $date: DateTime!, $userId: String!) {
  createConcert(title: $title, date: $date, userId: $userId) {
    id
    title
    date
  }
}
    `;
export const ConcertsDocument = gql`
    query concerts {
  concerts {
    id
    title
    date
    notes {
      id
      body
    }
  }
}
    `;
export const CreateUserDocument = gql`
    mutation createUser($id: ID!, $name: String!, $avatar: String!) {
  createUser(id: $id, name: $name, avatar: $avatar) {
    id
    name
  }
}
    `;
export const UserDocument = gql`
    query user($id: ID!) {
  user(id: $id) {
    id
    name
    avatar
    concerts {
      id
      title
      date
    }
  }
}
    `;
export const UsersDocument = gql`
    query users {
  users {
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
    createConcert(variables: CreateConcertMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateConcertMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateConcertMutation>(CreateConcertDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createConcert', 'mutation');
    },
    concerts(variables?: ConcertsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ConcertsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ConcertsQuery>(ConcertsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'concerts', 'query');
    },
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    },
    user(variables: UserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserQuery>(UserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'user', 'query');
    },
    users(variables?: UsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'users', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;