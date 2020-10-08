import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import WaitingRoom from '../../components/waiting-room';
import './index.css';
export default function LandingView(props){
  return (
    <div className="landing-view">
      <Paper >
        <WaitingRoom>
          <div className="landing-actions">
            <div className="landing-header">
              <img src="/logo.png" className="rk" />
              <h2>Rainbow Kereru Pizza</h2>
            </div>
            <div 
              onClick={() => props.history.push('/pizza')}
              className="phwoop-action">Create your base</div>
            <div>
              <img src="/phwoop-text.png" className="phwoop-logo"/>
            </div>
          </div>
        </WaitingRoom>
      </Paper>
    </div>
  );
}
