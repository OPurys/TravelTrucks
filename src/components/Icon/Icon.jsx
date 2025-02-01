const Icon = ({ id, w, h, className }) => {
  return (
    <svg className={className || ''} width={w} height={h}>
      <use href={`src/assets/icons/sprite.svg#${id}`} />
    </svg>
  );
};
export default Icon;
