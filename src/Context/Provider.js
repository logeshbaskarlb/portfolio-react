import React, { useState } from 'react'
import Context from "./Context";

function Provider(props) {
    const [theme , setTheme] = useState('light')
  return (
    <Context.Provider value={{theme,setTheme}}>
        {props.children}
    </Context.Provider>
  )
}

export default Provider