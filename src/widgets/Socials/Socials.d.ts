interface Social {
  icon: string;
  name: string;
  url: string;
}

export interface SocialsProps {
  socials: Social[];
}

export interface SocialsAPIResponse {
  data: {
    attributes: {
      Socials: {
        icon: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        name: string;
        url: string;
      }[];
    };
  };
}
