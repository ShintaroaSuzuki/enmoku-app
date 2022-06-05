import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UniqueUserByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type UniqueUserByIdQuery = { __typename?: 'Query', uniqueUser: { __typename?: 'User', id: string } };


export const UniqueUserByIdDocument = gql`
    query uniqueUserById($id: ID!) {
  uniqueUser(id: $id) {
    id
  }
}
    `;

/**
 * __useUniqueUserByIdQuery__
 *
 * To run a query within a React component, call `useUniqueUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUniqueUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUniqueUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUniqueUserByIdQuery(baseOptions: Apollo.QueryHookOptions<UniqueUserByIdQuery, UniqueUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UniqueUserByIdQuery, UniqueUserByIdQueryVariables>(UniqueUserByIdDocument, options);
      }
export function useUniqueUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UniqueUserByIdQuery, UniqueUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UniqueUserByIdQuery, UniqueUserByIdQueryVariables>(UniqueUserByIdDocument, options);
        }
export type UniqueUserByIdQueryHookResult = ReturnType<typeof useUniqueUserByIdQuery>;
export type UniqueUserByIdLazyQueryHookResult = ReturnType<typeof useUniqueUserByIdLazyQuery>;
export type UniqueUserByIdQueryResult = Apollo.QueryResult<UniqueUserByIdQuery, UniqueUserByIdQueryVariables>;