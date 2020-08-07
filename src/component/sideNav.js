import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { userEdited } from '../action/user_actions';
import './Sidenav.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function SideNav (){
    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();

    const [checked, setChecked] = React.useState(currentUser.colorMode === 'light' ? true: false);

    const toggleChecked = () => {
      setChecked((prev) => !prev);
      if(checked){
          dispatch(userEdited({username: currentUser.username, colorMode: 'dark'}))
        }else{
            dispatch(userEdited({username: currentUser.username, colorMode: 'light'}))
      }
    };

    const changeUsername = () =>{
        const username = window.prompt('Input your name');
        if(username){
            dispatch(userEdited({username, colorMode: currentUser.colorMode}))
        }
    }
    const deleteUsername = () =>{
        const confirm = window.confirm('Are you sure you want to delete ?');
        if(confirm){
            dispatch(userEdited({username : null, colorMode: currentUser.colorMode}))
        }
    }

        return (
            <div className="nav">
               { currentUser.username
               ? <div className="nav-container">
                   <span className="board-owner-card"><DashboardIcon/> Board Owner</span>
                   <div className="current-username">{currentUser.username}</div>
                     <div className="add-user-btn">
                        <button className="nav-btn" onClick={()=> changeUsername()}>Change username</button>
                        <button className="nav-btn" onClick={()=> deleteUsername()}>Delete username</button>
                    </div>
                 </div>
               :
               <div className="nav-container">
                   <button className="nav-btn" onClick={() => changeUsername()}>Add a username</button>
               </div>
               }

               <div className="dark-mode-container">
                  <WbSunnyIcon />
                    <FormControlLabel style={{margin: 0}}
                        control={<Switch checked={checked} onChange={toggleChecked} />}
                        
                    />
                    <NightsStayIcon />
               </div>
            </div>
        )
    
}

export default SideNav;