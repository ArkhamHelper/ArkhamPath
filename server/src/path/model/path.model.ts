export class PathModel {
  id: string;
  userId: string;
  cycleCode: string;
  dateLastFetchArkhamCards: Date;
  data: { [key: string]: string };

  constructor(path: Partial<PathModel>) {
    Object.assign(this, path);
  }
}
