import { Table, Model, DataType, Column, PrimaryKey, IsUUID, ForeignKey } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';

interface IJobPostingInfo {
  id: string;
  source: string;
  jobApplication: string;
}

@Table
export class JobPostingInfo extends Model implements IJobPostingInfo {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUIDV4)
  id!: string;

  @Column(DataType.STRING)
  source!: string;

  @IsUUID(4)
  @ForeignKey(() => JobApplication)
  @Column(DataType.UUIDV4)
  jobApplication!: string;
}

