import { Table, Model, DataType, Column, PrimaryKey, ForeignKey, IsUUID } from 'sequelize-typescript';
import { Position } from './Position.model';

interface IPositionRequirement {
  id: string;
  requirement: string;
  positionId: string;
}

@Table
export class PositionRequirement extends Model implements IPositionRequirement {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUIDV4)
  id!: string;

  @Column(DataType.STRING)
  requirement!: string;

  @ForeignKey(() => Position)
  @IsUUID(4)
  @Column(DataType.UUIDV4)
  positionId!: string;
}