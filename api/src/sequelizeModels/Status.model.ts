import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, BelongsToMany, HasMany, Default, AutoIncrement } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';

interface IStatus {
  id: number;
  name: string;
  displayName: string;
}

@Table
export class Status extends Model implements IStatus {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  displayName!: string;

  @HasMany(() => JobApplication)
  jobApplications!: JobApplication[]
}