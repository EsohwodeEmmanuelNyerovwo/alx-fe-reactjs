import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '10px', borderBottom: '2px solid black', background: 'black', padding: '20px' }}>
            <Link style={{ textDecoration: 'none', fontSize: '16px', fontFamily: 'sans-serif', color: 'white' }} to='/'>Home</Link>
            <Link style={{ textDecoration: 'none', fontSize: '16px', fontFamily: 'sans-serif', color: 'white' }} to='/about'>About</Link>
            <Link style={{ textDecoration: 'none', fontSize: '16px', fontFamily: 'sans-serif', color: 'white' }} to='/services'>Services</Link>
            <Link style={{ textDecoration: 'none', fontSize: '16px', fontFamily: 'sans-serif', color: 'white' }} to='contact'>Contact</Link>
        </nav>
    )
}
export default Navbar