 
function Sidebar(props) {

   
  //  console.log("Sidebar Component Rendered============>")
  return (
    <aside className="sidebar">
      <h2>{props.title} </h2>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Products</li>
        <li>Reports</li>
        <li>Settings</li>
        
      </ul>
    </aside>
  );
}

export default Sidebar;