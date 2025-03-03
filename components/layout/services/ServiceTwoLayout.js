// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import 'swiper/css/navigation';

// import styles from './ServiceTwoLayout.module.css';

// // import required modules
// import { FreeMode, Pagination, Navigation } from "swiper/modules";
// import Image from "next/image";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         freeMode={true}
//         navigation={true}
//         pagination={{
//           clickable: true
//         }}
//         modules={[Navigation, FreeMode, Pagination]}
//         className={`mySwiper ${styles.mySwiper}`}
//       >
//         <SwiperSlide className={styles.swiperSlide}>
//           <Image src='/resources/services/img1.png' height={100} width={100} alt="hotel img" />
//         </SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}>Slide 4</SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}>Slide 5</SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}>Slide 6</SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}>Slide 7</SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}>Slide 8</SwiperSlide>
//         <SwiperSlide className={styles.swiperSlide}>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./ServiceTwoLayout.module.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Button } from "@mui/material";


// 
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ModalHotel from "./ModalHotel";
// 

const hotels = [
  {
    id:'1',
    hotel:"Hotel 1"
  },
  {
    id:'2',
    hotel:"Hotel 2"
  },
  {
    id:'3',
    hotel:"Hotel 3"
  },
  {
    id:'4',
    hotel:"Hotel 4"
  },
]

export default function App() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [open, setOpen] = React.useState(false);
  const [hotelData,setHotelData]=React.useState(null);
  
  const handleOpen = (id) => {
    let hotelInfo;
    setOpen(true);
    hotelInfo = hotels.find((ht) => id === ht.id);
    // console.log(hotelData);
    // hotel=hotelData?.hotel;
   setHotelData(hotelInfo)
  }
  console.log(hotelData);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Swiper
        breakpoints={{
          // Customize the number of slides per view for different screen widths
          320: {
            slidesPerView: 1, // 1 slide per view for screens less than 320px wide
          },
          640: {
            slidesPerView: 1, // 2 slides per view for screens between 320px and 640px wide
          },
          768: {
            slidesPerView: 2, // 3 slides per view for screens between 640px and 768px wide
          },
          1133: {
            slidesPerView: 3,
          },
        }}
        // slidesPerView={1}

        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className={`mySwiper ${styles.mySwiper}`}
      >
          <SwiperSlide className={styles.swiperSlide} onClick={() => handleOpen('1')}>
            <div className={styles.swiperSlideInner}>
              <Image
                src="/resources/services/hotel.jpg"
                alt="hotel img"
                height={400}
                width={500}
              />
              <h2>Hotel name 1</h2>
              <p>Adress</p>
              <div className={styles.swiperButton}>
                <Button variant="contained">200 pkr</Button>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}  onClick={() => handleOpen('2')}>
          <div className={styles.swiperSlideInner}>
            <Image
              src="/resources/services/hotel.jpg"
              alt="hotel img"
              height={400}
              width={500}
            />
            <h2>Hotel name 2</h2>
            <p>Adress</p>
            <div className={styles.swiperButton}>
              <Button variant="contained">200 pkr</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} onClick={() => handleOpen('3')}>
          <div className={styles.swiperSlideInner}>
            <Image
              src="/resources/services/hotel.jpg"
              alt="hotel img"
              height={400}
              width={500}
            />
            <h2>Hotel name 3</h2>
            <p>Adress</p>
            <div className={styles.swiperButton}>
              <Button variant="contained">200 pkr</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}  onClick={() => handleOpen('4')}>
          <div className={styles.swiperSlideInner}>
            <Image
              src="/resources/services/hotel.jpg"
              alt="hotel img"
              height={400}
              width={500}
            />
            <h2>Hotel name 4</h2>
            <p>Adress</p>
            <div className={styles.swiperButton}>
              <Button variant="contained">200 pkr</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ModalHotel />
          </Box>
        </Fade>
      </Modal>
      
    </>
  );
}


