import CustomIcons from "./constants/sprite.svg";

export const Icon = ({ id, ...props }) => {
  return (
    <svg {...props}>
      <use href={CustomIcons + `#${id}`} />
    </svg>
  );
};
