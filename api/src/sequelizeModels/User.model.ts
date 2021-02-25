import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, IsEmail, HasMany, Default, Sequelize, AutoIncrement, NotNull } from 'sequelize-typescript';
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

  @AllowNull(false)
  @Column(DataType.STRING)
  firstName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  lastName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  username!: string;

  @IsEmail
  @Column(DataType.STRING)
  email!: string;

  @HasMany(() => JobApplication, { onDelete: 'CASCADE' })
  jobApplications!: JobApplication[]

  @Column(DataType.STRING)
  phone!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  hashedPass!: string;
}