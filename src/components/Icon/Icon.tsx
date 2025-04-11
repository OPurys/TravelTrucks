import { spriteTypes } from '../../../types/spriteTypes';

interface IconProps {
  id: spriteTypes;
  w: number;
  h: number;
  className?: string;
}

const Icon = ({ id, w, h, className }: IconProps) => {
  return (
    <svg className={className || ''} width={w} height={h}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
