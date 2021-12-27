import { AllowNull, Column, DataType, ForeignKey, IsEmail, Model, Table } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';

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
