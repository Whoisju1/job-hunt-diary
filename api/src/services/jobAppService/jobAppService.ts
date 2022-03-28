import 'reflect-metadata';
import { IJobAppService, IList } from '../../interfaces';
import { JobApplication } from '../../models';
import { injectable } from 'inversify';
import { IJobApplication, IJobApplicationInput } from 'src/interfaces/modelInterfaces';

@injectable()
export class JobAppService implements IJobAppService {
  public create = async (jobAppInput: IJobApplicationInput): Promise<IJobApplication> => {
    const newJobApp = new JobApplication(jobAppInput);
    await newJobApp.save();
    return newJobApp.toJSON();
  };

  public edit!: (jobAppInput: IJobApplicationInput) => Promise<IJobApplication>;
  public getOne = async (id: string):  Promise<IJobApplication | null> => {
    const foundApplication = await JobApplication.findOne({where: { id }});
    if (!foundApplication) return null;
    return foundApplication.toJSON();
  };
  public getMany!: () => Promise<IList<IJobApplication>>;
  public deleteOne!: () => Promise<string>;
  public deleteMany!: (ids: string[]) => Promise<string[]>;
}
