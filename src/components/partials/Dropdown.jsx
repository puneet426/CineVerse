import React from 'react'

function Dropdown({title,options,fun}) {
  return (
    <div className='select'>
        <select defaultValue="0" onChange={fun} name="format" id="format">
        <option value="0" disabled>
                {title}
            </option>
            {options.map((o,i)=>(
                    <option key={i} value={o} >
                    {o.toUpperCase()}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Dropdown