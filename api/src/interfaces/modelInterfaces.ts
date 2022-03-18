import * as graphqlTypes from 'src/types/graphql-types';

// Job Application
export interface IJobApplication extends Omit<graphqlTypes.JobApplication, '__typename'> {}

export interface IJobApplicationInput extends Omit<graphqlTypes.JobApplicationInput, '__typename' | 'status'> {
    userId: string;
    statusId: string;
}

// User
export interface IUser extends Omit<graphqlTypes.User, '__typename'> {}

export interface IUserInput extends Omit<graphqlTypes.UserInput, '__typename' | 'password'> {
    hashedPass: string;
}

// Status
export interface IStatus extends Omit<graphqlTypes.Status, '__typename'> {}
