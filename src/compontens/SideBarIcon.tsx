type IconProp = {
  icon: React.ReactNode;
  text: string;
};

function SideBarIcon({ icon, text }: IconProp) {
  return (
    <div
      className="relative text-white bg-gray-700 w-12 h-12 rounded-3xl
      flex items-center justify-center
      hover:rounded-xl hover:bg-blue-800
      transition-all duration-100 ease-linear cursor-pointer
      group"
    >
      {icon}
      <span
        className="absolute p-2 m-2 w-auto left-14 text-xs whitespace-nowrap
        bg-gray-900 rounded-md font-semibold
        scale-0 group-hover:scale-100
        transition-all duration-100 origin-left"
      >
        {text}
      </span>
    </div>
  );
}

export default SideBarIcon;
