import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../common/api/apiClient';
import type { Skip } from '../types/types';

const useSkips = (postcode: string, area: string) => {
  return useQuery<Skip[], Error>({
    queryKey: ['skips', postcode, area],
    queryFn: async () => {
      const { data } = await apiClient.get('/skips/by-location', {
        params: { postcode, area },
      });
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes cache
    retry: 2,
  });
};

export default useSkips;