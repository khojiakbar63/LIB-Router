import { FC } from "react";
import { BiSolidDetail } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";

const DetailsPage: FC = () => {
  return (
    <div className="group">
      <BiSolidDetail className="text-[100px] text-[#b8c1ec] group-hover:text-[#845ec2] mx-auto mt-10 group-hover:rotate-[360deg] transition-all duration-500" />
      <h1 className="text-[50px] font-bold text-center mt-10 border-t-8 border-[#b8c1ec] group-hover:border-[#845ec2] text-[#b8c1ec] group-hover:text-[#845ec2] p-4 flex items-center justify-center gap-3">
        Details Page
      </h1>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "We produce food for Mice",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "We produce food for Hamsters",
          1000,
          "We produce food for Guinea Pigs",
          1000,
          "We produce food for Chinchillas",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default DetailsPage;
