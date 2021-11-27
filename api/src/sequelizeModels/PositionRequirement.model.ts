import { AllowNull, AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Position } from './Position.model';

interface IPositionRequirement {
  requirement: string;
  positionId: number;
}

@Table
export class PositionRequirement extends Model implements IPositionRequirement {
  @Column(DataType.STRING)
  requirement!: string;

  @AllowNull(false)
  @ForeignKey(() => Position)
  @Column(DataType.INTEGER)
  positionId!: number;
}
