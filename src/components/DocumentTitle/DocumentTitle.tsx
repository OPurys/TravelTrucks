import { Helmet } from 'react-helmet-async';
import { ChildrenProps } from '../../../types/childrenProps';

const DocumentTitle = ({ children }: ChildrenProps) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};

export default DocumentTitle;
