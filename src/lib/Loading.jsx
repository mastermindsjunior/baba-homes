import gsap from 'gsap'
import React from 'react'
import '../App.css'


export const startLoading = () => {
    gsap.set('#Loading', {pointerEvents:'all', display:'flex'})
    gsap.to('#Loading', {opacity:1, duration:0.3})
}
export const endLoading = () => {
    gsap.to('#Loading', {opacity:0, duration:0.3})
    gsap.set('#Loading', {pointerEvents:'none', display:'none', delay:0.4})
}
const Loading = () => {
  return (
    <aside id='Loading'>
      <span class="loader"></span>
    </aside>
  )
}

export default Loading
