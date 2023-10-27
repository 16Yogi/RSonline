// News api key = 22e27b08ab2c4a969d8e4e982df67ea8



import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';




export default function News() {
    const options = {
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    }


    // const [data, setData]=useState();

    // fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=22e27b08ab2c4a969d8e4e982df67ea8")
    //   .then(function (response) {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then(function (responseData) {
    //       setData(responseData)
          
    //     //   console.log(newArtics.articles); 
    //     // // Handle the response data here
    //   })
    //   .catch(function (error) {
    //     console.error('Fetch error:', error);
    //   });
     

    // console.log(data)






        // const [data,setData] = useState([]);

        // const datafetch = async ()=>{
        //     const newsdata = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=22e27b08ab2c4a969d8e4e982df67ea8');
        //     const firstdata = await newsdata.json();
        //     setData(firstdata);
            // .then(function (response) {
            //   if (!response.ok) {
            //     throw new Error('Network response was not ok');
            //   }
            //   return response.json();
            // })
            // .then(function (responseData) {
            //   console.log(responseData); // Handle the response data here
            // })
            // .catch(function (error) {
            //   console.error('Fetch error:', error);
            // });

        // }
        // useEffect(()=>{
        //     datafetch();
        // },[]);

        
      
  return (
    <>

        {/* {data.map((topic,index)=>(
            <div key={index}>
                <h1>{topic.articles}</h1>
            </div>
        ))} */}

        
         <section class="py-4">
                        <div class="container">
                            <div class="separator pb-4">
                                <h5 class="mb-0 fw-bold separator-title">Latest News</h5>
                            </div>
                            <div class="product-grid">
                             <OwlCarousel class="latest-news owl-carousel owl-theme" margin={10} items={"4"} loop={true} mouseDrag={true} dots={true} autoplay={true}
                    {...options} nav>
                                    <div class="item">
                                        <div class="card rounded-0 product-card border">
                                            <div class="news-date">
                                                <div class="date-number">24</div>
                                                <div class="date-month">FEB</div>
                                            </div>
                                            <a href="javascript:;">
                                                <img src="./images/blogs/01.png" class="card-img-top border-bottom"
                                                    alt="..."/>
                                            </a>
                                            <div class="card-body">
                                                <div class="news-title">
                                                    <a href="javascript:;">
                                                        <h5 class="mb-3 text-capitalize">Blog Short Title</h5>
                                                    </a>
                                                </div>
                                                <p class="news-content mb-0">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Cras non placerat mi. Etiam non tellus sem.
                                                    Aenean...</p>
                                            </div>
                                            <div class="card-footer border-top bg-transparent">
                                                <a href="javascript:;" class="link-dark">0 Comments</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="card rounded-0 product-card border">
                                            <div class="news-date">
                                                <div class="date-number">24</div>
                                                <div class="date-month">FEB</div>
                                            </div>
                                            <a href="javascript:;">
                                                <img src="./images/blogs/02.png" class="card-img-top border-bottom"
                                                    alt="..."/>
                                            </a>
                                            <div class="card-body">
                                                <div class="news-title">
                                                    <a href="javascript:;">
                                                        <h5 class="mb-3 text-capitalize">Blog Short Title</h5>
                                                    </a>
                                                </div>
                                                <p class="news-content mb-0">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Cras non placerat mi. Etiam non tellus sem.
                                                    Aenean...</p>
                                            </div>
                                            <div class="card-footer border-top bg-transparent">
                                                <a href="javascript:;" class="link-dark">0 Comments</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="card rounded-0 product-card border">
                                            <div class="news-date">
                                                <div class="date-number">24</div>
                                                <div class="date-month">FEB</div>
                                            </div>
                                            <a href="javascript:;">
                                                <img src="./images/blogs/03.png" class="card-img-top border-bottom"
                                                    alt="..."/>
                                            </a>
                                            <div class="card-body">
                                                <div class="news-title">
                                                    <a href="javascript:;">
                                                        <h5 class="mb-3 text-capitalize">Blog Short Title</h5>
                                                    </a>
                                                </div>
                                                <p class="news-content mb-0">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Cras non placerat mi. Etiam non tellus sem.
                                                    Aenean...</p>
                                            </div>
                                            <div class="card-footer border-top bg-transparent">
                                                <a href="javascript:;" class="link-dark">0 Comments</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="card rounded-0 product-card border">
                                            <div class="news-date">
                                                <div class="date-number">24</div>
                                                <div class="date-month">FEB</div>
                                            </div>
                                            <a href="javascript:;">
                                                <img src="./images/blogs/04.png" class="card-img-top border-bottom"
                                                    alt="..."/>
                                            </a>
                                            <div class="card-body">
                                                <div class="news-title">
                                                    <a href="javascript:;">
                                                        <h5 class="mb-3 text-capitalize">Blog Short Title</h5>
                                                    </a>
                                                </div>
                                                <p class="news-content mb-0">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Cras non placerat mi. Etiam non tellus sem.
                                                    Aenean...</p>
                                            </div>
                                            <div class="card-footer border-top bg-transparent">
                                                <a href="javascript:;" class="link-dark">0 Comments</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="card rounded-0 product-card border">
                                            <div class="news-date">
                                                <div class="date-number">24</div>
                                                <div class="date-month">FEB</div>
                                            </div>
                                            <a href="javascript:;">
                                                <img src="./images/blogs/05.png" class="card-img-top border-bottom"
                                                    alt="..."/>
                                            </a>
                                            <div class="card-body">
                                                <div class="news-title">
                                                    <a href="javascript:;">
                                                        <h5 class="mb-3 text-capitalize">Blog Short Title</h5>
                                                    </a>
                                                </div>
                                                <p class="news-content mb-0">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Cras non placerat mi. Etiam non tellus sem.
                                                    Aenean...</p>
                                            </div>
                                            <div class="card-footer border-top bg-transparent">
                                                <a href="javascript:;" class="link-dark">0 Comments</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="card rounded-0 product-card border">
                                            <div class="news-date">
                                                <div class="date-number">24</div>
                                                <div class="date-month">FEB</div>
                                            </div>
                                            <a href="javascript:;">
                                                <img src="./images/blogs/06.png" class="card-img-top border-bottom"
                                                    alt="..."/>
                                            </a>
                                            <div class="card-body">
                                                <div class="news-title">
                                                    <a href="javascript:;">
                                                        <h5 class="mb-3 text-capitalize">Blog Short Title</h5>
                                                    </a>
                                                </div>
                                                <p class="news-content mb-0">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Cras non placerat mi. Etiam non tellus sem.
                                                    Aenean...</p>
                                            </div>
                                            <div class="card-footer border-top bg-transparent">
                                                <a href="javascript:;" class="link-dark">0 Comments</a>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </section>
                    {/* <!--end News--> */}

    </>
  )
}
