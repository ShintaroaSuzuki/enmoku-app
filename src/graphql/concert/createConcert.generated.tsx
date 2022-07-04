import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateConcertMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  date: Types.Scalars['DateTime'];
  userId: Types.Scalars['String'];
}>;


export type CreateConcertMutation = { __typename?: 'Mutation', createConcert: { __typename?: 'Concert', id: string, title: string, date: any } };


export const CreateConcertDocument = gql`
    mutation createConcert($title: String!, $date: DateTime!, $userId: String!) {
  createConcert(title: $title, date: $date, userId: $userId) {
    id
    title
    date
  }
}
    `;
export type CreateConcertMutationFn = Apollo.MutationFunction<CreateConcertMutation, CreateConcertMutationVariables>;

/**
 * __useCreateConcertMutation__
 *
 * To run a mutation, you first call `useCreateConcertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConcertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConcertMutation, { data, loading, error }] = useCreateConcertMutation({
 *   variables: {
 *      title: // value for 'title'
 *      date: // value for 'date'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateConcertMutation(baseOptions?: Apollo.MutationHookOptions<CreateConcertMutation, CreateConcertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConcertMutation, CreateConcertMutationVariables>(CreateConcertDocument, options);
      }
export type CreateConcertMutationHookResult = ReturnType<typeof useCreateConcertMutation>;
export type CreateConcertMutationResult = Apollo.MutationResult<CreateConcertMutation>;
export type CreateConcertMutationOptions = Apollo.BaseMutationOptions<CreateConcertMutation, CreateConcertMutationVariables>;