export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Concert = {
  __typename?: 'Concert';
  _count: ConcertCount;
  accesses?: Maybe<Array<ConcertAccess>>;
  concertHallId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  greetings?: Maybe<Array<ConcertGreeting>>;
  headers?: Maybe<Array<ConcertHeader>>;
  historys?: Maybe<Array<ConcertHistory>>;
  id: Scalars['ID'];
  notes?: Maybe<Array<ConcertNote>>;
  place?: Maybe<ConcertHall>;
  programs?: Maybe<Array<ConcertProgram>>;
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ConcertAccess = {
  __typename?: 'ConcertAccess';
  Concert?: Maybe<Concert>;
  action: Scalars['String'];
  category: Scalars['String'];
  concertId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ip: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  ts: Scalars['DateTime'];
};

export type ConcertCount = {
  __typename?: 'ConcertCount';
  access: Scalars['Int'];
  greeting: Scalars['Int'];
  header: Scalars['Int'];
  history: Scalars['Int'];
  note: Scalars['Int'];
  program: Scalars['Int'];
};

export type ConcertGreeting = {
  __typename?: 'ConcertGreeting';
  Concert?: Maybe<Concert>;
  author?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  concertId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ConcertHall = {
  __typename?: 'ConcertHall';
  Concert?: Maybe<Array<Concert>>;
  _count: ConcertHallCount;
  id: Scalars['ID'];
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  name: Scalars['String'];
};

export type ConcertHallCount = {
  __typename?: 'ConcertHallCount';
  Concert: Scalars['Int'];
};

export type ConcertHeader = {
  __typename?: 'ConcertHeader';
  Concert?: Maybe<Concert>;
  concertId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: ConcertHeaderKey;
  title: Scalars['String'];
};

export enum ConcertHeaderKey {
  Greeting = 'greeting',
  History = 'history',
  Program = 'program'
}

export type ConcertHistory = {
  __typename?: 'ConcertHistory';
  Concert?: Maybe<Concert>;
  _count: ConcertHistoryCount;
  concertId?: Maybe<Scalars['String']>;
  events?: Maybe<Array<ConcertHistoryEvent>>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};

export type ConcertHistoryCount = {
  __typename?: 'ConcertHistoryCount';
  events: Scalars['Int'];
};

export type ConcertHistoryEvent = {
  __typename?: 'ConcertHistoryEvent';
  ConcertHistory?: Maybe<ConcertHistory>;
  body: Scalars['String'];
  concertHistoryId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ConcertNote = {
  __typename?: 'ConcertNote';
  Concert?: Maybe<Concert>;
  body: Scalars['String'];
  concertId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ConcertProgram = {
  __typename?: 'ConcertProgram';
  Concert?: Maybe<Concert>;
  concertId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  type: ConcertProgramType;
};

export enum ConcertProgramType {
  Message = 'message',
  Pause = 'pause',
  Piece = 'piece'
}

export type Mutation = {
  __typename?: 'Mutation';
  createConcert: Concert;
  createConcertNote: ConcertNote;
  createUser: User;
  deleteUser: User;
  updateUser: User;
};


export type MutationCreateConcertArgs = {
  date: Scalars['DateTime'];
  title: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreateConcertNoteArgs = {
  body: Scalars['String'];
  concertId: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  avatar: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  concert: Concert;
  concertNotes: Array<ConcertNote>;
  concerts: Array<Concert>;
  user: User;
  users: Array<Maybe<User>>;
};


export type QueryConcertArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  avatar: Scalars['String'];
  concerts?: Maybe<Array<Concert>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserCount = {
  __typename?: 'UserCount';
  concerts: Scalars['Int'];
};
