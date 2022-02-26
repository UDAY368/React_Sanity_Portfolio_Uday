import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const about = [
  {title: 'Web Designer', description : 'I am a good web developer.',imageUrl : images.about01},
  {title: 'Frontend Development', description : 'I am a good web developer.',imageUrl : images.about02},
  {title: 'Backend Development', description : 'I am a good web developer.',imageUrl : images.about03},
  {title: 'UI/UX designer', description : 'I am a good web developer.',imageUrl : images.about04}
]

const About = () => {
  return (
    <>
      <div className='app__about'>
        <h2 className='head-text'>I know That <span>Good Dev</span> <br />
        Means <span>Good Business</span></h2>
        <div className='app__profiles'>
            {about.map((items,index) => (
              <motion.div
                whileInView={{ opacity : 1}}
                whileHover = {{ scale : 1.1}}
                transition = {{duration : 0.5, type : 'tween'}}
                className = "app__profiles-item"
                key = {items.title+ index}
              >
                <img src={items.imageUrl} alt={items.title} />
                <h2 className='bold-text' style={{marginTop : '20px'}}>{items.title}</h2>
                <p className='p-text' style={{marginTop : '10px'}}>{items.description}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
}

export default About;
