export class PathModel {
  id: string;
  userId: string;
  cycleCode: string;
  data: { [key: string]: string };
  dateLastFetchArkhamCards?: Date | null;

  constructor(path: Partial<PathModel>) {
    this.data = {};

    Object.assign(this, path);
  }
}
