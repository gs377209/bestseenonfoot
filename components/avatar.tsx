import Image from "next/future/image";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className="h-12 w-12 rounded-full"
        alt={name}
        width="800"
        height="800"
      />
      <div className="ml-4 text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
