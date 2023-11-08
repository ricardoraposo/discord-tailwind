type IconProp = {
  icon: React.ReactNode;
  text: string;
};

function SideBarIcon({ icon, text }: IconProp) {
  return (
    <div>
      {icon}
      <span>
        {text}
      </span>
    </div>
  );
}

export default SideBarIcon;
