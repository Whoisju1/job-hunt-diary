import { Table, Model, DataType, Column, PrimaryKey, CreatedAt, IsUUID, AllowNull, BelongsTo } from 'sequelize-typescript';

interface INote {
  id: string;
  body: string;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class Note extends Model implements INote {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUIDV4)
  id!: string;

  @AllowNull
  @Column(DataType.STRING)
  title!: string;

  @Column(DataType.TEXT)
  body!: string;
}
