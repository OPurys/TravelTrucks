import css from './Container.module.css';
import { ChildrenProps } from '../../../types/childrenProps';

const Container = ({ children }: ChildrenProps) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
