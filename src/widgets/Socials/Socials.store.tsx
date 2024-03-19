import { getSocials } from '@/api/getSocials';

import Socials from './Socials';

async function SocialsStore({
  ...rest
}) {
  const socials = await getSocials();

  return (
    <Socials
      socials={socials}
      {...rest}
    />
  );
}

export default SocialsStore;
