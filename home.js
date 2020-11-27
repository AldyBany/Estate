const template = document.createElement('template')

template.innerHTML = `
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            
        }

        h2{
           color: #FF9B54;
        }
        a{
            text-decoration: none;
        }

        .btn{
            padding: 1.2em 1em;
            border: 1.5px solid  #FF9B54;
            border-radius: .5em;
            color: #FF9B54;
            font-weight: 600;
            transition: .3s;
        }
        .btn:hover{
            background: #FF9B54;
            color: #fbf9f9;
        }

        box-icon{
            color: #FF9B54;
        }

        header{
            height: 100vh;
            position: relative;
        }

        header .bar{
            position: absolute;
            bottom: 0;
            right: 0;
            height: 100px;
            width: 350px;
            background:  #474350;
            color: #FF9B54;

        }
        
        header .container{
            width: 100%;
            margin: 0;
        }
        header .carousel{
            height: 100vh;
        }

        header .carousel section{
            display: grid;
            grid-template-columns: 35% 65%;
            
        }

        header .banner-details{
            background: #474350;
            padding: 3.5rem 3rem;
            
        }

        .banner-details h1{
            font-size: 2.5em;
            color: #fbf9f9;
            margin: 2rem 0 3rem;
        }
        .banner-details .location-pointe{
            font-size: 1.5em;
            color: #FF9B54;;
        }
        .banner-details p{
            font-size: 1.2em;
            line-height: 1.4;
            margin: 2rem 0 1rem;
            color: #fbf9f9;
            font-weight: 500;
        }
        .banner-details .icons{
            display: flex;
            justify-content: space-between;
            padding: 2rem 5rem 0 0;
        }

        .banner-details .icons {
            color: #FF9B54;
            font-weight: 500;
        }

        .img-one{
            background: url("./images/pexels-pixabay-164522.jpg");
            background-size: cover;
            background-position: center;
        }

        .img-two{
            background: url("./images/pexels-pixabay-209296.jpg");
            background-size: cover;
            background-position: center;
        }

        .img-three{
            background: url("./images/pexels-pixabay-259751.jpg");
            background-size: cover;
            background-position: center;
        }

        .img-four{
            background: url("./images/pexels-pixasquare-1115804.jpg");
            background-size: cover;
            background-position: center;
        }

        .box {
            display: inline-block;
            width: 400px;
            height: 300px;
            background-color: red;
            margin: 1.5rem;
        }
       
       
        .serviceTitle{
            text-align: center;
            margin: 0 6rem;
            color: #474350;
            padding: 3rem 8rem;
            font-size: 1.35em; 
            font-weight: 500;
        }

        .services-card{
            margin: 3rem 6rem 5rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            column-gap: 60px;
        }
        

        .service-card{
            text-align: center;
        }

        .services-card p{
            font-size: 1.1em;
            margin-top: 1rem;
            margin-bottom: 3rem;
            font-weight: 500;
        }

        .properties{
            margin: 0 6rem;
            color: #474350;
            font-size: 1.25em; 
        }

        .select{
            width: 150px;
        }

        .properties .content{
            padding: 4em 0;
            text-align: center;
        }
        
        .middle{
            margin: 0 1.8rem;
        }


        .card-overview {
            max-width: 390px;
          }
        
          .card-overview small {
            color: var(--sl-color-gray-50);
          }
        
          .card-overview [slot="footer"] {
            display: flex; 
            justify-content: space-between; 
            align-items: center;
          }


          .location{
              margin: 4rem 6rem;
              display: grid;
              grid-template-columns: repeat(3,1fr);
              grid-template-rows: repeat(2, 300px);
              grid-gap: 25px;
              color: #474350;
              font-size: 1.25em; 
          }
          .location > div{
              height: 300px;
              display: flex;
              justify-content: center;
              align-items: center;
          }
          .location .one{
              background: url("https://images.unsplash.com/photo-1566413031084-8ead294caec1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60");
              background-size: cover;
          }

          .location .two{
            background: url("https://images.unsplash.com/photo-1543261534-09e5f83a86c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60");
            background-size: cover;
        }

        .location .three{
            background: url("https://images.unsplash.com/photo-1544092683-c0c9ebb368e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60");

            background-size: cover;
            // background-position: center;
            background-repeat: no-repeat;
        }

        .location .four{
            background: url("https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60");
            background-size: cover;
        }

          .story{
              display: grid;
              grid-template-columns: repeat(2,1fr);
              column-gap: 20px;
              margin: 3em 6rem 4em;
              
          }

          .story p{
              margin-top: .8rem;
              margin-bottom: 3rem;
          }

          .story .paragraph{
              text-align: center;
              
              padding: 3em 0;
              color: #474350;
              font-size: 1.26em;
          }

          .story-img{
              position: relative;
              border: 1px solid;
              
          }

          
          .container{
            width: 70%;
            margin: 10px auto;
          }
          
          .carousel{
            border: 1px solid #ccc;
            height: 350px;
            position: relative;
            overflow: hidden;
          }
          .slider{
            height: 100%;
            display: flex;
            width: 400%;
          /*   border: 1px solid red; */
            transition: all .4s;
           
          }
          .slider section{
            flex-basis: 100%;
            
          }
          
          .controls .arrow{
            position: absolute;
            top: 50%;
            cursor: pointer;
          }
          ion-icon{
            font-size: 25px;
          }
          .controls .right{
            right: 10px; 
          }
          .controls .left{
            left: 10px;
          }

        
      

            .offer{
                display: grid;
                grid-template-columns: repeat(3,1fr);
                grid-template-rows: repeat(2, min-content);
                background: #FF9B54;
                color: #474350; 
                font-size: 1.25em; 
            }

            .offer h2{
                color: #474350; 
                margin: 1.1rem 0 .8rem;  
            }

            .offer .text-box{
                padding: 2rem 4rem;
            }

            .offer .img-box img{
                width: 100%;
            }
            

            .one{
                grid-column: 1/2;
              }
            .two{
                grid-column: 2/-1;
              }
            .three{
                grid-column: 1/3;
              }
            .four{
              grid-column: 3/-1;
              }

            .blog{
                margin: 0 6rem;
                padding: 4.6em 3.5em;
                text-align: center;
                color: #474350;
                font-size: 1.2em;
            }

            .blog p{
                margin: 2rem 0 4rem;
            }

    </style>

    <header>
        <div class="container">
            <div class="carousel">
                <div class="slider" id="slider">
                    <section id="one">
                        <div class="banner-details">
                            <div class="detail-btn"></div>
                            <h1>MEDIUM-SIZED<br> DREAM HOME</h1>
                            <a href="#" class="location-pointe">Pointe-Noire</a>
                            <h2 class="price">$850,000</h2>
                            <p>Buying a home is rarely as simple as making an offer and paying that offer out. Negotiations can go back and forth for weeks before</p>
                            <p>eller and buyer are both satisfied. The vehicle for this </p>
                            <div class="icons">
                                <span>
                                    <box-icon name='expand' color='#474350' size='45px'></box-icon><br>
                                    1400 sqft
                                </span>
                        
                                <span>
                                    <box-icon type='solid' name='bed'  color='#fbf9f9' size='45px'></box-icon><br>
                                    3 beds
                                </span>
            
                                <span>
                                    <box-icon type='solid' name='bath'  color='#fbf9f9' size='45px'></box-icon><br>
                                    2 baths
                                </span>

                            </div>
                        </div>
                        <div class="img-one"></div>
                    </section>

                    <section id="two">
                        <div class="banner-details">
                            <div class="detail-btn"></div>
                            <h1>MEDIUM-SIZED <br> DREAM HOME</h1>
                            <a href="#" class="location-pointe">Pointe-Noire</a>
                            <h2 class="price">$850,000</h2>
                            <p>Buying a home is rarely as simple as making an offer and paying that offer out. Negotiations can go back and forth for weeks before</p>
                            <p>eller and buyer are both satisfied. The vehicle for this </p>
                            <div class="icons">
                                <span>
                                    <box-icon name='expand' color='#fbf9f9' size='45px'></box-icon><br>
                                    1400 sqft
                                </span>
                        
                                <span>
                                    <box-icon type='solid' name='bed'  color='#fbf9f9' size='45px'></box-icon><br>
                                    3 beds
                                </span>
            
                                <span>
                                    <box-icon type='solid' name='bath'  color='#fbf9f9' size='45px'></box-icon><br>
                                    2 baths
                                </span>

                            </div>
                        </div>
                        <div class="img-two">two</div>
                    </section>

                    <section id="three">
                        <div class="banner-details">
                            <div class="detail-btn"></div>
                            <h1>MEDIUM-SIZED <br> DREAM HOME</h1>
                            <a href="#" class="location-pointe">Pointe-Noire</a>
                            <h2 class="price">$850,000</h2>
                            <p>Buying a home is rarely as simple as making an offer and paying that offer out. Negotiations can go back and forth for weeks before</p>
                            <p>eller and buyer are both satisfied. The vehicle for this </p>
                            <div class="icons">
                                <span>
                                    <box-icon name='expand' color='#fbf9f9' size='45px'></box-icon><br>
                                    1400 sqft
                                </span>
                        
                                <span>
                                    <box-icon type='solid' name='bed'  color='#fbf9f9' size='45px'></box-icon><br>
                                    3 beds
                                </span>
            
                                <span>
                                    <box-icon type='solid' name='bath'  color='#fbf9f9' size='45px'></box-icon><br>
                                    2 baths
                                </span>

                            </div>
                        </div>
                        <div class="img-three"></div>
                    </section>

                    <section id="four">
                        <div class="banner-details">
                            <div class="detail-btn"></div>
                            <h1>MEDIUM-SIZED <br> DREAM HOME</h1>
                            <a href="#" class="location-pointe">Pointe-Noire</a>
                            <h2 class="price">$850,000</h2>
                            <p>Buying a home is rarely as simple as making an offer and paying that offer out. Negotiations can go back and forth for weeks before</p>
                            <p>eller and buyer are both satisfied. The vehicle for this </p>
                            <div class="icons">
                                <span>
                                    <box-icon name='expand' color='#fbf9f9' size='45px'></box-icon><br>
                                    1400 sqft
                                </span>
                        
                                <span>
                                    <box-icon type='solid' name='bed'  color='#fbf9f9' size='45px'></box-icon><br>
                                    3 beds
                                </span>
            
                                <span>
                                    <box-icon type='solid' name='bath'  color='#fbf9f9' size='45px'></box-icon><br>
                                    2 baths
                                </span>

                            </div>
                        </div>
                        <div class="img-four">two</div>
                    </section>
                </div>
                
                <div class="controls">
                    <span class="arrow left banner-control">
                        <ion-icon name="chevron-back-circle"></ion-icon>
                        </span>
                    <span class="arrow right banner-control"><ion-icon name="chevron-forward-circle"></ion-icon></span>
                </div>
            </div>
        </div>
        
        <div class="bar"><h1>Contact us</h1></div>
    </header>

    <section class="serviceTitle">
        <h2>REal Estate</h2>
        <p>RealEstate WordPress theme has all the flexibility you need to provide the best user experience. Simple to use theme options to help you create a unique and modern real estate and residence websites</p>
    </section>

    <section class="services-card">
        <div class="service-card">
            <div><box-icon name='home' type='solid' color='#ff9b54' size='70px'></box-icon></div>
            <h2>Real Homes</h2>
            <p>Firstly, we offer real homes for the modern world, so you can have everything you need.</p>
            <a href="#" class="btn">Read More</a>
        </div>

        <div class="service-card">
            <div><box-icon name='factory' type='solid' color='#ff9b54' size='70px'></box-icon></div>
            <h2>Unique Properties</h2>
            <p>Secundly, our properties are alwasys in the best locations because we have a special list.</p>
            <a href="#services" class="btn">Read More</a>
        </div>

        <div class="service-card">
            <div><box-icon name='building-house' type='solid' color='#ff9b54' size='70px' ></box-icon></div>
            <h2>Real Estate</h2>
            <p>Finally, we’re in the business since 1990 so you can count on our experience!</p>
            <a href="#home" class="btn">Read More</a>
        </div>

    </section>

    <section class="properties">
        <sl-select class="select" placeholder="Recent one">
            <sl-menu-item value="option-1">Option 1</sl-menu-item>
            <sl-menu-item value="option-2">Option 2</sl-menu-item>
            <sl-menu-item value="option-3">Option 3</sl-menu-item>
        </sl-select>

        <div class="content">
            <sl-card class="card-overview">
                <img 
                slot="image" 
                src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" 
                alt="A kitten sits patiently between a terracotta pot and decorative grasses."
                >
            
                <strong>Mittens</strong><br>
                5007 San Pedro St, Los Angeles <box-icon name='bookmark-heart' color='#ff9b54' size='32px'></box-icon><br>CA USA<br>
                <small>$ 570, 000.00</small>
            
                <div slot="footer">
                    <span>
                        <box-icon name='expand' color='#474350'></box-icon><br>
                        1400 sqft
                    </span>
            
                    <span>
                        <box-icon type='solid' name='bed'  color='#474350'></box-icon><br>
                        3 beds
                    </span>

                    <span>
                        <box-icon type='solid' name='bath'  color='#474350'></box-icon><br>
                        2 baths
                    </span>
                </div>
            </sl-card>

            <sl-card class="card-overview middle">
                <img 
                slot="image" 
                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" 
                alt="A kitten sits patiently between a terracotta pot and decorative grasses."
                >
        
                <strong>Mittens</strong><br>
                5007 San Pedro St, Los Angeles <box-icon name='bookmark-heart' color='#ff9b54' size='32px'></box-icon><br>CA USA<br>
                <small>$ 570, 000.00</small>
        
                <div slot="footer">
                    <span>
                        <box-icon name='expand'   color='#474350'></box-icon><br>
                        1400 sqft
                    </span>
            
                    <span>
                        <box-icon type='solid' name='bed'   color='#474350'></box-icon><br>
                        3 beds
                    </span>

                    <span>
                        <box-icon type='solid' name='bath'   color='#474350'></box-icon><br>
                        2 baths
                    </span>
                </div>
            </sl-card>

            <sl-card class="card-overview">
                <img 
                slot="image" 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" 
                alt="A kitten sits patiently between a terracotta pot and decorative grasses."
                >
        
                <strong>Mittens</strong><br>
                    5007 San Pedro St, Los Angeles <box-icon name='bookmark-heart' color='#ff9b54' size='32px'></box-icon><br>CA USA<br>
                <small>$ 570, 000.00</small>
            
                <div slot="footer">
                    <span>
                        <box-icon name='expand'   color='#474350'></box-icon><br>
                        1400 sqft
                    </span>

                    <span>
                        <box-icon type='solid' name='bed'   color='#474350'></box-icon><br>
                        3 beds
                    </span>

                    <span>
                        <box-icon type='solid' name='bath'   color='#474350'></box-icon><br>
                        2 baths
                    </span>
                    
                </div>
            </sl-card>
        </div>
  
    </section>

    <section class="location">
          <div class="one"><h2>Chicago</h2></div>
          <div class="two"><h2>Chicago</h2></div>
          <div class="three"><h2>Chicago</h2></div>
          <div class="four"><h2>Chicago</h2></div>
    </section>

    <section class="story">
          <div class="paragraph">
            <p>REAL ESTATE HIGHLIGHTS</p>
            <h2>Real Estate theme show homes!</h2>
            <p>We really love what we do, there’s nothing that makes me happier than helping people finding their homes, the opportunity to help others that, just like us, started from the bottom, but want to grow and succeed! This is our Real Estate job!</p>
            <a href="#" class="btn">Our Story</a>
          </div>

         
          <div class="container">
            <div class="carousel">
                <div class="slider" id="slider">
                    <section id="one">section 1</section>
                    <section id="two">section 2</section>
                    <section id="three">section 3</section>
                    <section id="four">section 4</section>
                </div>
                
                <div class="controls">
                    <span class="arrow left">
                        <ion-icon name="chevron-back-circle"></ion-icon>
                        </span>
                    <span class="arrow right"><ion-icon name="chevron-forward-circle"></ion-icon></span>
                </div>
            </div>
           </div>
          
    </section>

    <section class="offer">
          <div class="text-box one">
            <p>THE BEGINNING</p>
            <h2>RealEstateWordPress theme  started with a spark.</h2>
            <p>Now we’re the biggest firm of the country, however, all has started with a small idea of help, and we still look for it.</p>
          </div>
          <div class="img-box two">
            <img src="./images/3-Step-Plan-for-Finding-and-Buying-Your-Next-Home-RealEstate-WordPress-Theme.jpg"/>
          </div>
          <div class="img-box three">
            <img src="images/real-estate-bg-2.jpg"/>
          </div>
          <div class="text-box four">
            <p>WHO WE´RE?</p>
            <h2>A  family RealEstate WordPress theme firm.</h2>
            <p>This little firm it’s my biggest price, with it I did start the biggest real estate company you’ve ever seem.</p>
          </div>
    </section>

    <section class="blog">
          <div class="text-box">
            <h2>RealEstate WordPress Theme Latest News.</h2>
            <p>RealEstate WordPress theme has all the flexibility you need so you can build the best blog and news articles.</p>
          </div>

          <div class="card-box">
            <sl-card class="card-overview">
                <img 
                    slot="image" 
                    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" 
                    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
                >
            
                <strong>Mittens</strong><br>
                Chances are you’ve considered buying a home — maybe you even attended a couple of open houses and ran the numbers. But once you get serious, there are a few points you need to consider before signing a contract and heading to your closing. Buying a home takes more time...br>
                <small>6 weeks old</small>
            
                <div slot="footer">
                    <sl-button type="primary" pill>More Info</sl-button>
                    <sl-rating></sl-rating>
                </div>
            </sl-card>

            <sl-card class="card-overview">
                <img 
                    slot="image" 
                    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" 
                    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
                >
            
                <strong>Mittens</strong><br>
                Buying a home is rarely as simple as making an offer and paying that offer out. Negotiations can go back and forth for weeks before the seller and buyer are both satisfied. The vehicle for this negotiation is the counteroffer — a vital and complex rejection and counter to an...<br>
                
            
                <div slot="footer">
                    <sl-button type="primary" pill>More Info</sl-button>
                    <sl-rating></sl-rating>
                </div>
            </sl-card>

            <sl-card class="card-overview">
                <img 
                    slot="image" 
                    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" 
                    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
                >
            
                <strong>Mittens</strong><br>
                Ready for a kitchen renovation? Anxious for a bathroom remodel? The easy part is knowing your goal for home remodeling — whether you’re trying to keep up with your growing family, add office space, or increase your home’s value. But figuring out how to plan a home renovation that doesn’t...<br>
                <small>6 weeks old</small>
            
                <div slot="footer">
                    <sl-button type="primary" pill>More Info</sl-button>
                    <sl-rating></sl-rating>
                </div>
            </sl-card>
          </div>
    </section>
`
// #C84630
// #474350
// #DD6031

class homeContent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }



    call() {
        const slider = this.shadowRoot.querySelector('.slider');
        const leftArrow = this.shadowRoot.querySelector('.left');
        const rightArrow = this.shadowRoot.querySelector('.right');

        var section = 0;

        rightArrow.addEventListener('click', fire);

        function fire() {
            section = (section < 3) ? section + 1 : 0;
            slider.style.transform = 'translate(' + (section) * -25 + '%)';
        }

        leftArrow.addEventListener('click', function tire() {
            section = (section > 0) ? section - 1 : 3;
            slider.style.transform = 'translate(' + (section) * -25 + '%)';
        })

        setInterval(fire, 10000);


    }

    connectedCallback() {
        this.call()

    }
}

customElements.define('home-content', homeContent)