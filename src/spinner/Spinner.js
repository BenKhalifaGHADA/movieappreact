import React from 'react'
import './spinner.css'
function Spinner(Component) {
  return function SpinnerComponent({ loading, ...props }) {
    if (loading) {
    return (<div class="sk-chase">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
  </div>)
            }
            else
          
    return (<Component {...props} />)}}

    export default Spinner;