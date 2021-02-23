import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, IsEmail, HasMany, Default, Sequelize, AutoIncrement } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';

@Table({
  createdAt: true,
  updatedAt: true,
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  firstName!: string;

  @Column(DataType.STRING)
  lastName!: string;

  @Column(DataType.STRING)
  username!: string;

  @IsEmail
  @AllowNull
  @Column(DataType.STRING)
  email!: string;

  @HasMany(() => JobApplication, { onDelete: 'CASCADE' })
  jobApplications!: JobApplication[]

  @AllowNull
  @Column(DataType.STRING)
  phone!: string;

  @Column(DataType.STRING)
  hashedPass!: string;
}