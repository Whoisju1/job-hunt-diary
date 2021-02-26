import { Table, Model, DataType, Column, PrimaryKey, ForeignKey, AutoIncrement, AllowNull } from 'sequelize-typescript';
import { Position } from './Position.model';

interface IPositionRequirement {
  id: number;
  requirement: string;
  positionId: number;
}

@Table
export class PositionRequirement extends Model implements IPositionRequirement {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  requirement!: string;

  @AllowNull(false)
  @ForeignKey(() => Position)
  @Column(DataType.INTEGER)
  positionId!: number;
}