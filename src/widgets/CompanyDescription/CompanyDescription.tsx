import type { CompanyDescriptionProps } from './CompanyDescription.d';
import styles from './CompanyDescription.module.css';

function CompanyDescription({
  description,
  ...rest
}: CompanyDescriptionProps) {
  return (
    <div {...rest}>
      <h2 className={styles.title}>Contexte</h2>
      <p>{description}</p>
    </div>
  );
}

export default CompanyDescription;
