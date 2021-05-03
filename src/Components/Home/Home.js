import React, { useContext, useEffect, useState } from 'react';
import { userCreate } from '../../App';
import Customer from '../CustomerPanel/Customer/Customer';
import Navbar from '../Navbar/Navbar';
import AboutCarry from './AboutCarry/AboutCarry';
import BookCar from './BookCar/BookCar';
import CustomerReview from './CustomerReview/CustomerReview';
import Footer from './Footer/Footer';
import "./Home.css"
import Information from './Information/Information';

const Home = () => {
  const [loggedInUser, setLoggedInUser, addCart, setAddCart] = useContext(userCreate);
  const [bookInfo, setBookInfo] = useState([]);
  useEffect(() => {
    fetch('https://fierce-harbor-56345.herokuapp.com/cars')
      .then(res => res.json())
      .then(data => {
        setBookInfo(data);

      })
  }, [])
  const [reviewInfo, setReviewInfo] = useState([]);
  useEffect(() => {
    fetch('https://fierce-harbor-56345.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => {
        setReviewInfo(data);

      })
  }, [])
  return (
    <div>
      <div className="header-container">
        <Navbar></Navbar>
        <div className="home-container col-md-4 offset-md-1 ">
          <h1 className="text-light">IMPRESSION <br /><span className="text-danger"> MAKE</span> <br /> CUSTOMERS</h1>
          <br />
          <h5 className="text-light">We have dedicated procurement team working around the clock to make sure you always get the best deals...</h5>
          <br />
          <button type="button" class="btn btn-light">Ride Now</button>
        </div>
        <h5 className="carry text-light">Earn car carry points today!
          <a href="">learn more</a>
        </h5>
      </div>
      <div >
        <AboutCarry></AboutCarry>
      </div>
      <div>
        <div className="carry-header">
          <h1  >Book Your Car<br /></h1>
          <p>HAVE A SAFE JOURNEY!</p>
        </div>
        <div className="book-car" >
          {
            bookInfo.map((bookInfo, index) => <BookCar key={index} bookInfo={bookInfo}></BookCar>)
          }

        </div>
      </div>
      <div>
        <div className="carry-header">
          <h1  >Customer Says About Us<br /></h1>
          <p>OUR HAPPY CLIENTS</p>

        </div>
        <div className="book-car">
          {
            reviewInfo.map((reviewInfo, index) => <CustomerReview key={index} reviewInfo={reviewInfo}></CustomerReview>)
          }
        </div>
      </div>
      <div>
        <Information></Information>
      </div>
      <div>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;