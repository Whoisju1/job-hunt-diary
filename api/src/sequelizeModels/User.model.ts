import { AllowNull, Column, DataType, HasMany, IsEmail, Model, Table, Unique } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';

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
  jobApplications!: JobApplication[]

  // TODO: Add validation for phone number
  @Unique
  @Column(DataType.STRING)
  phone!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  hashedPass!: string;
}
