import type { UserModel } from '../../../user/model/user.model';
import type { PathModel } from '../../model/path.model';

export class GetManyByUserIdFixture {
  paths: PathModel[] = [
    {
      id: '1',
      userId: '1',
      cycleCode: 'the_dunwich_legacy',
      dateLastFetchArkhamCards: new Date('2025-17-12'),
      data: {},
    },
    {
      id: '2',
      userId: '1',
      cycleCode: 'the_path_to_carcosa',
      dateLastFetchArkhamCards: new Date('2025-17-12'),
      data: {},
    },
    {
      id: '3',
      userId: '2',
      cycleCode: 'the_path_to_carcosa',
      dateLastFetchArkhamCards: new Date('2025-17-12'),
      data: {},
    },
  ];

  users: UserModel[] = [
    {
      id: '1',
      email: 'test@test.com',
      password: '$2a$12$OM2MnF85ofncqmftam9ZsOa/L8raGkIHM3ASPWpN4MHWHOZuQ0rUm',
    },
  ];
}
