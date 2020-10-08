import React from 'react';
import Paper from '@material-ui/core/Paper';
import WaitingRoom from '../../components/waiting-room';
import './index.css';
export default function LandingView(props){
  return (
    <div className="landing-view">
      <Paper >
        <WaitingRoom>
          <div className="landing-actions">
            <div className="landing-actions__container">
            <div className="landing-header">
              <img alt="Rainbow Kereru" src="/logo.png" className="rk" />
              <h2>Rainbow Kereru Pizza</h2>
            </div>
            <div 
              onClick={() => props.history.push('/pizza')}
              className="phwoop-action">Get a feed</div>
            <div className="phwoop-link">
              <h4>Powered by <a href="https://www.phwoop.com">Phwoop</a></h4>
            </div>
          </div>
        </div>
        </WaitingRoom>
      </Paper>
    </div>
  );
}
