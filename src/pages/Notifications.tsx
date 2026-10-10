import React from 'react'
import Button from '../component/Common/Button'

function Notifications() {
    function notificationCount(){

    }
  return (
    <div>
        <Button style='md' variant='primary' size='md' text='Notification' onClick={notificationCount}/>
    </div>
  )
}

export default Notifications