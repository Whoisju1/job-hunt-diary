import { Table, Model, DataType, Column, PrimaryKey, CreatedAt, IsUUID, AllowNull, IsEmail, Default, AutoIncrement } from 'sequelize-typescript';

@Table({
  createdAt: true,
  updatedAt: true,
})
export class Contact extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  firstName!: string;

  @Column(DataType.STRING)
  lastName!: string;

  @AllowNull
  @Column(DataType.STRING)
  alias!: string;

  @IsEmail
  @AllowNull
  @Column(DataType.STRING)
  email!: string;

  @AllowNull
  @Column(DataType.STRING)
  phone!: string;
}