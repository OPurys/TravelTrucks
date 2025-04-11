import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className={css.wrapper}>
      <p className={css.error}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
