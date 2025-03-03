import { Fragment } from "react";
import styles from "./index.module.css";
import { Button, Rating, TextField } from "@mui/material";
import TopDestination from "@/components/layout/TopDestination";
import TripsBlog from "@/components/layout/TripsBlog";
import Image from "next/image";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

const tripsBlog = [
  {
    key: "1",
    id:"t1",
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
    id:"t2",
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
    id:"t3",
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
    id:"t4",
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
    id:"t5",
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
    id:"t6",
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
  return (
    <Fragment>
      <section className={styles.main}>
        <div className={styles.mainCaption}>
          <h1 className={styles.mainCaptionChild}>Exploring The World In Comfort</h1>
        </div>
        <div className={styles.searchTrip}>
          <div className={styles.searchTripBox}>
            <div className={styles.route}>
              <label className={styles.travel}>Travel by </label>
              <div className={styles.routeOpt}>
                <div>
                  <input type="radio" name="route" id="road" />{" "}
                  <label htmlFor="road">Road</label>
                </div>
                <div>
                  <input type="radio" name="route" id="air" />{" "}
                  <label htmlFor="air">Air</label>
                </div>
              </div>
            </div>
            <div className={styles.inputTrips}>
              <div className={styles.inputLocation}>
                <h2>
                  To Go <LocationOnIcon />
                </h2>
                <TextField
                  label="Destination"
                  variant="filled"
                  className={styles.inputData}
                />
              </div>
              <div className={styles.inputDate}>
                <h2>
                  Departure Date <CalendarMonthIcon />
                </h2>
                <TextField
                  label="Choose location"
                  variant="filled"
                  className={styles.inputData}
                />
              </div>
              <div className={styles.inputDate}>
                <h2>
                  Return Date <CalendarMonthIcon />
                </h2>
                <TextField
                  label="Choose location"
                  variant="filled"
                  className={styles.inputData}
                />
              </div>
              <div className={styles.inputId}>
                <h2>
                  Person <PersonIcon />
                </h2>
                <TextField
                  label="Choose location"
                  variant="filled"
                  className={styles.inputData}
                />
              </div>
            </div>
            <div className={styles.searchButton}>
              <Button variant="contained">Search</Button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.bookTrip}>
        <div className={styles.topDestinations}>
          <h2>Our Destinations</h2>
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
              <img src="/resources/home/tours.png" alt="Trips and Tours" />
            </div>
            <h2>Trips and Tours</h2>
          </div>

          <div className={styles.offer1}>
            <div className={styles.offerImg}>
              <img
                src="/resources/home/experiencedTour.png"
                alt="Experienced Tour"
              />
            </div>
            <h2>Experienced Tour Guide</h2>
          </div>
          <div className={styles.offer1}>
            <div className={styles.offerImg}>
              <img src="/resources/home/easyBooking.png" alt="Easy Booking" />
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
          <div className={styles.testimonial1}>
            <Rating value={5} />
            <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.&quot;
            </p>
            <div className={styles.customerName}>
              <img src="/resources/home/customer.png" />
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
              <img src="/resources/home/customer.png" />
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
              <img src="/resources/home/customer.png" />
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
              <img src="/resources/home/customer.png" />
              <h3>Name Surname</h3>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
