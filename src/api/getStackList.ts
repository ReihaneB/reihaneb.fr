import enhancedFetch from '@/utils/enhancedFetch/enhancedFetch';

interface IGetStackList {
  id: string;
}

interface ProjectResponse {
  data: {
    attributes: {
      full_stack: [
        {
          id: number;
          name: string;
          stack_category: [
            {
              id: number;
              name: string;
              tags: [
                {
                  id: number;
                  label: string;
                  icon: {
                    data: {
                      attributes: {
                        url: string;
                        alternativeText: string;
                      };
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
    };
  };
}

export const getStackList = async ({ id }: IGetStackList) => {
  const { body } = await enhancedFetch<ProjectResponse>({
    method: 'GET',
    path: `/works/${id}`,
    tag: 'project',
  });

  const project = body.data.attributes;

  return project.full_stack.map(stack => ({
    id: stack.id,
    name: stack.name,
    stackCategory: stack.stack_category.map(category => ({
      id: category.id,
      name: category.name,
      tags: category.tags.map(tag => ({
        id: tag.id,
        label: tag.label,
        icon: tag.icon.data.attributes.url,
      })),
    })),
  }));
};
