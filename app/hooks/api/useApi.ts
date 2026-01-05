import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const SERVER_URL = 'http://192.168.1.11:3000';

export const useApi = <T>() => {
  const get = (path: string) => {
    const fetcher = (...args: Parameters<typeof fetch>) =>
      fetch(...args).then((res) => res.json());

    return useSWR<T, Error>(`${SERVER_URL}/${path}`, fetcher);
  };

  const post = async (path: string) => {
    const fetcher = async (url: string, { arg }: { arg: string }) =>
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arg),
      });
    return useSWRMutation(`${SERVER_URL}/${path}`, fetcher);
  };

  return { get, post };
};
