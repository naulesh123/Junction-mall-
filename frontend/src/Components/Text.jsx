import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';


const GalleryIcon = () => {
    const iconStyle = { width: '24px', height: '24px', color: '#64748B' }; // blue-gray-500 color

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <BriefcaseIcon style={iconStyle} />
      <p>Careers</p>
    </div>
  );
};

export default GalleryIcon;
