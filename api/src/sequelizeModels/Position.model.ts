import { Table, Model, DataType, Column, PrimaryKey, ForeignKey, IsUUID, AllowNull, HasMany, Default, AutoIncrement } from 'sequelize-typescript';
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

  @Column(DataType.STRING)
  name!: string;

  @AllowNull
  @Column(DataType.STRING)
  compensation!: string;

  @AllowNull
  @Column(DataType.INTEGER)
  rating!: number;

  @AllowNull
  @Column(DataType.STRING)
  benefits!: string;

  @HasMany(() => PositionRequirement)
  requirements!: PositionRequirement[];

  @ForeignKey(() => JobApplication)
  @Column(DataType.INTEGER)
  jobApplicationId!: number;
}