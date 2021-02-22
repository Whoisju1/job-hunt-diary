import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, ForeignKey, IsEmail } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';

interface ICompany {
  id: string;
  name: string;
  location: string;
  phone: string;
  email: string;
  jobApplicationId: string;
}

@Table
export class Company extends Model implements ICompany {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUIDV4)
  id!: string;

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

  @ForeignKey(() => JobApplication)
  @Column(DataType.STRING)
  jobApplicationId!: string;

}