import React from 'react';

import Wrapper from './Wrapper';
  import linkedin from './linkedin.svg';
import twitter from './twitter.svg';
import logo from './logo.svg';
import globe from './globe.svg';

function Footer() {
  return (
    <Wrapper style={{border: 'none'}}>
    
      <section className='flex-row space-between row'>
          <div className='col-lg-5 col-md-6 col-sm-12'>
            <div className='border-top-1 flex-row p-1 pt-4 pb-4 space-between vertical-center '>
              <img src={logo} className='logo-bottom'/>
              <span className='footer-text'>
                Built with 🖤 in L.A.
              </span>
              
            </div>
          </div>
          <div className='col-lg-5 col-md-6 col-sm-12 p-0 pl-3'>
            <div className='border-top-1 flex-row p-1 pt-md-4 pb-md-4 space-between vertical-center  w-100 space-between mobile-border'>
              <div className='flex-row gap-1 col-lg-8 col-sm-10 vertical-center pl-0 pr-2'>
                <img src={globe} className='bottom-globe'/>
                <span className='text-white footer-text-right'>
                  Drops are social and increase positive word-of-mouth buzz for your brand
                </span>
              </div>
              
              <div className='flex-row col-2 col-sm-2 p-0'>
                <img src={twitter} className='bottom-icons'/>
                <img src={linkedin} className='bottom-icons'/>
              </div>
              
            </div>
          </div>
      </section>

    </Wrapper>
  );
}

export default Footer;
