import Image from "next/image";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-2">
        <div className="flex items-center">
          <Image src="/lscs.png" alt="lscsLogo" width={28} height={28} />
          <div className="flex flex-col justify-center text-3xl font-bold">
            <h1>Research and Development</h1>
            <h1 className="text-lg">39th La Salle Computer Society</h1>
          </div>
        </div>
      </div>
    </>
  );
};
