import React from 'react'
import '../css/landing.css';
import spotLogo from '../images/wrapify_logo2.png';
import pfp from '../images/tame.jpg'
import photo1 from '../images/chase.jpg'
import { useState } from 'react';

const LandingPage = () => {
  const [activeButton, setActiveButton] = useState('4 Weeks');

  const handleButtonClick = (timeframe) => {
    setActiveButton(timeframe);
  };

  const getButtonStyle = (timeframe) => {
    return {
      backgroundColor: activeButton === timeframe ? '#10A928' : '#2A2A2A',
      color: activeButton === timeframe ? 'white' : '#10A928',
      width: '6rem',
      borderRadius: '3rem',
      height: '2rem',
    };
  };
  return (
    <div className='fader'>

      <div className='head flex items-center ml-6 sm:ml-6 md:ml-4 lg:ml-20' style={{ position: 'relative', marginTop: '2rem' }} >
        <img src={spotLogo} alt="Logo" className='w-10 ssm:w-16' />
        <span className='ml-2 ssm:text-3xl text-xl text-[#1DB954] font-medium font-semibold'>Wrapify®</span>

        <img src={pfp} alt="Logo" className='w-10 ml-auto' style={{ borderRadius: '100%' }} />
        <button className='ml-4 text-sm mr-4 lg:mr-20 tapper' style={{ backgroundColor: '#2A2A2A', width: '6rem', borderRadius: '2rem', height: '2.5rem' }}>Logout</button>
      </div>

      <div className='flex items-center justify-center' style={{ position: 'relative', marginTop: '6rem', width: '100%' }} >
        <button className='button-85 h-14' style={{ fontWeight: '400' }}>Make My Wrap!</button>
      </div>

      <div className='mt-16 lg:ml-16'>
        <button className='timeframe tapper ml-4 text-sm mr-2' style={getButtonStyle('4 Weeks')} onClick={() => handleButtonClick('4 Weeks')}>4 Weeks</button>
        <button className='timeframe tapper ml-4 text-sm mr-2' style={getButtonStyle('6 Months')} onClick={() => handleButtonClick('6 Months')}>6 Months</button>
        <button className='timeframe tapper ml-4 text-sm mr-2' style={getButtonStyle('All Time')} onClick={() => handleButtonClick('All Time')}>All Time</button>
      </div>




      <div className='mt-10 border-l-4 ml-6 lg:ml-20'>
        <div className='ml-4 text-2xl'>
          Your Top Artists
          <div className='flex flex-row overflow-x-scroll -mx-2 xl:overflow-hidden' style={{ width: '100%' }}>
            <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }}>
              <img src={photo1} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
              <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Chase Atlantic Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum vel suscipit quae perspiciatis? Quibusdam veritatis enim, suscipit placeat ad amet architecto minus mollitia facilis delectus iure culpa, temporibus consequatur tempora necessitatibus! Voluptatum, ullam!</span>
            </div>
            <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }}>
              <img src={photo1} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
              <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Chase Atlantic</span>
            </div>
            <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }}>
              <img src={photo1} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
              <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Chase Atlantic</span>
            </div>
            <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }}>
              <img src={photo1} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
              <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Chase Atlantic</span>
            </div>
            <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }}>
              <img src={photo1} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
              <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Chase Atlantic</span>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 border-l-4 ml-6  lg:ml-20'>
        <div className='ml-4 text-2xl'>
          Your Top Songs
          <div className='flex flex-row overflow-x-scroll -mx-2 xl:overflow-hidden' style={{ width: '100%' }}>
            <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }}>
              <img src={photo1} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
              <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Chase Atlantic</span>
            </div>
            <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }}>
              <img src={photo1} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
              <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Chase Atlantic</span>
            </div>
            <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }}>
              <img src={photo1} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
              <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Chase Atlantic Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam beatae rerum nihil tempore neque ducimus praesentium enim reiciendis, odio velit cumque, voluptatum aliquam iste, ea dignissimos. Corporis architecto dolores esse earum, velit maxime.</span>
            </div>
            <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }}>
              <img src={photo1} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
              <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Chase Atlantic</span>
            </div>
            <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }}>
              <img src={photo1} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
              <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Chase Atlantic</span>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 border-l-4 ml-6  lg:ml-20'>
        <div className='ml-4 text-2xl'>
          Genres
          <div className='flex flex-row overflow-x-scroll -mx-2 xl:overflow-hidden mt-2' style={{ width: '100%' }}>
            <button className='genre ml-1 text-sm' style={{}} disabled>Bollywood Pop Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ab similique magnam ullam sequi, nemo, quos, dolorum eum recusandae esse dolore illo aliquid expedita possimus. Facilis tenetur vero accusamus.</button>
            <button className='genre ml-4 text-sm sm:min-w-fit' style={{}} disabled>Ethereal Hip Hop</button>
            <button className='genre ml-4 text-sm ssm:min-w-fit' style={{}} disabled>Night Phonk</button>
            <button className='genre ml-4 text-sm sm:min-w-fit' style={{}} disabled>Lithuania HQ</button>
            <button className='genre ml-4 text-sm sm:min-w-fit' style={{}} disabled>Japanese Indie Rock</button>

          </div>


        </div>
      </div>




      <div className="flex justify-center items-center h-20 text-xs ssm:text-sm" style={{ fontWeight: '300' }}>
        Made with &nbsp; <img className='w-6' src="https://em-content.zobj.net/source/skype/289/red-heart_2764-fe0f.png" alt="heart" height="1px" /> &nbsp; by&nbsp;<a style={{ fontWeight: '400', textDecoration: 'underline dotted' }} href="https://www.linkedin.com/in/vibhor-sharma64/" target="_blank"> Anish Sharma and Vibhor Sharma </a>
      </div>


    </div>
  )
}

export default LandingPage