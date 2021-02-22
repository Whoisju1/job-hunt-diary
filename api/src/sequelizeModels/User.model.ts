import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, IsEmail, HasMany } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';

@Table({
  createdAt: true,
  updatedAt: true,
})
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUIDV4)
  companyId!: string;

  @Column(DataType.UUIDV4)
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