import React from 'react'

const ContactInputField = ({ name, type = "text", big = false }: { name: string, type?: string, big?: boolean }) => {
  return (
    <div className={!big ? 'md:col-span-1' : 'md:col-span-2'}>
      <div>{name}</div>
      {big ? (
        <textarea
          id={name}
          name={name}
          className="h-40 w-full resize-none border border-black p-1"
          required
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          className="w-full border border-black p-1"
          required
        />
      )}
    </div>
  )
}

export default ContactInputField
