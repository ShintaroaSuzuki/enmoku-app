import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ConcertsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ConcertsQuery = { __typename?: 'Query', concerts: Array<{ __typename?: 'Concert', id: string, title: string, date: any, notes?: Array<{ __typename?: 'ConcertNote', id: string, body: string }> | null }> };


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

/**
 * __useConcertsQuery__
 *
 * To run a query within a React component, call `useConcertsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConcertsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConcertsQuery({
 *   variables: {
 *   },
 * });
 */
export function useConcertsQuery(baseOptions?: Apollo.QueryHookOptions<ConcertsQuery, ConcertsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConcertsQuery, ConcertsQueryVariables>(ConcertsDocument, options);
      }
export function useConcertsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConcertsQuery, ConcertsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConcertsQuery, ConcertsQueryVariables>(ConcertsDocument, options);
        }
export type ConcertsQueryHookResult = ReturnType<typeof useConcertsQuery>;
export type ConcertsLazyQueryHookResult = ReturnType<typeof useConcertsLazyQuery>;
export type ConcertsQueryResult = Apollo.QueryResult<ConcertsQuery, ConcertsQueryVariables>;