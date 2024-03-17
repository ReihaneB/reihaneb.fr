import Work from '@/pageComponents/Work/Work';

interface WorkPageProps {
  params: {
    id: string;
  };
}

function WorkPage({ params }: WorkPageProps) {
  return (
    <Work params={params} />
  );
}

export default WorkPage;
