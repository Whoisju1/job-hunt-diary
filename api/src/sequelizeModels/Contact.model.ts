import { AllowNull, AutoIncrement, Column, DataType, IsEmail, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  createdAt: true,
  updatedAt: true,
})
export class Contact extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

@AllowNull(false)
  @Column(DataType.STRING)
  firstName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  lastName!: string;

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
