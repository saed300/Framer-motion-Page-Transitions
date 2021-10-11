import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Page1 = () => {

  const variants = {
    initial: {
      x: '-240vh'
    },
    animate: {
      opacity: 1,
      x: '0',
      transition: {
        duration: 1.3
      }
    },
    exit: {
      y: '-100vh',
      transition: {
        type: 'spring',
        duration: '1',
        delay: 0.3
      }
    }
  }


  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className='page page-1'>
        <Link to='/page5'>
          <button className= 'previous-page'>Previous</button>
        </Link>
        <Link to='/page2'>
          <button className='next-page'>Next</button>
        </Link>
        <h1 className='headline'>Page 1</h1>
      </div>
    </motion.div>
  )
}

export default Page1
