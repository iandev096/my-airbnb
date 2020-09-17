import React, { ReactElement } from 'react'
import './Footer.css';

interface Props {

}

function Footer({ }: Props): ReactElement {
  return (
    <div className='footer'>
      <p>© {new Date().getFullYear()} IanDev AirBNB! No rights reserved - this is a demo!</p>
      <p>Privacy · Terms · Sitemap · Company Details</p>
    </div>
  )
}

export default Footer
