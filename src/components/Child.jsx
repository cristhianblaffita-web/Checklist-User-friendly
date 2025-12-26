import React from "react"
import Grandchild from "./Grandchild.jsx"

const Child = ({message}) => {
  return <Grandchild content= {`${message} the new one `}   />
}

export default Child