import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

interface INote {
  id: number;
  body: string;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class Note extends Model implements INote {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  title!: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  body!: string;
}
