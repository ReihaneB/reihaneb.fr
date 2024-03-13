import enhancedFetch from '@/utils/enhancedFetch/enhancedFetch';

export const getSocials = async () => {
  const { body } = await enhancedFetch({
    method: 'GET',
    path: '/social',
    tag: 'socials',
  });

  return body;
};
