import { AllowNull, BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, IsEmail, Model, Table, Unique } from 'sequelize-typescript';

interface ICompany {
  name: string;
  location: string;
  phone: string;
  email: string;
  jobApplicationId: number;
}

@Table
export class Company extends Model implements ICompany {
  @AllowNull(false)
  @Column(DataType.STRING)
    name!: string;

  @AllowNull
  @Column(DataType.STRING)
    location!: string;

  @AllowNull
  @Column(DataType.STRING)
    phone!: string;

  @IsEmail
  @AllowNull
  @Column(DataType.STRING)
    email!: string;

  @AllowNull(false)
  @ForeignKey(() => JobApplication)
  @Column(DataType.INTEGER)
    jobApplicationId!: number;
}

interface ICompanyNote {
  companyId: string;
  noteId: string;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class CompanyNote extends Model implements ICompanyNote {
  @AllowNull(false)
  @ForeignKey(() => Company)
  @Column(DataType.STRING)
    companyId!: string;

  @Unique
  @AllowNull(false)
  @ForeignKey(() => Note)
  @Column(DataType.STRING)
    noteId!: string;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class Contact extends Model {
@AllowNull(false)
  @Column(DataType.STRING)
  firstName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
    lastName!: string;

  @Column(DataType.STRING)
    alias!: string;

  @IsEmail
  @AllowNull
  @Column(DataType.STRING)
    email!: string;

  @AllowNull
  @Column(DataType.STRING)
    phone!: string;
}

interface IContactNote {
  contactId: number;
  noteId: number;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class ContactNote extends Model implements IContactNote {
  @ForeignKey(() => Contact)
  @AllowNull(false)
  @Column(DataType.INTEGER)
    contactId!: number;

  @Unique
  @AllowNull(false)
  @ForeignKey(() => Note)
  @Column(DataType.INTEGER)
    noteId!: number;
}

// interface IJobApplication {
//   name: string;
//   dateApplied: Date;
//   jobPostingInfo: JobPostingInfo;
//   owner: User;
//   status: Status;
//   statusId: number;
//   position: Position;
//   userId: number;
//   // notes: Note[]
// }


interface IJobApplicationNote {
  jobApplicationId: number;
  noteId: number;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class JobApplicationNote extends Model implements IJobApplicationNote {
  @AllowNull(false)
  @ForeignKey(() => JobApplication)
  @Column(DataType.INTEGER)
    jobApplicationId!: number;

  @Unique
  @AllowNull(false)
  @ForeignKey(() => Note)
  @Column(DataType.INTEGER)
    noteId!: number;
}

@Table
export class JobPostingInfo extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
    source!: string;

  @AllowNull(false)
  @ForeignKey(() => JobApplication)
  @Column(DataType.INTEGER)
    jobApplicationId!: number;
}

interface INote {
  body: string;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class Note extends Model implements INote {
  @Column(DataType.STRING)
    title!: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
    body!: string;
}

interface IPosition {
  name: string;
  compensation: string;
  rating: number;
  benefits: string;
  requirements: PositionRequirement[];
  jobApplicationId: number;
}

@Table
export class Position extends Model implements IPosition {
  @AllowNull(false)
  @Column(DataType.STRING)
    name!: string;

  @Column(DataType.STRING)
    compensation!: string;

  @Column(DataType.INTEGER)
    rating!: number;

  @Column(DataType.STRING)
    benefits!: string;

  @HasMany(() => PositionRequirement)
    requirements!: PositionRequirement[];

  @AllowNull(false)
  @ForeignKey(() => JobApplication)
  @Column(DataType.INTEGER)
    jobApplicationId!: number;
}

interface IPositionRequirement {
  requirement: string;
  positionId: number;
}

@Table
export class PositionRequirement extends Model implements IPositionRequirement {
  @Column(DataType.STRING)
    requirement!: string;

  @AllowNull(false)
  @ForeignKey(() => Position)
  @Column(DataType.INTEGER)
    positionId!: number;
}

interface IStatus {
  name: string;
  displayName: string;
}

@Table
export class Status extends Model implements IStatus {
  @AllowNull(false)
  @Column(DataType.STRING)
    name!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
    displayName!: string;

  @HasMany(() => JobApplication)
    jobApplications!: JobApplication[];
}

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  hashedPass: string;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class User extends Model implements IUser {
  @AllowNull(false)
  @Column(DataType.STRING)
    firstName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
    lastName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
    username!: string;

  @AllowNull(false)
  @Unique
  @IsEmail
  @Column(DataType.STRING)
    email!: string;

  @HasMany(() => JobApplication, { onDelete: 'CASCADE' })
    jobApplications!: JobApplication[];

  // TODO: Add validation for phone number
  @Unique
  @Column(DataType.STRING)
    phone!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
    hashedPass!: string;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class JobApplication extends Model {
  @Column(DataType.STRING)
    name!: string;

  @AllowNull
  @Column(DataType.DATE)
    dateApplied!: Date;

  @HasOne(() => JobPostingInfo, { onDelete: 'CASCADE' })
    jobPostingInfo!: JobPostingInfo;

  @BelongsTo(() => User)
    owner!: User;

  @BelongsTo(() => Status)
    status!: Status;

  @HasOne(() => Position, { onDelete: 'CASCADE' })
    position!: Position;

  @HasMany(() => JobApplicationNote)
    notes!: Note[];

  @AllowNull(false)
  @ForeignKey(() => Status)
  @Column(DataType.INTEGER)
    statusId!: number;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
    userId!: number;
}

export default [
  User,
  JobApplication,
  JobPostingInfo,
  Contact,
  Note,
  Position,
  PositionRequirement,
  Status,
  CompanyNote,
  ContactNote,
  JobApplicationNote,
];
