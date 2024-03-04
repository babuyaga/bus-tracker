import React from 'react';
import {useState,useRef,useEffect} from 'react';
import BusStop from './BusStop';
import './BusTracker.css'; // Make sure to create this CSS file
import BusIcon from './icons/bus';



function BusTracker() {
  // Example bus stops
  const busStops = [{stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:true,stopCode:"451",arrivalTime:"",prevDist:1000},
  {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:true,prevDist:500},
  {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:false,prevDist:800},
  {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:false,prevDist:1700},
  {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:true,prevDist:1500},
  {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:false,prevDist:1600},
  {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:false,prevDist:3700},
  {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:true,prevDist:2500},
  {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:false,prevDist:1300},
  {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:false,prevDist:1700},
                  ];






                  const [topPosition, setTopPosition] = useState(0);
                  // Ref to attach to the component for measuring its position
                  const elementRef = useRef(null);
                
                  useEffect(() => {
                    const handleScroll = () => {
                      if (elementRef.current) {
                        const rect = elementRef.current.getBoundingClientRect();
                        // Update state with the top position relative to the viewport
                        setTopPosition(rect.top);
                      }
                    };
                
                    // Attach scroll listener to window
                    window.addEventListener('scroll', handleScroll);
                
                    // Initial check in case the component is not at the top on load
                    handleScroll();
                
                    // Cleanup by removing event listener
                    return () => window.removeEventListener('scroll', handleScroll);
                  }, []); // Empty dependency array ensures this runs once on mount
















                  
  return (
    <div className="bus-tracker--container">
      <div className="bus-holder">
            <div className="bus-icon--holder" ref={elementRef} style={{top:"20%"}}><BusIcon/></div> {/* You can replace this with an actual image */}
            <div className="bus-icon--holder--sticky" style={topPosition<95?{top:"90px",position:"sticky",visibility:"visible"}:{visibility:"hidden"}}><BusIcon/></div>
      </div>
      
      <div className="bus-route-holder">
        {/* <span className="test--text-holder">{topPosition}</span> */}
           {busStops.map((stop, index) => (
          <BusStop key={index} count={index} stopName={stop.stopName} isArrived={stop.isArrived} prevDistance={stop.prevDist} />
        ))}
      </div>
    </div>
  );
}

export default BusTracker;
