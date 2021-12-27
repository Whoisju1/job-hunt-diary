import { AllowNull, Column, DataType, IsEmail, Model, Table } from 'sequelize-typescript';

@Table({
  createdAt: true,
  updatedAt: true,
})
export class Contact extends Model {
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
