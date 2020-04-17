import React from 'react'
// @ts-ignore
import { Entity } from 'aframe-react'

// this cursor is required to be able to click portals/links
// it references portals by the class .portal
const Cursor = () => (
  <Entity
    primitive="a-cursor"
    id="camera-cursor"
    cursor="rayOrigin: mouse"
    raycaster="far: 10000; interval: 100; objects: .portal">
  </Entity>
)
export default Cursor