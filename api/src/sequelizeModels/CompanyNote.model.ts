import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, BelongsTo, HasOne, ForeignKey, Unique, NotNull } from 'sequelize-typescript';
import { Company } from './Company.model';
import { Note } from './Note.model';

interface ICompanyNote {
  companyId: string;
  noteId: string;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class CompanyNote extends Model implements ICompanyNote {
  @IsUUID(4)
  @AllowNull(false)
  @ForeignKey(() => Company)
  @Column(DataType.STRING)
  companyId!: string;

  @IsUUID(4)
  @Unique
  @AllowNull(false)
  @ForeignKey(() => Note)
  @Column(DataType.STRING)
  noteId!: string;
}
