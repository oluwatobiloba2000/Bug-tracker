import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { bugRemoved, bugResolve} from '../action/bug_actions';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 0),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
      }
  }),
);

function PendingBugLists(){
    const classes = useStyles();
    const dispatch = useDispatch();
    const allBugs = useSelector(state => state.allBugs)

    
    const renderPendingBugLists = (bug) =>{
        return (
            bug.resolved === false &&
          
            <Paper key={bug.id} className={`${classes.paper} bug-card`}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                <time>Added {moment(`${bug.createdat}`).fromNow()}</time>
                   <div className="card-bug-text">
                        <Typography>
                            {bug.description}
                        </Typography>
                   </div>
              
                <Button className="pending-resolve-btn" 
                   onClick={() =>{ 
                       const answer = window.confirm('Are you sure you have resolved the bug?')
                       if(answer){
                          dispatch(bugResolve({id: bug.id}))
                       }
                       }} size="small" color="primary">
                    Resolve
                </Button>
               
                </Grid>
                <Grid item>
                <IconButton onClick={()=>{
                    const answer = window.confirm('Are you sure you want to delete?')
                    if(answer){
                        dispatch(bugRemoved({id: bug.id}))}
                    }
                    } aria-label="delete" className={classes.margin}>
                   <DeleteIcon className="delete-icon" fontSize="small" />
                </IconButton>
                </Grid>
            </Grid>
        </Paper>
        )
    }

    
        return (
            <div className={classes.root}>
             {allBugs.length > 0 ? allBugs.map(renderPendingBugLists) : <div style={{height: '250px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}><p className="empty-message">You have not added a bug, To add a bug click on the + button</p></div>}
           </div>
        )
    
}

export default PendingBugLists;