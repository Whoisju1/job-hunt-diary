import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, BelongsTo, HasOne, ForeignKey, HasMany, Default, AutoIncrement } from 'sequelize-typescript';
import { JobApplicationNote } from './JobApplicationNote.model';
import { JobPostingInfo } from './JobPostingInfo.model';
import { User } from './User.model';
import { Status } from './Status.model';
import { Position } from './Position.model';
import { Note } from './Note.model';

interface IJobApplication {
  id: number;
  name: string;
  dateApplied: Date;
  jobPostingInfo: JobPostingInfo;
  owner: User;
  status: Status;
  statusId: number;
  position: Position;
  userId: number;
  // notes: Note[]
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class JobApplication extends Model implements IJobApplication {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @AllowNull
  @Column(DataType.DATE)
  dateApplied!: Date;

  @HasOne(() => JobPostingInfo, { onDelete: 'CASCADE' })
  jobPostingInfo!: JobPostingInfo;

  @BelongsTo(() => User)
  owner!: User;

  @BelongsTo(() => Status)
  status!: Status;

  @HasOne(() => Position, { onDelete: 'CASCADE' })
  position!: Position;

  // @HasMany(() => Note, () => JobApplicationNote)
  // notes!: Note[]

  @ForeignKey(() => Status)
  @Column(DataType.INTEGER)
  statusId!: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;
}