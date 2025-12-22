export class PathModel {
  id: string;
  userId: string;
  cycleCode: string;
  dateLastFetchArkhamCards: Date;
  data: { [key: string]: string };

  constructor(path: Partial<PathModel>) {
    this.data = {};

    Object.assign(this, path);
  }
}
