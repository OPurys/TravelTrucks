import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.error}>Something went wrong...</p>
    </div>
  );
};

export default ErrorMessage;
