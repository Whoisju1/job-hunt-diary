import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, BelongsTo, HasOne, ForeignKey, Unique } from 'sequelize-typescript';
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
  @ForeignKey(() => Company)
  @Column(DataType.UUIDV4)
  companyId!: string;

  @IsUUID(4)
  @Unique
  @ForeignKey(() => Note)
  @Column(DataType.UUIDV4)
  noteId!: string;
}
