'use client'

import React from 'react'

const Loading = () => {



  
  return (
    
      // Loading Spinner Component
  <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
  {/*} Spin animation is applied only to this div */}
  <div className="animate-spin rounded-full h-[200px] w-[200px] border-t-4 border-blue-500">  </div>
    <div className="fixed animate-bounce">
      {/* This image won't spin because it's outside the spinning div*/}
      <img
        src="/logo.png"  // Replace with your foundation's logo URL
        alt="Foundation Logo"
        className="h-16 w-16"  // No spin effect on the image itself
      />
  
  </div>
</div>

  )
}

export default Loading