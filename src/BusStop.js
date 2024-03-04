import React from 'react';
import './busstop.css';
import {useState, useRef,useEffect} from 'react';



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








function BusStop({ stopName, isNearest,isHidden,isArrived,stopCode,arrivalTime,prevDistance,count}) {
 





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








 const [ref,height,margin] = useComponentHeight();


const html_3 =(
  <div className="multi-stop--holder" ref={ref} style={{marginTop:prevDistance/10,"zIndex":(count==0?3:1)}}>
       
        <div className="bus-stop--marker" ref={elementRef} ></div>      
       
       
     
        <div className="bus-stop" style={topPosition<150?{display:"none"}:{}}>
            <div className="bus-stop--text-holder">    
              <div className="bus-stop--text stop-name">{stopName} {stopCode}</div>
              <div className={isNearest?'bus-stop--text is-nearest-stop':'bus-stop--text-hidden'}>Nearest Bus Stop </div>
               <div className={isArrived?'bus-stop--text-hidden':'bus-stop--text'}>Expected at: {arrivalTime} {count}</div>
               <div className={isArrived?'bus-stop--text  time-arrival':'bus-stop--text-hidden'}>Arrived at: {arrivalTime}</div>    
          </div>
        </div>
       
       
        <div className="bus-stop--minimized" style={topPosition<150?{}:{display:"none"}}>
          <div className="bus-stop--text-holder">    
          <div className="bus-stop--text stop-name">{count==0?` ${count} stops away from you`:stopName}</div>      </div>
        </div>
    
  </div>
);


return html_3;

}

export default BusStop;

