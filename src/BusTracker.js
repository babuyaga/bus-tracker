import React from 'react';
import {useState,useRef,useEffect} from 'react';
import BusStop from './BusStop';
import './BusTracker.css'; // Make sure to create this CSS file
import BusIcon from './icons/bus';

function useComponentHeight() {
  const ref= useRef(null);

  const [height, setHeight] = useState(0);
  const [margin, setMargin] = useState({ top: 0, right: 0, bottom: 0, left: 0 });







useEffect(()=>{
  
    
  if (ref.current) {
    const styles = window.getComputedStyle(ref.current); // Step 2: Get computed styles
    const marginTop = styles.marginTop;
    const marginRight = styles.marginRight;
    const marginBottom = styles.marginBottom;
    const marginLeft = styles.marginLeft;
    
    // Step 3: Access specific margin properties
    setMargin({
      top: marginTop,
      right: marginRight,
      bottom: marginBottom,
      left: marginLeft,
    });
  }
  
 
  
  
  setHeight(ref.current.clientHeight);
 
}, [ref.current]);

return [ref,height,margin];


}



function BusTracker() {
  // // Example bus stops
  // const busStop = [{stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:true,stopCode:"451",arrivalTime:"",prevDist:1000},
  // {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:true,prevDist:500},
  // {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:false,prevDist:800},
  // {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:false,prevDist:1700},
  // {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:true,prevDist:1500},
  // {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:false,prevDist:1600},
  // {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:false,prevDist:3700},
  // {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:true,prevDist:2500},
  // {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:false,prevDist:1300},
  // {stopName:'Brant Ave. & St Paul Ave',isNearest:false,isHidden:false,isArrived:false,prevDist:1700},
  //                 ];


  const [ref,height,margin] = useComponentHeight();

const busStops = [ {distanceFromPrevious: "", distanceFromStart: "", percentage: "", stopName: "TRANSIT TERMINAL"},
                    {distanceFromPrevious: 0.5940669813, distanceFromStart: 0.5940669813, percentage: "6.24%", stopName: "KING ST & COLBORNE ST"},
                    {distanceFromPrevious: 0.4404623959, distanceFromStart: 1.034529377, percentage: "10.87%", stopName: "BECKETT BLDG."},
                    {distanceFromPrevious: 0.2112228173, distanceFromStart: 1.245752194, percentage: "13.08%", stopName: "COLBORNE & ECHO"},
                    {distanceFromPrevious: 0.3800292021, distanceFromStart: 1.625781397, percentage: "17.08%", stopName: "158 PARK AVE."},
                    {distanceFromPrevious: 0.2544265565, distanceFromStart: 1.880207953, percentage: "19.75%", stopName: "120 PARK AVE."},
                    {distanceFromPrevious: 0.5541744718, distanceFromStart: 2.434382425, percentage: "25.57%", stopName: "PARK AVE. & MURRAY ST."},
                    {distanceFromPrevious: 0.3380422026, distanceFromStart: 2.772424627, percentage: "29.12%", stopName: "GREENWICH & MOHAWK"},
                    {distanceFromPrevious: 0.3190413854, distanceFromStart: 3.091466013, percentage: "32.47%", stopName: "SUPERIOR ST. & CAYUGA ST."},
                    {distanceFromPrevious: 0.2024583483, distanceFromStart: 3.293924361, percentage: "34.60%", stopName: "SUPERIOR ST. & EDWARD ST."},
                    {distanceFromPrevious: 0.2660411659, distanceFromStart: 3.559965527, percentage: "37.39%", stopName: "SUPERIOR & WALTER"},
                    {distanceFromPrevious: 0.3520743173, distanceFromStart: 3.912039844, percentage: "41.09%", stopName: "LIDA ST. & MINTERN AVE."},
                    {distanceFromPrevious: 0.2409184473, distanceFromStart: 4.152958292, percentage: "43.62%", stopName: "LIDA ST & TENTH AVE"},
                    {distanceFromPrevious: 0.246344508, distanceFromStart: 4.3993028, percentage: "46.21%", stopName: "9th and Division"},
                    {distanceFromPrevious: 0.2003649978, distanceFromStart: 4.599667797, percentage: "48.31%", stopName: "WHITEHEAD ST. & NINTH AVE."},
                    {distanceFromPrevious: 0.2373209357, distanceFromStart: 4.836988733, percentage: "50.80%", stopName: "NINTH AVE & ERIE AVE"},
                    {distanceFromPrevious: 0.2838916515, distanceFromStart: 5.120880385, percentage: "53.78%", stopName: "BALDWIN AVE. & ERIE AVE."},
                    {distanceFromPrevious: 0.3199606076, distanceFromStart: 5.440840992, percentage: "57.15%", stopName: "BALDWIN AVE. & ONTARIO ST."},
                    {distanceFromPrevious: 0.2190635746, distanceFromStart: 5.659904567, percentage: "59.45%", stopName: "115 BALDWIN AVE"},
                    {distanceFromPrevious: 0.2046281698, distanceFromStart: 5.864532737, percentage: "61.60%", stopName: "BALDWIN AVE. & RIVER RD"},
                    {distanceFromPrevious: 0.3508597403, distanceFromStart: 6.215392477, percentage: "65.28%", stopName: "MARLENE & PONTIAC"},
                    {distanceFromPrevious: 0.1957955073, distanceFromStart: 6.411187984, percentage: "67.34%", stopName: "PONTIAC ST. & GLADSTONE AVE."},
                    {distanceFromPrevious: 0.3339612654, distanceFromStart: 6.74514925, percentage: "70.84%", stopName: "ONTARIO ST. & GLADSTONE AVE."},
                    {distanceFromPrevious: 0.2907392606, distanceFromStart: 7.03588851, percentage: "73.90%", stopName: "ONTARIO ST. & CAYUGA ST."},
                    {distanceFromPrevious: 0.2616475551, distanceFromStart: 7.297536065, percentage: "76.65%", stopName: "ONTARIO ST. & EAGLE AVE."},
                    {distanceFromPrevious: 0.5934330396, distanceFromStart: 7.890969105, percentage: "82.88%", stopName: "BRANTFORD COMMONS SOUTH"},
                    {distanceFromPrevious: 0.8993617162, distanceFromStart: 8.790330821, percentage: "92.33%", stopName: "WEST ST. & DARLING ST."},
                    {distanceFromPrevious: 0.7307086823, distanceFromStart: 9.521039503, percentage: "100.00%", stopName: "TRANSIT TERMINAL"}
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
      <div className="bus-holder" ref={ref}>
            <div className="bus-icon--holder" ref={elementRef} style={{top:(0.0624*(height-120))}}><BusIcon/></div> {/* You can replace this with an actual image */}
            <div className="bus-icon--holder--sticky" style={topPosition<75?{top:"90px",position:"sticky",visibility:"visible"}:{visibility:"hidden"}}><BusIcon/></div>
      </div>
      
      <div className="bus-route-holder">
        {/* <span className="test--text-holder">{topPosition}</span> */}
           {busStops.map((stop, index) => (
          <BusStop key={index} count={index} stopName={stop.stopName} isArrived={false} prevDistance={stop.distanceFromPrevious} />
        ))}
      </div>
    </div>
  );
}

export default BusTracker;
