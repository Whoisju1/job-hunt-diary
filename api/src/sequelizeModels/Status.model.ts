import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, BelongsToMany, HasMany } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';

interface IStatus {
  id: string;
  name: string;
  displayName: string;
}

@Table
export class Status extends Model implements IStatus {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUIDV4)
  id!: string;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  displayName!: string;

  @HasMany(() => JobApplication)
  jobApplications!: JobApplication[]
}