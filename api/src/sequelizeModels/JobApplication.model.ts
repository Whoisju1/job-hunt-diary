import { Table, Model, DataType, Column, PrimaryKey, IsUUID, AllowNull, BelongsTo, HasOne, ForeignKey, HasMany } from 'sequelize-typescript';
import { JobApplicationNote } from './JobApplicationNote.model';
import { JobPostingInfo } from './JobPostingInfo.model';
import { User } from './User.model';
import { Status } from './Status.model';
import { Position } from './Position.model';
import { Note } from './Note.model';

interface IJobApplication {
  id: string;
  name: string;
  dateApplied: Date;
  jobPostingInfo: JobPostingInfo;
  owner: User;
  status: Status;
  statusId: string;
  position: Position;
  userId: string;
  // notes: Note[]
}

@Table({
  createdAt: true,
  updatedAt: true,
})
export class JobApplication extends Model implements IJobApplication {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUIDV4)
  id!: string;

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

  @IsUUID(4)
  @ForeignKey(() => Status)
  @Column(DataType.UUIDV4)
  statusId!: string;

  @IsUUID(4)
  @ForeignKey(() => User)
  @Column(DataType.UUIDV4)
  userId!: string;
}