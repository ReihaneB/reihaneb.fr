import { getAboutMe } from '@/api/getAboutMe';
import { getSocials } from '@/api/getSocials';

import HeroHeader from './HeroHeader';

async function HeroHeaderStore({
  ...rest
}) {
  const about = await getAboutMe();
  const socials = await getSocials();

  return (
    <HeroHeader
      name={about.name}
      title={about.jobTitle}
      description={{
        title: about.description.title,
        content: about.description.content,
      }}
      image={{
        width: about.image.width,
        height: about.image.height,
        src: about.image.src,
        alt: about.image.alt,
      }}
      socials={socials}
      {...rest}
    />
  );
}

export default HeroHeaderStore;
