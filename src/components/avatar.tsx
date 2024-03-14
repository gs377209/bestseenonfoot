import classNames from "classnames";
import Image from "next/image";

interface Props {
  name: string;
  picture: string;
  large?: boolean;
  priority: boolean;
}

const Avatar = ({ name, picture, large, priority }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className={classNames("h-12 w-12 rounded-full", {
          "h-36 w-36 rounded-3xl": large,
        })}
        alt={name}
        width="144"
        height="144"
        priority={priority}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0uTyzHgAFBAIh7MnC9QAAAABJRU5ErkJggg=="
      />
      <div className="ml-4 text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
