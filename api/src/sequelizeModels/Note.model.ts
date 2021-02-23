import { Table, Model, DataType, Column, PrimaryKey, AutoIncrement, IsUUID, AllowNull, BelongsTo, Default } from 'sequelize-typescript';

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

  @AllowNull
  @Column(DataType.STRING)
  title!: string;

  @Column(DataType.TEXT)
  body!: string;
}
