import { Button, Rating } from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

function HomePage() {
  return (
    <Fragment> 
        

 {/* home section starts   */}

<section class="home" id="home">

    <div class="content">
        <h3>healthy Milky.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sed! Qui maxime alias, porro dolorum explicabo inventore officia nam! Ipsa nulla in accusamus cum ad deleniti laudantium assumenda odit a.</p>
        
    </div>

</section>

{/* <!-- home section ends -->

<!-- product section starts  --> */}

<section class="product" id="product">

    <h1 class="heading">featured products</h1>

    <div class="box-container">

        <div class="box">
            <img src="https://th.bing.com/th/id/R.6a066fbb176471bcb0a618b618219afd?rik=geDWuNP%2b2o%2f%2bBQ&pid=ImgRaw&r=0" alt=""/>
            <h3>س</h3>
            <Rating></Rating>
            <div class="price"> <span>$15.10</span> $12.30 </div>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>

        <div class="box">
            <img src="https://th.bing.com/th/id/R.6a066fbb176471bcb0a618b618219afd?rik=geDWuNP%2b2o%2f%2bBQ&pid=ImgRaw&r=0" alt=""/>
            <h3>Milk</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
            </div>
            <div class="price"> <span>$15.10</span> $12.30 </div>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>

        <div class="box">
            <img src="https://www.itloblena.com/wp-content/uploads/2020/08/1B81C177-C068-43CA-B7C8-D9FCEBDDF0F7-768x700.jpg" alt=""/>
            <h3>Milk</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
            </div>
            <div class="price"> <span>$15.10</span> $12.30 </div>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>

        <div class="box">
            <img src="https://www.itloblena.com/wp-content/uploads/2020/08/1B81C177-C068-43CA-B7C8-D9FCEBDDF0F7-768x700.jpg" alt=""/>
            <h3>Milk</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
            </div>
            <div class="price"> <span>$15.10</span> $12.30 </div>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>

        <div class="box">
            <img src="https://www.itloblena.com/wp-content/uploads/2020/08/4B275DC0-F7E8-4AEE-B472-69C729D9FD37.jpeg" alt=""/>
            <h3>Milk</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
            </div>
            <div class="price"> <span>$15.10</span> $12.30 </div>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>

        <div class="box">
            <img src="https://www.itloblena.com/wp-content/uploads/2020/08/4B275DC0-F7E8-4AEE-B472-69C729D9FD37.jpeg" alt=""/>
            <h3>Milk</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
            </div>
            <div class="price"> <span>$15.10</span> $12.30 </div>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>

    </div>

</section>

{/* <!-- product section ends -->

<!-- about section starts  --> */}

<section class="about" id="about">

    <h1 class="heading">about us</h1>

    <div class="row">

        <div class="image">
            <img src="https://i.pinimg.com/originals/d2/b8/f5/d2b8f509aa8f39e8d8d1ade5a78cea04.jpg" alt=""/>
        </div>

        <div class="content">
            <h3>we are</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quod voluptate debitis dolor beatae explicabo, est obcaecati distinctio, mollitia provident nostrum accusamus aspernatur quas, pariatur neque rem voluptas expedita temporibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis ipsam iusto odio omnis illo cum necessitatibus officiis, iure laboriosam!</p>
            <a href="#"><button class="btn">learn more</button></a>
        </div>

    </div>

</section>

{/* <!-- about section ends -->

<!-- service section starts  --> */}

<section class="service" id="service">

    <h1 class="heading">our services</h1>

    <div class="box-container">

        <div class="box">
            <i class="fas fa-apple-alt"></i>
            <h3>organic food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi voluptatem eos nulla iure dolorem porro expedita deserunt at ea.</p>
        </div>

        <div class="box">
            <i class="fas fa-award"></i>
            <h3>high quality</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi voluptatem eos nulla iure dolorem porro expedita deserunt at ea.</p>
        </div>

        <div class="box">
            <i class="fas fa-shipping-fast"></i>
            <h3>fast delivery</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi voluptatem eos nulla iure dolorem porro expedita deserunt at ea.</p>
        </div>

        <div class="box">
            <i class="fas fa-undo"></i>
            <h3>easy returns</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi voluptatem eos nulla iure dolorem porro expedita deserunt at ea.</p>
        </div>

        <div class="box">
            <i class="fas fa-truck"></i>
            <h3>free delivery</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi voluptatem eos nulla iure dolorem porro expedita deserunt at ea.</p>
        </div>

        <div class="box">
            <i class="fas fa-headset"></i>
            <h3>24 x 7 support</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi voluptatem eos nulla iure dolorem porro expedita deserunt at ea.</p>
        </div>
        
    </div>

</section>

{/* <!-- service section ends -->

<!-- contact section starts  --> */}

<section class="contact" id="contact">

    <h1 class="heading">contact us</h1>

    <div class="row">

        <div class="image">
            <img src="https://media.istockphoto.com/photos/contact-us-picture-id533935533?k=6&m=533935533&s=612x612&w=0&h=SjXHekj7TI8QmFH4xzcUkLCiS5vg6_wy1pBEu7Q4Kjc=" alt=""/>
        </div>

        <form action="">

            <div class="inputBox">
                <h3>full name</h3>
                <input type="text" placeholder="enter your name"/>
            </div>

            <div class="inputBox">
                <h3>email</h3>
                <input type="email" placeholder="enter your email"/>
            </div>

            <div class="inputBox">
                <h3>number</h3>
                <input type="number" placeholder="enter your number"/>
            </div>

            <div class="inputBox">
                <h3>message</h3>
                <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
            </div>

            <input type="submit" value="send" class="btn"/>

        </form>

    </div>

</section>

{/* <!-- contact section ends -->

<!-- footer section  --> */}

<section class="footer">

    <div class="box-container">

        <div class="box">
            <img src="images/logo.png" alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores cumque reprehenderit labore dolorem magni itaque, quod velit neque doloremque quidem.</p>
        </div>

        <div class="box">
            <h3>contact details</h3>
            <p> <i class="fas fa-phone"></i> +123-456-7890. </p>
            <p> <i class="fas fa-envelope"></i> example@gmail.com </p>
            <p> <i class="fas fa-map-marker-alt"></i> egypt - 400104. </p>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <a href="#" class="fab fa-youtube"></a>
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
        </div>

    </div>

    <h1 class="credit"> | all rights reserved! </h1>

</section>

{/* <!-- scroll top  --> */}
<a href="#home" class="fas fa-arrow-up" id="scroll-top"></a>





    </Fragment> 
    );
  }
  export default HomePage;