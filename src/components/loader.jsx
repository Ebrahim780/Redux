import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderHuge = () => (
  <div>
    <Dimmer active>
      <Loader size='huge'>Loading</Loader>
    </Dimmer>
  </div>
)

export default LoaderHuge