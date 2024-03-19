import Section from '@/components/Section/Section';
import HeroHeaderStore from '@/widgets/HeroHeader/HeroHeader.store';
import ProjectsListStore from '@/widgets/ProjectsList/ProjectsList.store';

// TODO: Add stories when upgrade to Storybook 8: https://storybook.js.org/blog/storybook-react-server-components/?ref=storybookblog.ghost.io
async function Home() {
  return (
    <div>
      <Section id="hero-header">
        <HeroHeaderStore />
      </Section>
      <Section id="projects-list">
        <ProjectsListStore />
      </Section>
    </div>
  );
}

export default Home;
