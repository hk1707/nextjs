import Nav from './Nav';
import MENU_QUERY from "../query/menuquery";
import { useQuery } from '@apollo/client';
import Loader from "./loader";
 

const Menu = ( ) => {

    const {
        data,
        loading,
        error
      } = useQuery(MENU_QUERY);
     
      if (loading) return <Loader />;
      if (error) return true;
      if (!data) return <p>Not found</p>;
    
      const menulist = data.menus.nodes[0].menuItems.edges;
 
    return(        
        <Nav key={menulist.id}  menuitems={data.menus.nodes[0].menuItems.edges} />
    )

}


export default Menu;