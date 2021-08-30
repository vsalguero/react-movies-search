import react from 'react';
import Search from './Search';
import './css/Menu.css';

function Menu(props){
    return(
       <div className="container">
           <div className="subcontainer">
               <div className="logo">
                    {props.title}
               </div>

               <div className="search">
                   <Search />
               </div>

               <div className="actions">
                   <button className="button btn-blue">+ Añadir un nuevo libro</button>
               </div>
           </div>
       </div>
    );
}

export default Menu;