import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ThumbnailGenerator from "react-thumbnail-generator";
 const Videoslider=()=>{
  const [thumbnail, setThumbnail] = useState(null)
  const handleThumbnailGenerated = (thumbnail) => {
    setThumbnail(thumbnail);
  };
    return (
        <Carousel showThumbs={false}>
          <div className="videosplay">
          {thumbnail && <img src={thumbnail} alt="Video Thumbnail" />}
            <video controls  style={{ width: '100%', height: '400px' }}>
              <source src="https://drive.google.com/uc?id=140zbSqLeHN-N7x_8w-0krkwHVpbeRKoM" type="video/mp4" />
            </video>
            <ThumbnailGenerator
        videoUrl="https://drive.google.com/uc?id=140zbSqLeHN-N7x_8w-0krkwHVpbeRKoM"
        thumbnailHandler={handleThumbnailGenerated}
      />
          </div>
          <div className="videosplay">

              {thumbnail && <img src={thumbnail} alt="Video Thumbnail" />}
            <video controls style={{ width: '100%', height: '400px' }}>
              <source src="https://drive.google.com/uc?id=10J3qUsHsQrP-AFOf9XHCtu0U3pji0yFs" type="video/mp4" />
            </video>
            <ThumbnailGenerator
        videoUrl="https://drive.google.com/uc?id=10J3qUsHsQrP-AFOf9XHCtu0U3pji0yFsD"
        thumbnailHandler={handleThumbnailGenerated}
      />
          </div>
          <div className="videosplay">
              {thumbnail && <img src={thumbnail} alt="Video Thumbnail" />}
            <video controls style={{ width: '100%', height: '400px' }}>
              <source src="https://drive.google.com/uc?id=1JVUv81wgIx80-qeVCSSxQifpxRDT2P1c" type="video/mp4" />
            </video>
            <ThumbnailGenerator
        videoUrl="https://drive.google.com/uc?id=1JVUv81wgIx80-qeVCSSxQifpxRDT2P1c"
        thumbnailHandler={handleThumbnailGenerated}
      />
          </div>
          <div className="videosplay">
              {thumbnail && <img src={thumbnail} alt="Video Thumbnail" />}
            <video controls style={{ width: '100%', height: '400px' }}>
              <source src="https://drive.google.com/uc?id=1p942IRS4B1ujXPDubv6URw4bnVd1nlr3" type="video/mp4" />
            </video>
            <ThumbnailGenerator
        videoUrl="https://drive.google.com/uc?id=1p942IRS4B1ujXPDubv6URw4bnVd1nlr3"
        thumbnailHandler={handleThumbnailGenerated}
      />
          </div>
          <div className="videosplay">
              {thumbnail && <img src={thumbnail} alt="Video Thumbnail" />}
            <video controls style={{ width: '100%', height: '400px' }}>
              <source src="https://drive.google.com/uc?id=1BJQMICsbRqBDltBMt3bfBlH0OmtMtzvG" type="video/mp4" />
            </video>
            <ThumbnailGenerator
        videoUrl="https://drive.google.com/uc?id=1BJQMICsbRqBDltBMt3bfBlH0OmtMtzvG"
        thumbnailHandler={handleThumbnailGenerated}
      />
          </div>
          
        </Carousel>
      );
 };
 export default Videoslider;