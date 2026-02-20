import React from 'react'
import ProfileFiledCard from './ProfileFiledCard'
import { Button } from '@mui/material'

const UserDetail = () => {

  return (
    <div className='space-y-1'>
       <div className="flex items-end justify-end">
            <Button>Edit Details</Button>
        </div>
      <ProfileFiledCard keys="Name" value="Aditya" />
      <ProfileFiledCard keys="Email" value="H7Pd5@example.com" />
      <ProfileFiledCard keys="Mobile" value="234234234" />
      <ProfileFiledCard keys="Address" value="Street 123, Mumbai" />
    </div>
  )
}

export default UserDetail