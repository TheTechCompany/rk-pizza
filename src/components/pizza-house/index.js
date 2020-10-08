import React from 'react';

import {  Model, Engine, Scene } from 'react-babylonjs';
import { Vector3 } from '@babylonjs/core';
let lastTime = Date.now();
export default function PizzaHouse(props){

  const [ rotation, setRotation ] = React.useState(Vector3.Zero());

  let timer;

  const animate = _ => {

    const rpm = 3.33;
    const now = Date.now()
    const deltaTimeInMillis = now - lastTime;
    lastTime = now;
    const rotationRads = ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    rotation.y += rotationRads;
    setRotation(rotation.clone());
    timer = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    timer = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(timer);

  }, [])

  return (

      <Engine antialias={true} canvasId="confirmation-canvas">
        <Scene>
          <universalCamera 
            locked={true}
            name="camera1"
            controls={false}
            rotation={new Vector3(0.575959, 90*(Math.PI / 180), 0)}
            position={new Vector3(-14,8 , 0)}
           lockedTarget={Vector3.Zero()}
          />
            <hemisphericLight name="light1" intensity={2} direction={Vector3.Up()} />
            <transformNode 
              name="pizza-base"
              rotation={rotation}>
            <Model
              scaling={new Vector3(3, 3, 3)}
            position={new Vector3(0, 0, 0)}
            pluginExtension=".glb"
            rootUrl="./"
            sceneFilename="Pizza.glb"
          />
            <Model
              scaling={new Vector3(1.5, 1.5, 1.5)}
              position={new Vector3(0, 0.3, 0)}
              pluginExtension=".glb"
              rootUrl="./"
              sceneFilename="gregs.glb" />
            </transformNode>
        </Scene>
      </Engine>
  );
}
