import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {bugRemoved} from '../action/bug_actions';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const useStyles = makeStyles((theme) => ({
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
    },
    
  }));

function ResolvedBugList (){
    const allBugs = useSelector(state => state.allBugs)
    const classes = useStyles();
    const dispatch = useDispatch();

    const renderResolvedBugList = (bug) =>{
        return (
            bug.resolved === true &&
            <Paper key={bug.id} className={`${classes.paper} bug-card`}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                <time>Added {moment(`${bug.createdat}`).fromNow()}</time>
                   <div className="card-bug-text">
                        <Typography>
                            {bug.description}
                        </Typography>
                   </div>
              
               <time className="resolved-bug-time">resolved {moment(`${bug.resolvedat}`).fromNow()}, {moment(`${bug.resolvedat}`).format("MMMM Do YYYY")}</time>

                    <div className="resolved-icon-container" title="status: resolved">
                       <DoneAllIcon  className="checkIcon"/><time>{moment(`${bug.resolvedat}`).format("h:mm:ss a")}</time>
                    </div>
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
             {allBugs.length > 0 && allBugs.map(renderResolvedBugList)}
            </div>
        )
    
}


export default ResolvedBugList;