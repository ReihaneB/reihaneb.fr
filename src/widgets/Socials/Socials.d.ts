export interface Social {
  icon: string;
  name: string;
  url: string;
}

export interface SocialsProps {
  socials: Social[];
  additionalClasses?: string;
}
