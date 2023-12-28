
type TabNameProps = {
  tabName: string,
  link: string
}
function TabName({tabName, link} : TabNameProps){
  return(
    <a className="text-xl font-bold text-white top-0 bottom-0 m-auto h-full mx-3 hover:text-purple-800" href={link}>{tabName}</a>
  );
}

export default TabName;