import api from '@/lib/api';

const CustomerUrunService = (() => {
  return {
    groupList: async ({ signal }: { signal?: AbortSignal }) => {
      return await api.post(
        '/public/customerUrun/grupList',
        {},
        {
          signal: signal,
        },
      );
    },
    list: async ({
      signal,
      group_id,
    }: {
      signal?: AbortSignal;
      group_id: number;
    }) => {
      return await api.post(
        '/public/customerUrun/list',
        {
          paket_grup_id: group_id,
        },
        {
          signal: signal,
        },
      );
    },
  };
})();

export default CustomerUrunService;
