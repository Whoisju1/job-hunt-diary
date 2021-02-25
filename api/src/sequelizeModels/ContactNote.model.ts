import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, BelongsTo, HasOne, ForeignKey, Unique, NotNull } from 'sequelize-typescript';
import { Contact } from './Contact.model';
import { Note } from './Note.model';

interface IContactNote {
  contactId: number;
  noteId: number;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class ContactNote extends Model implements IContactNote {
  @ForeignKey(() => Contact)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  contactId!: number;

  @Unique
  @AllowNull(false)
  @ForeignKey(() => Note)
  @Column(DataType.INTEGER)
  noteId!: number;
}
