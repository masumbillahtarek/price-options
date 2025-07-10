import { LuSquareMenu } from "react-icons/lu";
import { ImCross } from "react-icons/im";
import { useState } from "react";
const NavbarAgain = () => {
    const[come,setCome]=useState(false)
    const routes=[
{ id: 1, path: "/", name: "Home" },
{ id: 2, path: "/about", name: "About" },
{ id: 3, path: "/services", name: "Services" },
{ id: 4, path: "/contact", name: "Contact" },
{ id: 5, path: "/blog", name: "Blog" }

    ]
    return (
       <nav className="mx-12">
        <div onClick={()=>setCome(!come)} className="md:hidden">
            {come?<ImCross className="text-2xl" />:<LuSquareMenu className="text-3xl"/>}

        </div>
        <ul className={`${come?'':'hidden'} w-40 pl-8 bg-black text-white md:w-full md:bg-white md:text-black md:flex justify-center gap-8 text-3xl`}>
            {
                routes.map(route=><Route route={route}></Route>)
            }
        </ul>
       </nav>
    );
};
const Route=({route})=>{
    const{path,name}=route
    return(
        <div>
        <a href={path}>{name}</a>
        </div>
    )
}
export default NavbarAgain;