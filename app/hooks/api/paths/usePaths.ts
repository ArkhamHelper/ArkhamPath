import { useApi } from '../useApi';
import type { Path } from '../../../models/path';

export const useGetPaths = (userId: string) => {
  const { get } = useApi<Path[]>();
  const { data, error, isLoading } = get(`paths?userId=${userId}`);

  return { paths: data, error, isLoading };
};
