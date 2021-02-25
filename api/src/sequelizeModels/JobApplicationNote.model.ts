import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, BelongsTo, HasOne, ForeignKey, Unique, NotNull } from 'sequelize-typescript';
import { JobApplication } from './JobApplication.model';
import { Note } from './Note.model';

interface IJobApplicationNote {
  jobApplicationId: number;
  noteId: number;
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class JobApplicationNote extends Model implements IJobApplicationNote {
  @AllowNull(false)
  @ForeignKey(() => JobApplication)
  @Column(DataType.INTEGER)
  jobApplicationId!: number;

  @Unique
  @AllowNull(false)
  @ForeignKey(() => Note)
  @Column(DataType.INTEGER)
  noteId!: number;
}
