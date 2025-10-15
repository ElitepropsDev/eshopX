import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styles from '../../styles/styles'
import EventCard from "./EventCard";

const Events = () => {
  const {allEvents,isLoading} = useSelector((state) => state.events);  
   
  return (
    <div>
     {
      !isLoading && (
        <div className={`${styles.section}`}>
      <div className={`${styles.section}`}>
          <div className="mt-12 md:mt-10 mb-0 md:mb-10">
            <div className="-mt-9 md:mt-0 -mb-3 md:mb-0">
              <div className={`${styles.heading} md:ml-[-65px]`}>
                <h1 className="text-[16px] md:text-[26px]">Popular Events</h1>
              </div>
            </div>
          </div>
        </div>

      <div className="w-full grid">
         {
          allEvents.length !== 0 && (
            <EventCard data={allEvents && allEvents[0]} />
          )
         }
         <h4>{
           allEvents?.length === 0 && (
            'No Events have!'
           )
          }

         </h4>
      </div>
     
    </div>
      )
     }
  </div>
  )
}

export default Events