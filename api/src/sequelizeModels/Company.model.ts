import { Table, Model, DataType, Column, PrimaryKey, AutoIncrement, AllowNull, ForeignKey, IsEmail } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';

interface ICompany {
  id: number;
  name: string;
  location: string;
  phone: string;
  email: string;
  jobApplicationId: number;
}

@Table
export class Company extends Model implements ICompany {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

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