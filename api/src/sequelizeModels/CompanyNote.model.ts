import { Table, Model, DataType, Column, AllowNull, ForeignKey, Unique } from 'sequelize-typescript';
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
  @AllowNull(false)
  @ForeignKey(() => Company)
  @Column(DataType.STRING)
  companyId!: string;

  @Unique
  @AllowNull(false)
  @ForeignKey(() => Note)
  @Column(DataType.STRING)
  noteId!: string;
}
