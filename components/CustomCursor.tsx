'use client'

import { useState, useEffect } from 'react'
import { BsFillCursorFill } from "react-icons/bs";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleLinkHover = (e: MouseEvent) => {
      setIsHovering((e.target as HTMLElement).tagName === 'A')
    }

    window.addEventListener('mousemove', updateCursorPosition)
    window.addEventListener('mouseover', handleLinkHover)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
      window.removeEventListener('mouseover', handleLinkHover)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        body, a {
          cursor: none !important;
        }
      `}</style>
      <div
        className={`fixed w-0 h-0 pointer-events-none ${isHovering ? 'z-50' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      >
        {/* <div 
          className="absolute w-4 h-4 border-red-500 border-l-2 border-t-2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
        /> */}
        <BsFillCursorFill className='absolute rotate-[270deg] text-text-primary text-3xl' />
      </div>
    </>
  )
}

export default CustomCursor