import { Fragment, useState } from "react";
import styles from "./index.module.css";
import { Button, Rating, TextField } from "@mui/material";
import TripsLocation from "@/components/layout/tripLocationBox";
import TopDestination from "@/components/layout/TopDestination";
import TripsBlog from "@/components/layout/TripsBlog";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

const tripsBlog = [
  {
    key: "1",
    id: "t1",
    blogImgPath: "/resources/blog/pastTrip1.png",
    blogImgAlt: "dummy blog",
    calendarIcon: "/resources/blog/date.png",
    calendarIconAlt: "date",
    locationIcon: "/resources/blog/location.png",
    locationIconAlt: "location",
    date: "21 Nov 2023",
    location: "Sakardu",
  },
  {
    key: "2",
    id: "t2",
    blogImgPath: "/resources/blog/pastTrip2.png",
    blogImgAlt: "dummy blog",
    calendarIcon: "/resources/blog/date.png",
    calendarIconAlt: "date",
    locationIcon: "/resources/blog/location.png",
    locationIconAlt: "location",
    date: "21 Nov 2023",
    location: "Sakardu",
  },
  {
    key: "3",
    id: "t3",
    blogImgPath: "/resources/blog/pastTrip3.png",
    blogImgAlt: "dummy blog",
    calendarIcon: "/resources/blog/date.png",
    calendarIconAlt: "date",
    locationIcon: "/resources/blog/location.png",
    locationIconAlt: "location",
    date: "21 Nov 2023",
    location: "Sakardu",
  },
  {
    key: "4",
    id: "t4",
    blogImgPath: "/resources/blog/pastTrip4.png",
    blogImgAlt: "dummy blog",
    calendarIcon: "/resources/blog/date.png",
    calendarIconAlt: "date",
    locationIcon: "/resources/blog/location.png",
    locationIconAlt: "location",
    date: "21 Nov 2023",
    location: "Sakardu",
  },
  {
    key: "5",
    id: "t5",
    blogImgPath: "/resources/blog/pastTrip5.png",
    blogImgAlt: "dummy blog",
    calendarIcon: "/resources/blog/date.png",
    calendarIconAlt: "date",
    locationIcon: "/resources/blog/location.png",
    locationIconAlt: "location",
    date: "21 Nov 2023",
    location: "Sakardu",
  },
  {
    key: "6",
    id: "t6",
    blogImgPath: "/resources/blog/pastTrip6.png",
    blogImgAlt: "dummy blog",
    calendarIcon: "/resources/blog/date.png",
    calendarIconAlt: "date",
    locationIcon: "/resources/blog/location.png",
    locationIconAlt: "location",
    date: "21 Nov 2023",
    location: "Sakardu",
  },
];

const topDestinations = [
  {
    key: "1",
    topDestinationImg: "/resources/home/sakardu.png",
    topDestinationAlt: "Sakardu Img",
    topDestinationLocation: "Sakardu",
    topDestinationCountry: "Pakistan",
  },
  {
    key: "2",
    topDestinationImg: "/resources/home/hunza.png",
    topDestinationAlt: "hunza Img",
    topDestinationLocation: "Hunza",
    topDestinationCountry: "Pakistan",
  },
  {
    key: "3",
    topDestinationImg: "/resources/home/swat.png",
    topDestinationAlt: "Sawat Img",
    topDestinationLocation: "Sawat",
    topDestinationCountry: "Pakistan",
  },
];

const allPakages = [
  {
    key: "1",
    tripLocationImg: "/resources/home/tripArea.png",
    tripLocationAlt: "trip Area",
    tripLocation: "Sakardu",
    tripCategory: "Hiking | Cultural",
    tripPrice: "2000",
    daysLeft: "7",
  },
  {
    key: "2",
    tripLocationImg: "/resources/home/tripArea.png",
    tripLocationAlt: "trip Area",
    tripLocation: "Sakardu",
    tripCategory: "Hiking | Cultural",
    tripPrice: "2000",
    daysLeft: "7",
  },
  {
    key: "3",
    tripLocationImg: "/resources/home/tripArea.png",
    tripLocationAlt: "trip Area",
    tripLocation: "Sakardu",
    tripCategory: "Hiking | Cultural",
    tripPrice: "2000",
    daysLeft: "7",
  },
  {
    key: "4",
    tripLocationImg: "/resources/home/tripArea.png",
    tripLocationAlt: "trip Area",
    tripLocation: "Sakardu",
    tripCategory: "Hiking | Cultural",
    tripPrice: "2000",
    daysLeft: "7",
  },
  {
    key: "5",
    tripLocationImg: "/resources/home/tripArea.png",
    tripLocationAlt: "trip Area",
    tripLocation: "Sakardu",
    tripCategory: "Hiking | Cultural",
    tripPrice: "2000",
    daysLeft: "7",
  },
  {
    key: "6",
    tripLocationImg: "/resources/home/tripArea.png",
    tripLocationAlt: "trip Area",
    tripLocation: "Sakardu",
    tripCategory: "Hiking | Cultural",
    tripPrice: "2000",
    daysLeft: "7",
  },
];

export default function Home() {
  const [travelMode, setTravelMode] = useState("road");
  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Exploring The World In <br /> Comfort.
        </h1>

        <div className={styles.bookingCard}>
          <div className={styles.travelModeSelector}>
            <span className={styles.travelByText}>Travel by</span>
            <div className={styles.travelOptions}>
              <button
                className={`${styles.travelOption} ${
                  travelMode === "road" ? styles.active : ""
                }`}
                onClick={() => setTravelMode("road")}
              >
                <span className={styles.radioCircle}></span>
                Road
              </button>
              <button
                className={`${styles.travelOption} ${
                  travelMode === "air" ? styles.active : ""
                } `}
                onClick={() => setTravelMode("air")}
              >
                <span className={styles.radioCircle}></span>
                Air
              </button>
            </div>
          </div>

          <div className={styles.formFields}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>To Go</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Destination"
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Departure date</label>
              <input type="date" className={styles.input} placeholder="Date" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Return date</label>
              <input type="date" className={styles.input} placeholder="Date" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Persons</label>
              <input
                type="text"
                className={styles.input}
                placeholder="No of Persons"
              />
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.customizeButton}>Customize Trip</button>
          </div>
        </div>
      </div>
      <section className={styles.bookTrip}>
        <div className={styles.topDestinations}>
          <h2>Top Destinations</h2>
          <div className={styles.topDestinationBox}>
            {topDestinations.map((top) => (
              <TopDestination
                key={top.key}
                topDestinationImg={top.topDestinationImg}
                topDestinationAlt={top.topDestinationAlt}
                topDestinationLocation={top.topDestinationLocation}
                topDestinationCountry={top.topDestinationCountry}
              />
            ))}
          </div>
          <div className={styles.allBtn}>
            <Button variant="contained">See All</Button>
          </div>
        </div>
      </section>
      {/*  */}
      <section className={styles.rawaanOffer}>
        <h2>What Rawaan Offer</h2>
        <div className={styles.offerBox}>
          <div className={styles.offer1}>
            <div className={styles.offerImg}>
              <Image
                src="/resources/home/tours.png"
                alt="Trips and Tours"
                width={200}
                height={200}
              />
            </div>
            <h2>Trips and Tours</h2>
          </div>

          <div className={styles.offer1}>
            <div className={styles.offerImg}>
              <Image
                src="/resources/home/experiencedTour.png"
                alt="Experienced Tour"
                width={200}
                height={200}
              />
            </div>
            <h2>Experienced Tour Guide</h2>
          </div>
          <div className={styles.offer1}>
            <div className={styles.offerImg}>
              <Image
                src="/resources/home/easyBooking.png"
                alt="Easy Booking"
                width={200}
                height={200}
              />
            </div>
            <h2>Easy Hotel Booking</h2>
          </div>
        </div>
      </section>

      {/* <section className={styles.tourVideo}>
        <div className={styles.videoBox}></div>
      </section> */}
      <section className={styles.testimonials}>
        <div className={styles.pastTripsGallery}>
          <h1 className={styles.pastTripsHeading}>Past Trips</h1>
          <div className={styles.pastTrips}>
            {tripsBlog.map((blog) => (
              <TripsBlog
                key={blog.key}
                id={blog.id}
                blogImgPath={blog.blogImgPath}
                blogImgAlt={blog.blogImgAlt}
                calendarIcon={blog.calendarIcon}
                calendarIconAlt={blog.calendarIconAlt}
                locationIcon={blog.locationIcon}
                locationIconAlt={blog.locationIconAlt}
                date={blog.date}
                location={blog.location}
              />
            ))}
          </div>
          <div className={styles.seeAllButton}>
            <Button variant="contained">See All</Button>
          </div>
        </div>
        <h2>What our Customers say about us</h2>
        <div className={styles.testimonialBox}>
          {/* <div className={styles.testimonial1}>
            <Rating value={5} />
            <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.&quot;
            </p>
            <div className={styles.customerName}>
              <Image
                src="/resources/home/customer.png"
                alt="customer"
                height={50}
                width={50}
              />
              <h3>Name Surname</h3>
            </div>
          </div>
          <div className={styles.testimonial1}>
            <Rating value={5} />
            <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.&quot;
            </p>
            <div className={styles.customerName}>
              <Image
                src="/resources/home/customer.png"
                alt="customer"
                height={50}
                width={50}
              />
              <h3>Name Surname</h3>
            </div>
          </div>
          <div className={styles.testimonial1}>
            <Rating value={5} />
            <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.&quot;
            </p>
            <div className={styles.customerName}>
              <Image
                src="/resources/home/customer.png"
                alt="customer"
                height={50}
                width={50}
              />
              <h3>Name Surname</h3>
            </div>
          </div>
          <div className={styles.testimonial1}>
            <Rating value={5} />
            <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.&quot;
            </p>
            <div className={styles.customerName}>
              <Image
                src="/resources/home/customer.png"
                alt="customer"
                height={50}
                width={50}
              />
              <h3>Name Surname</h3>
            </div>
          </div> */}

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
                slidesPerView: 2,
              },
            }}
            // slidesPerView={1}

            spaceBetween={20}
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
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testimonial1}>
                <Rating value={5} />
                <p>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className={styles.customerName}>
                  <Image
                    src="/resources/home/customer.png"
                    alt="customer"
                    height={50}
                    width={50}
                  />
                  <h3>Name Surname</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testimonial1}>
                <Rating value={5} />
                <p>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className={styles.customerName}>
                  <Image
                    src="/resources/home/customer.png"
                    alt="customer"
                    height={50}
                    width={50}
                  />
                  <h3>Name Surname</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testimonial1}>
                <Rating value={5} />
                <p>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className={styles.customerName}>
                  <Image
                    src="/resources/home/customer.png"
                    alt="customer"
                    height={50}
                    width={50}
                  />
                  <h3>Name Surname</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.testimonial1}>
                <Rating value={5} />
                <p>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className={styles.customerName}>
                  <Image
                    src="/resources/home/customer.png"
                    alt="customer"
                    height={50}
                    width={50}
                  />
                  <h3>Name Surname</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </Fragment>
  );
}
