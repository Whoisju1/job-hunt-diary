import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, BelongsTo, HasOne, ForeignKey, Unique } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';
import { Note } from './Note.model';

interface IJobApplicationNote {
  jobApplicationId: string;
  noteId: string;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class JobApplicationNote extends Model implements IJobApplicationNote {
  @IsUUID(4)
  @ForeignKey(() => JobApplication)
  @Column(DataType.UUIDV4)
  jobApplicationId!: string;

  @IsUUID(4)
  @Unique
  @ForeignKey(() => Note)
  @Column(DataType.UUIDV4)
  noteId!: string;
}
