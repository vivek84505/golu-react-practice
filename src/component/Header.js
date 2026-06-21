 
function Header(props) {

    //  console.log("Header Component Rendered============>")
  
  return (
    <header className="header">
       
      <h1>{props.title}</h1>
      
    </header>
  );
}
 
export default Header;