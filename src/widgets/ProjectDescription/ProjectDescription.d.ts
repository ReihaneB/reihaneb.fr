import type { ObjectiveDescriptionProps } from '@/widgets/ObjectiveDescription/ObjectiveDescription.d';
import type { ImageProps } from '@/components/Image/Image.d';

export interface ProjectDescriptionProps {
  companyDescription: string;
  objective: ObjectiveDescriptionProps & {
    image: ImageProps;
  };
}

export interface ProjectDescriptionStoreProps {
  id: string;
}
