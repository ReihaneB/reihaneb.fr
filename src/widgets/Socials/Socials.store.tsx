import { getStrapiMedia } from '@/utils/strapiMedia';
import { getSocials } from '@/api/getSocials';

import Socials from './Socials';

import { SocialsAPIResponse} from './Socials.d';

async function SocialsStore({
  ...rest
}) {
  const { data } = await getSocials() as unknown as SocialsAPIResponse;
  const socialData = data.attributes.Socials;

  const formatedSocials = socialData.map(item => ({
    icon: getStrapiMedia(item.icon.data.attributes.url) as string,
    name: item.name as string,
    url: item.url as string,
  }));

  return (
    <Socials
      socials={formatedSocials}
      {...rest}
    />
  );
}

export default SocialsStore;
