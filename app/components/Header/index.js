import React from 'react';

import girl from './girl.png';
import man from '../../images/man.png';
import v1 from '../../images/v1.svg';
import v2 from '../../images/v2.svg';
import v3 from '../../images/v3.svg';
import layer from '../../images/layer.png';
import ellipse from '../../images/ellipse.svg';
import video from '../../videos/drop.mp4';

function Header() {
  return (
    <div className="main-section row">
      <div className="col-6 left-side flex-colmun">
        <div className="img-left">
          <img
            className="left-img-main"
            src={girl}
            style={{ zIndex: 3, position: 'relative' }}
          />
        </div>

        <div className="description mt-5 pt-md-3 pl-md-4">
          <div className="border-layer" />
          <div className="title-new ml-md-3 ml-md-3" style={{ width: 280 }}>
            Drops put you on the map.
          </div>

          <button
            className="btn-blood-drop-top btn-apply-to-sell"
            onClick={e => {
              window.open(
                'https://2xogu9ck4yx.typeform.com/to/MkUDuFdc',
                '_blank',
              );
            }}
          >
            <div className="position-relative">
              <video loop autoPlay muted>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <span className="text-drop-video">Apply To sell</span>
          </button>

          <div className="para-left mt-2 pt-md-3 ml-md-3">
            Create exclusive product, connect with your audience and grow your
            community, one drop at a time.
          </div>
        </div>
      </div>
      <div className="col-6 right-side flex-colmun ">
        <img className="v-1" src={v1} />
        <img className="v-2" src={v3} />
        <img className="v-3" src={v2} />
        <div className="title-new custom-padding-top" style={{ width: 280 }}>
          Just drop it.
        </div>
        <div className="img-right">
          <img
            className="right-img-main"
            src={man}
            style={{ zIndex: 3, position: 'relative' }}
          />
          <img className="layer" src={layer} />
          <div className="right-text-float">
            It’s commerce as easy as social media.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
