import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,

  ShoppingCartIcon,
  VideoCameraIcon,
  PhotoIcon,
  CogIcon ,
  BriefcaseIcon,

} from "@heroicons/react/24/solid";
import { GiForkKnifeSpoon } from 'react-icons/gi';
import Video_f1 from "./Video_f1";
import Video_f1_Ent from "./Video_f1_Ent";


 
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 
// nav list menu
const navListMenuItems = [
  {
    title: "Apparel",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "Baby Products",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Footwear",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
  {
    title: "Accessories",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
  {
    title: "Home Decor",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
  {
    title: "Gift and Stationary",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
  {
    title: "Electronics",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
  {
    title: "Salons and Wellness",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

const Navlist_items_movies=[
    {
        title: "Multiplex Bioscope",
        description:
          "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },
      {
        title: "Night Club Vault",
        description:
          "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },


];
const Navlist_items_food=[
    {
        title: "Oriental",
        description:
          "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },
      {
        title: "Multicuisine",
        description:
          "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },
      {
        title: "Quick Service",
        description:
          "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },
      {
        title: "Dessert & Confectioneries",
        description:
          "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },


]



const Navlist_items_Corporate=[
    {
        title: "About Us",
        description:
          "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },
      {
        title: "Careers",
        description:
          "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },
      {
        title: "Newsroom",
        description:
          "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },
      {
        title: "Csr",
        description:
          "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },
      {
        title: "Events",
        description:
          "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },
      {
        title: "Contact Us",
        description:
          "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },


]




///////////////////////////////////////////////////
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="small" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {/* {description} */}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <ShoppingCartIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              Shopping{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            {/* <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />    */}
            <Video_f1 strokeWidth={1} className="h-28 w-28"/>

          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <VideoCameraIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Sh{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

///////////////////////////////////////////////////

function NavListMenu_for_Movies() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
    const renderItems = Navlist_items_movies.map(({ title, description }) => (
      <a href="#" key={title}>
        <MenuItem>
          <Typography variant="small" color="blue-gray" className="mb-1">
            {title}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {/* {description} */}
          </Typography>
        </MenuItem>
      </a>
    ));
   
    return (
      <React.Fragment>
        <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
          <MenuHandler>
            <Typography as="a" href="#" variant="small" className="font-normal">
              <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                <VideoCameraIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                Entertainment{" "}
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
            <Card
              color="blue"
              shadow={false}
              variant="gradient"
              className="col-span-3 grid h-full w-full place-items-center rounded-md"
            >
              <Video_f1_Ent strokeWidth={1} className="h-28 w-28" />
            </Card>
            <ul className="col-span-4 flex w-full flex-col gap-1">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
          <VideoCameraIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
          Sh{" "}
        </MenuItem>
        <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
          {renderItems}
        </ul>
      </React.Fragment>
    );
  }
///////////////////////////////////////////////////
 
function NavListMenu_for_Food() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
    const renderItems = Navlist_items_food.map(({ title, description }) => (
      <a href="#" key={title}>
        <MenuItem>
          <Typography variant="small" color="blue-gray" className="mb-1">
            {title}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {/* {description} */}
          </Typography>
        </MenuItem>
      </a>
    ));
   
    return (
      <React.Fragment>
        <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
          <MenuHandler>
            <Typography as="a" href="#" variant="small" className="font-normal">
              <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                <GiForkKnifeSpoon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                Food{" "}
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
            <Card
              color="blue"
              shadow={false}
              variant="gradient"
              className="col-span-3 grid h-full w-full place-items-center rounded-md"
            >
              <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
            </Card>
            <ul className="col-span-4 flex w-full flex-col gap-1">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
          <VideoCameraIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
          Sh{" "}
        </MenuItem>
        <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
          {renderItems}
        </ul>
      </React.Fragment>
    );
  }
///////////////////////////////////////////////////

function NavListMenu_for_Corporate() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
    const renderItems = Navlist_items_Corporate.map(({ title, description }) => (
      <a href="#" key={title}>
        <MenuItem>
          <Typography variant="small" color="blue-gray" className="mb-1">
            {title}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {/* {description} */}
          </Typography>
        </MenuItem>
      </a>
    ));
   
    return (
      <React.Fragment>
        <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
          <MenuHandler>
            <Typography as="a" href="#" variant="small" className="font-normal">
              <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                <BriefcaseIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                Corporate{" "}
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
            <Card
              color="blue"
              shadow={false}
              variant="gradient"
              className="col-span-3 grid h-full w-full place-items-center rounded-md"
            >
              <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
            </Card>
            <ul className="col-span-4 flex w-full flex-col gap-1">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
          <VideoCameraIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
          Sh{" "}
        </MenuItem>
        <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
          {renderItems}
        </ul>
      </React.Fragment>
    );
  }
///////////////////////////////////////////////////
// nav list component
const navListItems = [
  {
    label: "Gallery",
    icon: PhotoIcon,
  },
  {
    label: "Services",
    icon: CogIcon ,
  },
//   {
//     label: "Blocks",
//     icon: CubeTransparentIcon,
//   },
];
 
function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      <NavListMenu_for_Movies/>
      <NavListMenu_for_Food/>
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
      <NavListMenu_for_Corporate/>
    </ul>
  );
}
 
export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-full p-2 lg:rounded-full lg:pl-6 navbar_one">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Junction Mall 
        </Typography>
        
        
        <div className="hidden lg:block">
          <NavList />
        </div>


        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
 
        {/* <Button size="sm" variant="text">
          <span>Log In</span>
        </Button> */}
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}