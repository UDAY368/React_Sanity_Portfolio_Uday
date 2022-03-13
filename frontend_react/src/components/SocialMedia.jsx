import React from 'react';
import {BsLinkedin,BsGithub} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://www.linkedin.com/in/udaykumar368/" rel="noreferrer" target="_blank"><BsLinkedin /></a>
      </div>
      <div>
        <a href="https://github.com/UDAY368" rel="noreferrer" target="_blank"><BsGithub /></a>
      </div>
      <div>
        <SiGmail />
      </div>
    </div>
  );
}

export default SocialMedia;
