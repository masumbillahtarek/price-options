
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
    const[open,setOpen]=useState(false)
    const routes = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/services', name: 'Services' },
  { id: 4, path: '/contact', name: 'Contact' },
  { id: 5, path: '/blog', name: 'Blog' }
];

    return (
        <div>
  
<nav className="relative p-6">
    <div className="md:hidden" onClick={()=>setOpen(!open)}> 
        {open===true?<RxCross2 className="text-3xl " />:<IoMdMenu className="text-3xl " />}

    </div>
    {/*
    <ul className={`md:flex duration-1000 gap-6 ${open?'':'hidden'} absolute px-4`}>
    {
    routes.map(route=><Route key={route.id} route={route}></Route>)
}
    */}
<ul className={`md:flex md:static duration-1000 gap-6 ${open?'top-16':'-top-[600px]'} absolute px-4`}>
    {
    routes.map(route=><Route key={route.id} route={route}></Route>)
}
</ul>


</nav>
        </div>
    );
};
 function Route({route}){
    const{path,name}=route
    return(
        <li className="hover:bg-lime-100 px-4 py-2 rounded-2xl">
       <a href={path}>{name}</a>
       </li>
    )
 }
export default Navbar;