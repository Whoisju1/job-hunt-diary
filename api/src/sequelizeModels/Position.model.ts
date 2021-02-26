import { Table, Model, DataType, Column, PrimaryKey, ForeignKey, AllowNull, HasMany, AutoIncrement } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';
import { PositionRequirement } from './PositionRequirement.model';

interface IPosition {
  id: number;
  name: string;
  compensation: string;
  rating: number;
  benefits: string;
  requirements: PositionRequirement[];
  jobApplicationId: number;
}

@Table
export class Position extends Model implements IPosition {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

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