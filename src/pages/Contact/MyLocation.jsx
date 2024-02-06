import React from 'react'

const MyLocation = () => {
  return (
    <div className="myLocation">
    <iframe
      // width="100%"
      // height="100%"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      zoomdistance="12"
      title="map"
      scroll="yes"
      src="https://maps.google.com/maps?width=546&amp;height=400&amp;hl=en&amp;q=Victoria, BC&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    ></iframe>
  </div>
  )
}

export default MyLocation