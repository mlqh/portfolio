import React from 'react';
import { Email as EmailIcon } from '@mui/icons-material';
import { GitHub as GithubIcon } from '@mui/icons-material';
import { LinkedIn as LinkedInIcon } from '@mui/icons-material';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia flex justify-center'>
        <EmailIcon />
        <LinkedInIcon />
        <GithubIcon />
      </div>
      <p> &copy; 2023 mhao.com </p>
    </div>
  );
}
