import React from 'react';
import {  Model, Engine, Scene } from 'react-babylonjs';
import { Vector3, Axis } from '@babylonjs/core';
import './index.css';

export default function ConfirmPane(props){
  return (
    <div className="canvas-container">
      <Engine canvasId="confirmation-canvas">
        <Scene>
          <arcRotateCamera 
            name="camera1"
            position={new Vector3(0, -3, -3)}
           target={Vector3.Zero()}
              minZ={0.001}
              alpha={-Math.PI / 2}
              beta={Math.PI / 1.2}
              radius={4}  />
            <hemisphericLight name="light1" intensity={2} direction={Vector3.Up()} />
          <Model
            rotation={new Vector3(90, 90, -120)}
            scaleTo={1}
            position={new Vector3(0, 0, 0)}
            pluginExtension=".glb"
            rootUrl="./"
            sceneFilename="Pizza.glb"
            />
        </Scene>
      </Engine>
    </div>
  );
}
