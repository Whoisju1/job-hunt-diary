import { Table, Model, DataType, Column, PrimaryKey, CreatedAt, IsUUID, AllowNull, IsEmail } from 'sequelize-typescript';

@Table({
  createdAt: true,
  updatedAt: true,
})
export class Contact extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUIDV4)
  companyId!: string;

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