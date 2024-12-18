import { Helmet } from 'react-helmet';

interface Props {
  title?: string;
}

export const MetaTitle = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{title && `${title} | `}Dave Wheeldon</title>
    </Helmet>
  );
};
