import enhancedFetch from '@/utils/enhancedFetch/enhancedFetch';

interface IGetGalleryList {
  id: string;
}

interface ProjectResponse {
  data: {
    attributes: {
      project_images: [
        {
          id: number;
          name: string;
          images: {
              data: [{
                attributes: {
                  url: string;
                  alternativeText: string;
                }
              }]
            }
        }
      ];
    };
  };
}

export const getGalleryList = async ({ id }: IGetGalleryList) => {
  const { body } = await enhancedFetch<ProjectResponse>({
    method: 'GET',
    path: `/works/${id}`,
    tag: 'project',
  });

  const project = body.data.attributes;

  return project.project_images.map(gallery => ({
    id: gallery.id,
    name: gallery.name,
    images: gallery.images.data.map(image => ({
      src: image.attributes.url,
      alt: image.attributes.alternativeText,
    })),
  }));
};
