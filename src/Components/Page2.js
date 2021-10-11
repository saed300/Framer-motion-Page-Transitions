import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Page2 = () => {

  const variants = {
    initial: {
      opacity: 1,
      y: '-100vh'
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.15
      }
    },
    exit: {
      y: '100vh',
      transition: {
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
      <div className='page page-2'>
        <Link to='/'>
          <button className= 'previous-page'>Previous</button>
        </Link>
        <Link to='/page3'>
          <button className='next-page'>Next</button>
        </Link>
        <h1 className='headline'>Page 2</h1>
      </div>
    </motion.div>

  )
}

export default Page2
