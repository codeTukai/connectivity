import React from 'react'
import Button from '../component/Common/Button'

function Network() {
    function getConnected(){

    }
  return (
    <div>
        <Button style='md' variant='primary' size='md' text='Connection' onClick={getConnected}/>
    
    </div>
  )
}

export default Network