export interface Path {
  id: string;
  userId: string;
  cycleCode: string;
  dateLastFetchArkhamCards: Date;
  data: { [key: string]: string };
}
