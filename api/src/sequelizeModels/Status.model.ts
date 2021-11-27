import { AllowNull, AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';

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
  jobApplications!: JobApplication[]
}
