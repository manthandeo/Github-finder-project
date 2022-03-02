import React from 'react'
import {FaGithub} from 'react-icons/fa'

function Footer() {
const footeryear=new Date().getFullYear()

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>

<svg
          width='50'
          height='50'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'
          className='inline-block fill-current'
        >
      <FaGithub className='inline pr-2 text-2xl'/>

        </svg>
        <p>Copyright &copy; {footeryear} All rights reserved</p>

    </footer>
  )
}

export default Footer