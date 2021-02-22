import { Table, Model, DataType, Column, PrimaryKey, ForeignKey, IsUUID, AllowNull, HasMany } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';
import { PositionRequirement } from './PositionRequirement.model';

interface IPosition {
  id: string;
  name: string;
  compensation: string;
  rating: number;
  benefits: string;
  requirements: PositionRequirement[];
  jobApplicationId: string;
}

@Table
export class Position extends Model implements IPosition {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUIDV4)
  id!: string;

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

  @IsUUID(4)
  @ForeignKey(() => JobApplication)
  @Column(DataType.UUIDV4)
  jobApplicationId!: string;
}