import React, { ReactNode } from 'react'

const StackCard = ({children} : {children : ReactNode}) => {
  return (
    <div className="stackCard">
      {children}
    </div>
  )
}

export default StackCard
