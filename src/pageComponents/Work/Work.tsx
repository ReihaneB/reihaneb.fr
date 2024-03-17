import Section from '@/components/Section/Section';
import GalleryListStore from '@/widgets/GalleryList/GalleryList.store';
import ProjectDescriptionStore from '@/widgets/ProjectDescription/ProjectDescription.store';
import ProjectHeaderStore from '@/widgets/ProjectHeader/ProjectHeader.store';
import StackListStore from '@/widgets/StackList/StackList.store';

import type { WorkProps } from './Work.d';

// TODO: Add stories when upgrade to Storybook 8: https://storybook.js.org/blog/storybook-react-server-components/?ref=storybookblog.ghost.io
async function Work({
  params,
}: WorkProps) {
  const { id } = params;

  return (
    <div>
      <Section id="project-header">
        <ProjectHeaderStore id={id} />
      </Section>
      <Section id="project-description">
        <ProjectDescriptionStore id={id} />
      </Section>
      <Section id="stack">
        <StackListStore id={id} />
      </Section>
      <Section id="galleries">
        <GalleryListStore id={id} />
      </Section>
    </div>
  );
}

export default Work;
