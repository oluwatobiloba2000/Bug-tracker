import React from 'react';
import {useSelector} from 'react-redux';
import SideNav from '../component/sideNav';
import AddBugComponent from '../component/add_bug_component';
import PendingBugLists from '../component/pending_bug_lists';
import ResolvedBugList from '../component/resolved_bug_list';
import '../darkMode.css';

function BugContainer() {
    const currentUser = useSelector(state => state.currentUser)
    return (
      <div className={`container ${currentUser.colorMode === 'light'? 'dark-mode' : ''}`}>
           <SideNav/>

          <div className="bug-container">
            <div className="bug-section">
              <p className="section-title">Pending bug lists</p>
                <PendingBugLists/>
            </div>
            <div className="bug-section">
               <p className="section-title">Resolved bug lists</p>
                <ResolvedBugList />
            </div>
            <AddBugComponent/>
          </div>
        </div>
    );
  }

export default BugContainer;

// function printName(firstname){
//     return function (lastname){
//         return console.log(firstname, lastname)
//     }
// }

// printName('Paul')('tobby')