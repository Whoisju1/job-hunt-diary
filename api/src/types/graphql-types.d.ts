import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
};

export type Company = {
  __typename?: 'Company';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  insideContact?: Maybe<Array<Maybe<Contact>>>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  phone?: Maybe<Scalars['String']>;
};

export type CompanyInput = {
  email?: InputMaybe<Scalars['String']>;
  insideContact?: InputMaybe<Array<InputMaybe<ContactInput>>>;
  location?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notes?: InputMaybe<Array<InputMaybe<NoteInput>>>;
  phone?: InputMaybe<Scalars['String']>;
};

export type CompanyList = IList & {
  __typename?: 'CompanyList';
  data: Array<Maybe<Company>>;
  moreAvailable: Scalars['Boolean'];
  nextPageOffset: Scalars['Int'];
};

export type Contact = {
  __typename?: 'Contact';
  alias?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jobApplication?: Maybe<JobApplication>;
  lastName?: Maybe<Scalars['String']>;
  note?: Maybe<Note>;
  phone?: Maybe<Scalars['String']>;
};

export type ContactInput = {
  alias?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<NoteInput>;
  phone?: InputMaybe<Scalars['String']>;
};

export type IList = {
  moreAvailable: Scalars['Boolean'];
  nextPageOffset: Scalars['Int'];
};

export type JobApplication = {
  __typename?: 'JobApplication';
  company: Company;
  contacts?: Maybe<Array<Maybe<Contact>>>;
  dateApplied?: Maybe<Scalars['String']>;
  dateCreated: Scalars['String'];
  dateUpdated?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jobPostingInfo?: Maybe<JobPostingInfo>;
  notes?: Maybe<Array<Maybe<Note>>>;
  position: Position;
  status: Scalars['String'];
};

export type JobApplicationInput = {
  company?: InputMaybe<CompanyInput>;
  contacts?: InputMaybe<Array<InputMaybe<ContactInput>>>;
  dateApplied?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Array<InputMaybe<NoteInput>>>;
  position?: InputMaybe<PositionInput>;
};

export type JobApplicationList = IList & {
  __typename?: 'JobApplicationList';
  data: Array<Maybe<JobApplication>>;
  moreAvailable: Scalars['Boolean'];
  nextPageOffset: Scalars['Int'];
};

export type JobPostingInfo = {
  __typename?: 'JobPostingInfo';
  sorce?: Maybe<Scalars['String']>;
};

export type ListParams = {
  field: Scalars['String'];
  getAll?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  /** When 'GetAll' is true 'limit' and 'start' are ignored and all the items are retrieved. */
  operator?: InputMaybe<Operator>;
  order?: InputMaybe<Order>;
  start?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  Hello?: Maybe<Scalars['String']>;
  addJobApplication: JobApplication;
  createUser: User;
  deleteUser: Scalars['Boolean'];
  editJobApplication: JobApplication;
};


export type MutationAddJobApplicationArgs = {
  jobApplication: JobApplicationInput;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationEditJobApplicationArgs = {
  jobApplication: JobApplicationInput;
};

export type Note = {
  __typename?: 'Note';
  body?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type NoteInput = {
  body?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum Operator {
  Eq = 'eq',
  Gt = 'gt',
  Lt = 'lt',
  NotEq = 'not_eq'
}

export enum Order {
  Asc = 'ASC',
  Dsc = 'DSC'
}

export type Position = {
  __typename?: 'Position';
  benefits?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  compensation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jobApplication?: Maybe<JobApplication>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  rating?: Maybe<Scalars['Float']>;
  requirements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PositionInput = {
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Array<InputMaybe<NoteInput>>>;
  requirements?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stage?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCompanies: CompanyList;
  getJobApplication: JobApplication;
  getJobApplications: JobApplicationList;
  getUser: User;
  hello?: Maybe<Scalars['String']>;
};


export type QueryGetCompaniesArgs = {
  params?: InputMaybe<ListParams>;
};


export type QueryGetJobApplicationArgs = {
  id: Scalars['ID'];
};


export type QueryGetJobApplicationsArgs = {
  listParams?: InputMaybe<ListParams>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Company: ResolverTypeWrapper<Company>;
  CompanyInput: CompanyInput;
  CompanyList: ResolverTypeWrapper<CompanyList>;
  Contact: ResolverTypeWrapper<Contact>;
  ContactInput: ContactInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IList: ResolversTypes['CompanyList'] | ResolversTypes['JobApplicationList'];
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JobApplication: ResolverTypeWrapper<JobApplication>;
  JobApplicationInput: JobApplicationInput;
  JobApplicationList: ResolverTypeWrapper<JobApplicationList>;
  JobPostingInfo: ResolverTypeWrapper<JobPostingInfo>;
  ListParams: ListParams;
  Mutation: ResolverTypeWrapper<{}>;
  Note: ResolverTypeWrapper<Note>;
  NoteInput: NoteInput;
  Operator: Operator;
  Order: Order;
  Position: ResolverTypeWrapper<Position>;
  PositionInput: PositionInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Company: Company;
  CompanyInput: CompanyInput;
  CompanyList: CompanyList;
  Contact: Contact;
  ContactInput: ContactInput;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  IList: ResolversParentTypes['CompanyList'] | ResolversParentTypes['JobApplicationList'];
  Int: Scalars['Int'];
  JobApplication: JobApplication;
  JobApplicationInput: JobApplicationInput;
  JobApplicationList: JobApplicationList;
  JobPostingInfo: JobPostingInfo;
  ListParams: ListParams;
  Mutation: {};
  Note: Note;
  NoteInput: NoteInput;
  Position: Position;
  PositionInput: PositionInput;
  Query: {};
  String: Scalars['String'];
  User: User;
  UserInput: UserInput;
};

export type CompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  insideContact?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompanyList'] = ResolversParentTypes['CompanyList']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['Company']>>, ParentType, ContextType>;
  moreAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  nextPageOffset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = {
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateUpdated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jobApplication?: Resolver<Maybe<ResolversTypes['JobApplication']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IListResolvers<ContextType = any, ParentType extends ResolversParentTypes['IList'] = ResolversParentTypes['IList']> = {
  __resolveType: TypeResolveFn<'CompanyList' | 'JobApplicationList', ParentType, ContextType>;
  moreAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  nextPageOffset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type JobApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobApplication'] = ResolversParentTypes['JobApplication']> = {
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  contacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType>;
  dateApplied?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateUpdated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jobPostingInfo?: Resolver<Maybe<ResolversTypes['JobPostingInfo']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobApplicationListResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobApplicationList'] = ResolversParentTypes['JobApplicationList']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['JobApplication']>>, ParentType, ContextType>;
  moreAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  nextPageOffset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobPostingInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobPostingInfo'] = ResolversParentTypes['JobPostingInfo']> = {
  sorce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  Hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addJobApplication?: Resolver<ResolversTypes['JobApplication'], ParentType, ContextType, RequireFields<MutationAddJobApplicationArgs, 'jobApplication'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  editJobApplication?: Resolver<ResolversTypes['JobApplication'], ParentType, ContextType, RequireFields<MutationEditJobApplicationArgs, 'jobApplication'>>;
};

export type NoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateUpdated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = {
  benefits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compensation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jobApplication?: Resolver<Maybe<ResolversTypes['JobApplication']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  requirements?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCompanies?: Resolver<ResolversTypes['CompanyList'], ParentType, ContextType, RequireFields<QueryGetCompaniesArgs, never>>;
  getJobApplication?: Resolver<ResolversTypes['JobApplication'], ParentType, ContextType, RequireFields<QueryGetJobApplicationArgs, 'id'>>;
  getJobApplications?: Resolver<ResolversTypes['JobApplicationList'], ParentType, ContextType, RequireFields<QueryGetJobApplicationsArgs, never>>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Company?: CompanyResolvers<ContextType>;
  CompanyList?: CompanyListResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  IList?: IListResolvers<ContextType>;
  JobApplication?: JobApplicationResolvers<ContextType>;
  JobApplicationList?: JobApplicationListResolvers<ContextType>;
  JobPostingInfo?: JobPostingInfoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

