import { AllowNull, AutoIncrement, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';
import { PositionRequirement } from './PositionRequirement.model';

interface IPosition {
  name: string;
  compensation: string;
  rating: number;
  benefits: string;
  requirements: PositionRequirement[];
  jobApplicationId: number;
}

@Table
export class Position extends Model implements IPosition {
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  compensation!: string;

  @Column(DataType.INTEGER)
  rating!: number;

  @Column(DataType.STRING)
  benefits!: string;

  @HasMany(() => PositionRequirement)
  requirements!: PositionRequirement[];

  @AllowNull(false)
  @ForeignKey(() => JobApplication)
  @Column(DataType.INTEGER)
  jobApplicationId!: number;
}
