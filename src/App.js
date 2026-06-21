import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Welcome from "./component/Welcome";

import { headerTitle, sidebarTitle,footerTitle} from "./component/title";
 


import "./App.css";
import ClassComponent from "./component/ClassComponent";

function App() {

  
  return (
    <div className="app">
      
      <Header title={headerTitle} />
  
      <div className="main-layout">
        <Sidebar  title={sidebarTitle} />
        <Content />
      </div>
      {/* <ClassComponent name='vivek'/> */}

      <Footer  title={footerTitle} />
    </div>
  );
}

export default App;