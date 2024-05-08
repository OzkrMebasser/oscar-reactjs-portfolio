import React from 'react'

const MyLocation = () => {
  return (
    <div className="myLocation">
   <iframe
        title="map"
        src="https://maps.google.com/maps?width=546&amp;height=400&amp;hl=en&amp;q=Victoria, BC&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="400"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        scrolling="yes"
      ></iframe>
 
  </div>
  )
}

export default MyLocation