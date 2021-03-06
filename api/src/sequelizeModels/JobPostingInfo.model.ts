import { AllowNull, AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';

interface IJobPostingInfo {
  id: number;
  source: string;
  jobApplicationId: number;
}

@Table
export class JobPostingInfo extends Model implements IJobPostingInfo {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  source!: string;

  @AllowNull(false)
  @ForeignKey(() => JobApplication)
  @Column(DataType.INTEGER)
  jobApplicationId!: number;
}

