import React from 'react';

import { LinkedIn as LinkedInIcon } from '@mui/icons-material';
import { Email as EmailIcon } from '@mui/icons-material';
import { GitHub as GitHubIcon } from '@mui/icons-material';
import { Handyman as HandymanIcon } from '@mui/icons-material';
import { Memory as MemoryIcon } from '@mui/icons-material';
import { Terminal as TerminalIcon } from '@mui/icons-material';

import "../styles/Home.css"

export default function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hello there, my name is Matthew </h2>
        <div className='prompt'> 
          <p> 
            I'm a co-op student at the University of Waterloo with a passion for making great software.
          </p>
          <EmailIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1> Skills </h1>
        <ol className='list'> 
          <li className='item'>
            <h2> Languages <TerminalIcon /> </h2>
            <p> Java, Kotlin, C/C++, Python, Golang, PHP </p>
            <p> JavaScript/TypeScript, HTML, CSS, SQL, Bash </p>
          </li>
          <li className='item'>
            <h2> Technologies <MemoryIcon /> </h2>
            <p> Java Spring/Springboot, PostgreSQL, MS SQL, AWS S3 </p>
            <p className='currently learning'> Currently learning: React.js </p>
          </li>
          <li className='item'>
            <h2> Tools <HandymanIcon /> </h2> 
              <p> Git, Linux, Docker, Jenkins, Postman, pgAdmin, Maven </p>
              <p> VS Code, IntelliJ, Eclipse, Jira, Confluence  </p>
          </li>
        </ol>
      </div>
    </div>
  )
}