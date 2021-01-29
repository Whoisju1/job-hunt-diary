import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};


export type IList = {
  nextPageOffset: Scalars['Int'];
  moreAvailable: Scalars['Boolean'];
};

export type ListParams = {
  field: Scalars['String'];
  order?: Maybe<Order>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  /** When 'GetAll' is true 'limit' and 'start' are ignored and all the items are retrieved. */
  operator?: Maybe<Operator>;
  getAll?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
};

export enum Operator {
  Eq = 'EQ',
  Gt = 'GT',
  Lt = 'LT'
}

export enum Order {
  Asc = 'ASC',
  Dsc = 'DSC'
}

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  getJobApplications: JobApplicationList;
  getJobApplication: JobApplication;
  getCompanies: CompanyList;
  getUser: User;
};


export type QueryGetJobApplicationsArgs = {
  listParams?: Maybe<ListParams>;
};


export type QueryGetJobApplicationArgs = {
  id: Scalars['ID'];
};


export type QueryGetCompaniesArgs = {
  params?: Maybe<ListParams>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  Hello?: Maybe<Scalars['String']>;
  editJobApplication: JobApplication;
  addJobApplication: JobApplication;
  createUser: User;
};


export type MutationEditJobApplicationArgs = {
  jobApplication: JobApplicationInput;
};


export type MutationAddJobApplicationArgs = {
  jobApplication: JobApplicationInput;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};

export type JobApplication = {
  __typename?: 'JobApplication';
  id: Scalars['ID'];
  position: Position;
  company: Company;
  dateCreated: Scalars['String'];
  dateUpdated?: Maybe<Scalars['String']>;
  dateApplied?: Maybe<Scalars['String']>;
  compensation?: Maybe<Scalars['String']>;
  requirements?: Maybe<Array<Maybe<Scalars['String']>>>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  contacts?: Maybe<Array<Maybe<Contact>>>;
};

export type JobApplicationInput = {
  position?: Maybe<PositionInput>;
  company?: Maybe<CompanyInput>;
  dateApplied?: Maybe<Scalars['String']>;
  compensation?: Maybe<Scalars['String']>;
  requirements?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Array<Maybe<NoteInput>>>;
  contacts?: Maybe<Array<Maybe<ContactInput>>>;
};

export type JobApplicationList = IList & {
  __typename?: 'JobApplicationList';
  data: Array<Maybe<JobApplication>>;
  nextPageOffset: Scalars['Int'];
  moreAvailable: Scalars['Boolean'];
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  insideContact?: Maybe<Array<Maybe<Contact>>>;
};

export type CompanyInput = {
  name: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<NoteInput>>>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  insideContact?: Maybe<Array<Maybe<ContactInput>>>;
};

export type CompanyList = IList & {
  __typename?: 'CompanyList';
  data: Array<Maybe<Company>>;
  nextPageOffset: Scalars['Int'];
  moreAvailable: Scalars['Boolean'];
};

export type Contact = {
  __typename?: 'Contact';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  note?: Maybe<Note>;
  jobApplication?: Maybe<JobApplication>;
  dateCreated?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
};

export type ContactInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  note?: Maybe<NoteInput>;
};

export type Note = {
  __typename?: 'Note';
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
};

export type NoteInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type Position = {
  __typename?: 'Position';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  stage?: Maybe<Scalars['String']>;
  requirements?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobApplication?: Maybe<JobApplication>;
};

export type PositionInput = {
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<NoteInput>>>;
  stage?: Maybe<Scalars['String']>;
  requirements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type UserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  IList: ResolversTypes['JobApplicationList'] | ResolversTypes['CompanyList'];
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ListParams: ListParams;
  String: ResolverTypeWrapper<Scalars['String']>;
  Operator: Operator;
  Order: Order;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  JobApplication: ResolverTypeWrapper<JobApplication>;
  JobApplicationInput: JobApplicationInput;
  JobApplicationList: ResolverTypeWrapper<JobApplicationList>;
  Company: ResolverTypeWrapper<Company>;
  CompanyInput: CompanyInput;
  CompanyList: ResolverTypeWrapper<CompanyList>;
  Contact: ResolverTypeWrapper<Contact>;
  ContactInput: ContactInput;
  Note: ResolverTypeWrapper<Note>;
  NoteInput: NoteInput;
  Position: ResolverTypeWrapper<Position>;
  PositionInput: PositionInput;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  IList: ResolversParentTypes['JobApplicationList'] | ResolversParentTypes['CompanyList'];
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  ListParams: ListParams;
  String: Scalars['String'];
  Query: {};
  ID: Scalars['ID'];
  Mutation: {};
  JobApplication: JobApplication;
  JobApplicationInput: JobApplicationInput;
  JobApplicationList: JobApplicationList;
  Company: Company;
  CompanyInput: CompanyInput;
  CompanyList: CompanyList;
  Contact: Contact;
  ContactInput: ContactInput;
  Note: Note;
  NoteInput: NoteInput;
  Position: Position;
  PositionInput: PositionInput;
  User: User;
  UserInput: UserInput;
  Upload: Scalars['Upload'];
};

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IListResolvers<ContextType = any, ParentType extends ResolversParentTypes['IList'] = ResolversParentTypes['IList']> = {
  __resolveType: TypeResolveFn<'JobApplicationList' | 'CompanyList', ParentType, ContextType>;
  nextPageOffset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  moreAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getJobApplications?: Resolver<ResolversTypes['JobApplicationList'], ParentType, ContextType, RequireFields<QueryGetJobApplicationsArgs, never>>;
  getJobApplication?: Resolver<ResolversTypes['JobApplication'], ParentType, ContextType, RequireFields<QueryGetJobApplicationArgs, 'id'>>;
  getCompanies?: Resolver<ResolversTypes['CompanyList'], ParentType, ContextType, RequireFields<QueryGetCompaniesArgs, never>>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  Hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editJobApplication?: Resolver<ResolversTypes['JobApplication'], ParentType, ContextType, RequireFields<MutationEditJobApplicationArgs, 'jobApplication'>>;
  addJobApplication?: Resolver<ResolversTypes['JobApplication'], ParentType, ContextType, RequireFields<MutationAddJobApplicationArgs, 'jobApplication'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
};

export type JobApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobApplication'] = ResolversParentTypes['JobApplication']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateUpdated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateApplied?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compensation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requirements?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType>;
  contacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobApplicationListResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobApplicationList'] = ResolversParentTypes['JobApplicationList']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['JobApplication']>>, ParentType, ContextType>;
  nextPageOffset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  moreAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  insideContact?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompanyList'] = ResolversParentTypes['CompanyList']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['Company']>>, ParentType, ContextType>;
  nextPageOffset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  moreAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType>;
  jobApplication?: Resolver<Maybe<ResolversTypes['JobApplication']>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateUpdated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateUpdated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requirements?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  jobApplication?: Resolver<Maybe<ResolversTypes['JobApplication']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  IList?: IListResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  JobApplication?: JobApplicationResolvers<ContextType>;
  JobApplicationList?: JobApplicationListResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompanyList?: CompanyListResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;