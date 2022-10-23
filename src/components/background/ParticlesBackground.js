import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from './particles-config'

// export const ParticlesBackground = () => {
//   return (
// <Particles params={ particlesConfig }></Particles>
//   )
// }
function ParticlesBackground() {
  return (
    <Particles params={ particlesConfig }></Particles>
  );
}

export default ParticlesBackground;

