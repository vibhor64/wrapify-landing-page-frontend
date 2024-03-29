  // import { userState } from '@/recoil/userState';
  // import { useEffect } from 'react';
  // import { useNavigate } from 'react-router-dom';
  // import { useRecoilState } from 'recoil';
  import { useState } from 'react';
  import heartSVG from '../images/heart.png'
  import repeatPNG from '../images/repeat.png';
  import backPNG from '../images/reverse.png';
  import pausePNG from '../images/pause.png';
  import nextPNG from '../images/next.png';
  import sharePNG from '../images/share.png';
  import emotionJPG from '../images/emotion.jpg';
  import chaseJPG from '../images/chase.jpg'
  import tameJPG from '../images/tame.jpg'
  import escapeJPG from '../images/escape.jpg'
  import ZJPG from '../images/zombie.jpg'
  import '../css/main.css';
import { useNavigate } from 'react-router-dom';


  // interface User {
  //   display_name?: string;
  //   email?: string;
  //   images?: { url?: string }[];
  //   // Add other properties here if they exist in the `userState`
  // }

  const TopFiveArtMonth = () => {

    const navigate = useNavigate();


    const [filterValues, setFilterValues] = useState({
      invert: Math.random() * 100,
      sepia: Math.random() * 100,
      saturate: Math.random() * 2000,
      hueRotate: Math.random() * 360,
      brightness: 100,
      contrast: Math.random() * 200,
    });

    const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);
  
    const handleButtonClick = () => {
      setHasButtonBeenClicked(true);
      console.log('change');
      setFilterValues({
        invert: Math.random() * 100,
        sepia: Math.random() * 100,
        saturate: Math.random() * 2000,
        hueRotate: Math.random() * 360,
        brightness: 100,
        contrast: Math.random() * 200,
      });
    };

    const filterStyle = {
      filter: `invert(${filterValues.invert}%) sepia(${filterValues.sepia}%) saturate(${filterValues.saturate}%) hue-rotate(${filterValues.hueRotate}deg) brightness(${filterValues.brightness}%) contrast(${filterValues.contrast}%)`,
    };

    // const [user] = useRecoilState(userState);
    // const navigate = useNavigate();

    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     navigate('/secondPage'); // Replace '/third' with the actual route path for Third component
    //   }, 3000); // 3000 milliseconds = 3 seconds

    //   return () => clearTimeout(timeout);
    // }, [navigate]);

    // Check if user exists and has required properties before accessing them
    return (
      <div className='super-div py-20'>

        <div className='pager'>

          <div className='fader w-full pt-0 h-20 flex justify-end flex-col items-center text-white' style={{ fontSize: '1.5rem', textAlign: 'center' }}>
          <a> <img className='icons press mr-10' src={sharePNG} style={{ height: '25px', alignSelf: 'end', position: 'absolute', top: '2rem', right: '0' }} alt="Share" /> </a>
            <p>You top 5 artists this month are definitely strange! What have you been upto…</p>
          </div>

          <div className='limiter genre p-6 flex justify-center items-center text-white' style={{position: 'relative'}}>
            <ul className='list-decimal pl-12 border-l-2 border-white ml-20' style={{ maxWidth: '20rem', maxHeight: '291px', position: 'relative', height:'291px'}}>
              <div className='imagePlace' style={{ backgroundImage: `url(${emotionJPG})`, height:'4.2rem'}}> </div>
              <li>&nbsp;Chase Atlantic</li>
              {/* <p className='artist'>&nbsp; After Oceans</p> */}
              <div className='imagePlace' style={{ backgroundImage: `url(${chaseJPG})`, top: '4.2rem'}}> </div>
              <li> &nbsp;The Weeknd</li>
              {/* <p className='artist'>&nbsp; Daniel Allan, Lyrah Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum, aperiam corporis beatae libero vero inventore expedita totam doloremque odit accusamus tempora modi necessitatibus molestias laboriosam ad. Dolorum, tempore nesciunt.</p> */}
              <div className='imagePlace' style={{ backgroundImage: `url(${tameJPG})`, top: '7.7rem'}}> </div>
              <li>&nbsp;Cafune</li>
              {/* <p className='artist'>&nbsp; New Navy</p> */}
              <div className='imagePlace' style={{ backgroundImage: `url(${escapeJPG})`, top: '11.2rem'}}> </div>
              <li>&nbsp;Darci</li>
              {/* <p className='artist'>&nbsp; Drvmmer, Maelle</p> */}
              <div className='imagePlace' style={{ backgroundImage: `url(${ZJPG})`, top: '14.7rem'}}> </div>
              <li>&nbsp;Drake</li>
              {/* <p className='artist'>&nbsp; The Cranberries</p> */}
              <p className='artist' style={{visibility: 'hidden'}}>&nbsp; Daniel Allan, Lyrah Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum, aperiam corporis beatae libero vero inventore expedita totam doloremque odit accusamus tempora modi necessitatibus molestias laboriosam ad. Dolorum, tempore nesciunt.</p>

            </ul>
          </div>

          <div className='wrapper' style={{ marginTop: '1rem' }}>
            <div className='flex justify-center items-center p-10 ' style={{ paddingTop: '1.5rem' }}>
            <a onClick={handleButtonClick} style={hasButtonBeenClicked ? filterStyle : {}}  ><img src={heartSVG} alt="Like" className='icons heart press w-10 icons w-6' style={{ minWidth: '1.5rem'}} /> </a>
              <div className='fader text-white' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '20rem' }}>
                <p style={{ fontSize: '1.3em', textAlign: 'center', width: '20rem' }}>Top 5 Artists of The Month!</p>
                <p className='limiter' style={{ textAlign: 'center', fontSize: '0.8em', marginTop: '0.34em' }}>Vibhor Sharma</p>
              </div>
              <img src={repeatPNG} alt="Repeat" className='icons w-5 ' />
            </div>


            <div className='grid fader justify-center items-center'>
              {/* <input type="range" min="1" max="100" value="50" className='slider' /> */}
              <input type="range" min="1" max="100" value="26" className='slider' style={{   background: 'linear-gradient(to right, #ffffff 2%, #B287D4 26%)', right: '0.9rem'}}/>

              {/* <input type="range" min="1" max="100" value="50" className='slider2' /> */}
            </div>
          </div>

          {/* <div className='flex justify-center items-center h-10'>
          <svg width="256px" height="256px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e71313" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#f01919" stroke-width="0.24000000000000005"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ff00ae" stroke-width="0.24000000000000005" stroke-linecap="round" stroke-linejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ff00ae" stroke-width="0.24000000000000005" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div> */}


          <div className='flex justify-center items-start my-12 z-10'>
            <div className='flex justify-center items-center' >
            <button className='press' onClick={()=>navigate('/third')}>
            <a className='press' > <img className='icons' src={backPNG} style={{ height: '25px', marginRight: '3rem' }} alt="" /></a>
            </button>
              <img className='icons' src={pausePNG} style={{ height: '40px' }} alt="" />
              <button className='press' onClick={()=>navigate('/fifth')}>
                <a> <img className='icons' src={nextPNG} style={{ height: '25px', marginLeft: '3rem' }} alt="" /></a>
                </button>
              {/* <div className="circle"></div> */}
            </div>
          </div>
        </div>


      </div>

    );
  };

  export default TopFiveArtMonth;



