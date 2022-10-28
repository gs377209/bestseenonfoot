import classNames from "classnames";
import Image from "next/future/image";

type Props = {
  name: string;
  picture: string;
  large?: boolean;
};

const Avatar = ({ name, picture, large }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className={classNames("h-12 w-12 rounded-full", {
          "h-36 w-36 rounded-3xl": large,
        })}
        alt={name}
        width="800"
        height="800"
      />
      <div className="ml-4 text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
