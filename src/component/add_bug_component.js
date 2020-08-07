import React from 'react';
import {useDispatch} from 'react-redux';
import { bugAdded} from '../action/bug_actions';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '96%',
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));




function AddBugComponent(){
    const classes = useStyles();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
      top: false
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };

    const addBug = ()=>{
        const textarea = document.getElementById('outlined-multiline-static');
        if(textarea.value.trim()){
            dispatch(bugAdded({description: textarea.value.trim(), createdat:  new Date().toLocaleString()}))
            textarea.value = '';
           setState({...state, top: false})
        }
    }
  
    const textArea = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        style={{overflow: 'hidden'}}
      >
        <p style={{marginLeft: '19px', borderLeft:' 2px dashed #3f51b5', paddingLeft: '6px', fontWeight: 600}}>
            Discovered a new bug? Add it here !
        </p>
        <form  className={classes.root} autoComplete="on">
            <TextField
            id="outlined-multiline-static"
            label="Type your bugs"
            multiline
            rows={5}
            variant="outlined"
            />
            <Button variant="contained" style={{backgroundColor: '#2196F3'}}  onClick={addBug} color="primary">
               Add bug
            </Button>
        </form>
      </div>
    );
  
    
        return (
            <div className={`${classes.root} add-bug-container`}>
                <>
                  <Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
                      {textArea('top')}
                  </Drawer>
                 </>
            <div>
            <Fab className="add-btn" onClick={toggleDrawer('top', true)} color="primary" aria-label="add">
              <AddIcon />
            </Fab>
            </div>
           </div>
        )
    
}


export default AddBugComponent;