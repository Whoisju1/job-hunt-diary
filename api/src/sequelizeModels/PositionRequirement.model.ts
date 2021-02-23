import { Table, Model, DataType, Column, PrimaryKey, ForeignKey, IsUUID, Default, AutoIncrement } from 'sequelize-typescript';
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

  @ForeignKey(() => Position)
  @Column(DataType.INTEGER)
  positionId!: number;
}