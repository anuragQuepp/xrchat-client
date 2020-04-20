import React from 'react'
// @ts-ignore
import { Scene } from 'aframe-react'
import Assets from './assets'
import Environment from './environment'
import Player from '../player/player'
import './index.scss'
import SvgVr from '../../icons/svg/Vr'
import Landing from './landing'
import getConfig from 'next/config'
const config = getConfig().publicRuntimeConfig.xr['networked-scene']

type State = {
  color?: string
}

export default class NetworkedScene extends React.Component<State> {
  state: State = {
    color: 'red'
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Scene
          vr-mode-ui="enterVRButton: #enterVRButton"
          networked-scene={config}
          class="scene"
          renderer="antialias: true"
          background="color: #FAFAFA"
        >
          <Assets/>
          <Player/>
          <Environment/>
          <Landing />
          <a className="enterVR" id="enterVRButton" href="#"><SvgVr className="enterVR" /></a>
        </Scene>
      </div>
    )
  }
}
