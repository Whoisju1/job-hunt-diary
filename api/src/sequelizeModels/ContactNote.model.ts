import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, BelongsTo, HasOne, ForeignKey, Unique } from 'sequelize-typescript';
import { Contact } from './Contact.model';
import { Note } from './Note.model';

interface IContactNote {
  contactId: string;
  noteId: string;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class ContactNote extends Model implements IContactNote {
  @IsUUID(4)
  @ForeignKey(() => Contact)
  @Column(DataType.UUIDV4)
  contactId!: string;

  @IsUUID(4)
  @Unique
  @ForeignKey(() => Note)
  @Column(DataType.UUIDV4)
  noteId!: string;
}
