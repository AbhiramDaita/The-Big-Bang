import React from 'react'

const SecondaryButton = ({title,diff}) =>{
  return(    <div>
        {diff ? <button type="submit" className="secondaryBtn secondaryBtn-war">{title}</button>:<button type="submit" className="secondaryBtn">{title}</button>}
    </div>)
}

export default SecondaryButton;