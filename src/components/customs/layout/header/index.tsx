import { FC } from "react";
import { NavLink } from "react-router";
import './_style.scss'

const Header: FC = () => {
  return (
    <header className="bg-[#845ec2]">
      <div className="px-[20px] md:px-[50px] lg:px-[100px] mx-auto ">
        <div className="flex justify-between items-center py-[10px] h-[80px]">
          <a className="text-white text-[20px] font-bold " href="#"><img className="w-[50px]" src="/rr.svg" alt="logo" /></a>
          <ul className="flex items-center gap-[20px] text-white text-[12px] md:text-[14px] font-bold">
            <NavLink to={'/'} className="item px-2 py-1 rounded-e-lg"><a href="#">Home</a></NavLink>
            <NavLink to={'/about'} className="item px-2 py-1 rounded-e-lg"><a href="#">About</a></NavLink>
            <NavLink to={'/products'} className="item px-2 py-1 rounded-e-lg"><a href="#">Products</a></NavLink>
            <NavLink to={'/details/:id'} className="item px-2 py-1 rounded-e-lg"><a href="#">Details</a></NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
