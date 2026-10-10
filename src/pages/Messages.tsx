import React from 'react'
import Button from '../component/Common/Button'

function Messages() {

    function showMessageBox(){

    }
  return (
    <div>
         <Button style='md' variant='primary' size='md' text='Messages' onClick={showMessageBox}/>
    </div>
    
  )
}

export default Messages