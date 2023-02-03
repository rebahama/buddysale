import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.Footer}>
                  <ul>
                        <li className="list-inline-item"><a href="https://sv-se.facebook.com/" target="_blank"rel=" noopener noreferrer"><i
                              className="fas fa-brands fa-facebook"> </i></a> Facebook</li>
                              
                        <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank" rel=" noopener noreferrer"><i
                              className="fa-brands fa-instagram"> </i></a> Insta</li>
                        <li className="list-inline-item"><a href="https://twitter.com/?lang=sv" target="_blank" rel="noopener noreferrer"><i
                              className="fa-brands fa-twitter"> </i></a> Twiiter</li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i
                              className="fa-brands fa-linkedin"> </i></a> Linkedin</li>
                            
                  </ul>
                  
            </div>
  )
}

export default Footer