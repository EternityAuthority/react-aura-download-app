import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Counter from 'components/Header/Counter';
import PhoneInput from 'react-phone-input-2';
import borderBg from '../../images/border-bottom.svg';
import bg from '../../images/bg.png';
import icon1 from '../../images/1.png';
import icon3 from '../../images/3.png';
import icon2 from '../../images/2.png';
import icon4 from '../../images/4.png';
import video from '../../videos/video.mp4';
import videoDrop from '../../videos/drop.mp4';
import videoGetApproved from '../../videos/get-approved.mp4';
import videoHowItWork from '../../videos/how-it-work.mp4';
import videoShip from '../../videos/ship.mp4';
import newPic from '../../images/new.png';
import shoes from '../../images/shoes.png';
import shirt from '../../images/shirt.png';
import star from '../../images/star.svg';
import starShadow from '../../images/star-shadow.svg';
import GlobalStyle from '../../global-styles';
import logo from '../../components/Footer/logo.svg';
import 'react-phone-input-2/lib/style.css';

const AppWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 20px;
  background: #0d0d0d;
  flex-direction: column;
`;

export default function App() {
  const [disabled, setDisabled] = useState(false);
  const [submitText, setSubmitText] = useState('Submit');
  const [submitClass, setSubmitClass] = useState('box');
  const [yourName, setYourName] = useState('');
  const [creatorName, setCreatorName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <>
      <AppWrapper>
        <Helmet
          titleTemplate="Aura Collective - Download Aura"
          defaultTitle="Download Aura"
        >
          <meta
            name="description"
            content="Create exclusive product, connect with your audience and grow your community, one drop at a time"
          />
        </Helmet>
      </AppWrapper>

      <div className="top-nav">
        <div className="left-header">
          <a
            href="https://www.auradrops.com"
            underline="none"
            target="_blank"
            className="text-drop-calendar"
          >
            Drop Calendar
          </a>
        </div>
        <div>
          <img src={logo} className="top-logo" alt="top-logo" />
        </div>
        <div className="right-header">
          <a
            href="https://collective.auradrops.com/"
            underline="none"
            target="_blank"
            className="text-drop-calendar"
          >
            The Collective
          </a>
        </div>{' '}
      </div>
      <div id="animation-down-arrow" className="page-down-arrow">
        <a href="#doorstep">
          <span />
        </a>
      </div>
      <div className="vide-header">
        <video
          className="video-inner"
          id="background-video"
          loop
          autoPlay
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>

        <Counter />
        <div className="download-app">
          <button
            type="button"
            className="btn-blood-drop-top"
            onClick={() => {
              window.open(
                'https://testflight.apple.com/join/djiWh2kE',
                '_blank',
              );
            }}
          >
            <div className="position-relative">
              <video loop autoPlay muted>
                <source src={videoDrop} type="video/mp4" />
              </video>
            </div>
            <span className="text-download-app-video">
              Download
              <br />
              the app
            </span>
          </button>
        </div>
      </div>
      <div id="doorstep">
        <AppWrapper>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/features" component={FeaturePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
          <section className="flex-row info-area row pt-5 pb-5 border-bottom container">
            <div className="col-md-6 pl-0">
              <div className="info-left">
                From idea to doorstep. We'll help you make it, drop it, and
                bring it to your fans.
              </div>
            </div>
            <div className="col-md-6 pl-0">
              <div className="info-right">
                Get approved, make a drop, ship, get paid and start vibing.
              </div>
            </div>
          </section>
        </AppWrapper>
      </div>
      <section className="border-section pt-5 mb-3">
        <div className="wave-up-text">Make it</div>
        <div className="wave-up-text">Drop it</div>
        <div className="wave-up-text">Promote it</div>
      </section>
      <section className="border-main ">
        <img src={borderBg} width="100%" alt="borderBackground" />
      </section>
      <section className="wave-box position-relative mt-5 mb-5">
        <div className="position-absolute wave1 wave-texts">Get Approved</div>
        <div className="position-absolute wave2 wave-texts">Make a drop</div>
        <div className="position-absolute wave3 wave-texts">Ship</div>
        <div className="position-absolute wave4 wave-texts">Get paid</div>
        <div className="position-absolute wave5 wave-texts">Start vibing</div>
      </section>
      <section className="gredient1 pt-5 pb-md-5">
        <div className="product-section">
          <div className="row mt-4">
            <div className="custom-description ml-120 pb-md-5">
              After being approved to our invite-only network, you can begin
              making drops for your personalized Space and sharing them with the
              Aura community.
            </div>
            <div className="col-md-7 col-6">
              <div className="row shoes">
                <div className="col-md-6">
                  <img
                    src={shoes}
                    className="shoes-left-img"
                    alt="Shoes Left"
                  />
                </div>
                <div className="col-md-6 product-descriptions p-5">
                  As soon as your application is approved, you can drop directly
                  from your Aura Space.
                  <br />
                  <br />
                  With Aura, you have an end-to-end solution for drop <br />{' '}
                  development, distribution, and discovery. Drops are social and
                  (literally) put you on the map for others to discover your
                  work.
                </div>
              </div>
            </div>
            <div className="col-md-5 col-6 position-relative">
              <div className="right-img-container">
                <img src={shirt} className="img-above" alt="Shirt" />
                <div className="ellips">Drop Your way</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gredient-2 p-md-5 p-2">
        <div className="container">
          <div className="row flex-row ">
            <div className=" col-md-6  mt-md-5 mb-md-5">
              <div className="flex-row cutom-row">
                <div className="icon-box">
                  <img src={icon1} alt="icon1" />
                </div>
                <div className="right-side">
                  <div className="heading">Now</div>
                  <div className="description-3 pt-md-4">
                    Immediate release and purchase.
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-md-6  mt-md-5 mb-md-5">
              <div className="flex-row ">
                <div className="icon-box">
                  <img src={icon2} alt="icon2" />
                </div>
                <div className="right-side">
                  <div className="heading">Raffle</div>
                  <div className="description-3 pt-md-4">
                    Winning entries are randomly selected on an amount, date,
                    and time of your choosing.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row flex-row">
            <div className=" col-md-6  mt-md-5 mb-md-5">
              <div className="flex-row">
                <div className="icon-box">
                  <img src={icon3} alt="icon3" />
                </div>
                <div className="right-side">
                  <div className="heading">Later</div>
                  <div className="description-3 pt-md-4">
                    Collect presales and ship later.{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-md-6 mt-md-5 mb-md-5">
              <div className="flex-row">
                <div className="icon-box">
                  <img src={icon4} alt="icon4" />
                </div>
                <div className="right-side">
                  <div className="heading">Pin</div>
                  <div className="description-3 pt-md-4">
                    Send the Aura community to your IRL drops and events.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="last-description pb-md-5 mt-md-5 mb-md-3 mt-2">
            We ensure drops are dope by carefully selecting which creators are
            admitted to the platform.{' '}
          </div>
        </div>
      </section>
      <section className="hiw position-relative">
        <div className="box-skew">How it works</div>

        <div className="row no-gutters mt-5">
          <div className="col-md-6 pr-0 force-row">
            <div className="description-hiw pt-4">
              For creators, spaces on Aura are your home base. This is where you
              bring your drops to life. Visitors discover drops on the Aura Drop
              calendar and can subscribe to specific creators or upcoming drops
              to receive updates.
            </div>
            <div className="flex-row get-approved-number-div">
              <div className="number-head col-2">1 /</div>
              <div className="col-10 get-approved">
                <div className="hiw-head">Get approved.</div>
                <div className="hiw-sub-head mb-4">
                  We are an invite-only network and ensure high-quality drops
                  from dope people.
                  <br />
                  We’ll give you your code to the Drop App.
                </div>
              </div>
            </div>
            <div className="flex-row device-get-approved-div border-top">
              <div className="col-12">
                <div className="get-approved-div">
                  <video
                    className="video-get-approved"
                    loop
                    autoPlay
                    muted
                    playsInline
                  >
                    <source src={videoGetApproved} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-md-5">
            <div className="flex-row device-how-it-work-div">
              <div className="col-12">
                <div className="how-it-work-div">
                  <video
                    className="video-how-it-work"
                    loop
                    autoPlay
                    muted
                    playsInline
                  >
                    <source src={videoHowItWork} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="flex-row border-top">
              <div className="number-head col-2">2 /</div>
              <div className="col-10 get-approved">
                <div className="hiw-head">Make a drop</div>
                <div className="hiw-sub-head mb-4">
                  Drops are shared with your personalized space and drop
                  calendar. <br />
                  <br /> Visitors can subscribe to people, spaces, upcoming
                  drops, and make purchases. <br />
                  <br />
                  Share your space with brands or single drop link on social
                  media.Grow your audience cross-platforms and form a deeper
                  bond with your audience. <br />
                  <br />
                  We send automated promotions to your customers at no cost to
                  you. <br />
                  <br />
                  Promotions are tiered based on your most loyal customers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative border-top section-ship">
        <div className="row no-gutters">
          <div className="col-md-6 pl-md-5">
            <div className="flex-row ship-div pt-5">
              <div className="number-head col-2">3 /</div>
              <div className="col-10">
                <div className="hiw-head">Ship and get paid.</div>
                <div className="hiw-sub-head mb-4">
                  We are an invite-only network and ensure high-quality drops
                  from dope people.
                  <br />
                  We’ll give you your code to the Drop App.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-md-5">
            <div className="flex-row device-how-it-work-div">
              <div className="col-12">
                <div className="how-it-work-div">
                  <video
                    className="video-how-it-work"
                    loop
                    autoPlay
                    muted
                    playsInline
                  >
                    <source src={videoShip} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-bottom"
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="radial-gredient">
          <div
            style={{
              backgroundImage: `url("${starShadow}")`,
              width: '100%',
              height: '100%',
              margin: '0 auto',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="main-img"
              style={{
                backgroundImage: `url("${star}")`,
                width: '100%',
                height: '100%',
                margin: '0 auto',
                backgroundPosition: 'center',
              }}
            >
              <p className="img-text text-center">Bring your ideas to life.</p>
              <p className="img-text-regular text-center">
                Request an invite to drop on Aura.
              </p>
              <div className="drop-container">
                <button
                  type="button"
                  className="btn-blood-drop-top "
                  onClick={() => {
                    window.open(
                      'https://2xogu9ck4yx.typeform.com/to/MkUDuFdc',
                      '_blank',
                    );
                  }}
                >
                  <div className="position-relative">
                    <video loop autoPlay muted>
                      <source src={videoDrop} type="video/mp4" />
                    </video>
                  </div>
                  <span className="text-drop-video">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppWrapper>
        <section className="input-section flex-row d-flex justify-content-center custom-padding-top row">

          <div className="col-md-6">
            <div className="d-flex left-title-div mr-md-5 pt-md-5 position-relative">
              <p className="left-title">Who’s a creator with an epic story to tell?</p>
              <img className="img-new" src={newPic} alt="New" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="ml-2 ">
              <input
                className="form-control custom-input"
                placeholder="Your Name"
                value={yourName}
                onChange={(val) => {
                  setYourName(val.value)
                }}
              />
              <input
                className="form-control custom-input"
                placeholder="The Creator's Name"
                value={creatorName}
                onChange={(val) => {
                  setCreatorName(val.value)
                }}
              />
              <PhoneInput
                country='us'
                enableAreaCodes={true}
                className=""
                placeholder="The creator's cell #"
                containerClass="my-container-class"
                inputClass="my-input-class"
                containerStyle={{}}
                inputStyle={{
                  background: 'transparent',
                }}
                buttonStyle={{
                  background: 'transparent',
                  border: 'none',
                }}
                value={phone}
                // onChange={(val) => {
                //   setPhone(val.value)
                // }}
              />

              <button className={submitClass} type="button" disabled={disabled} onClick={
                () => {
                  setSubmitText('Thank you! We will let them know how you feel');
                  setDisabled(true);
                  setSubmitClass('box submit-disabled');
                  setTimeout(() => {
                    setDisabled(false);
                    setSubmitText('Submit');
                    setYourName('');
                    setCreatorName('');
                    setPhone(' ');
                    setSubmitClass('box');
                  }, 5000);
                }
              }>

                {submitText}
              </button>
            </div>
          </div>

        </section>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    </>
  );
}
