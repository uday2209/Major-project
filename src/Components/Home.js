function Home(){
    return(
        <>

        <h1 className="heading">WELCOME TO PIZZA_PALACE</h1>
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
           <div class="col-10 col-sm-8 col-lg-6">
             <img className="pizza" src="https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
           </div>
           <div class="col-lg-6">
             <h1 id="res" class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Discover Deliciousness at Our PIZZA_PALACE!</h1>
             <p class="lead">Welcome to PIZZA_PALACE, where we believe that every slice should tell a story of quality, flavor, and tradition. Our journey began with a simple yet profound love for pizza—a love that drives us to create the perfect combination of ingredients, cooking methods, and service that you’ll experience in every bite. Whether you are a pizza connoisseur or someone who enjoys a good slice occasionally, our pizzeria is designed to cater to your taste and elevate your pizza experience.</p>
             <p class="lead">Our menu is crafted to offer something for everyone, from classic Margherita pizzas that showcase the simplicity of fresh tomatoes, mozzarella, and basil to more adventurous creations like our signature BBQ Chicken Pizza, loaded with tender grilled chicken, smoky barbecue sauce, and a blend of cheeses.
             </p>
             <div class="d-grid gap-2 d-md-flex justify-content-md-start">
             </div>
           </div>
         </div>
         <div class="row py-5"></div>

         <div class="col-lg-6 image-column">
  <img src="https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
</div>
<div class="col-10 col-sm-8 col-lg-6     text-column">
  <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Experience Pizza Perfection with Every Bite</h1>
  <p class="lead">At our Pizza Store, we believe that a great pizza is more than just a meal; it’s an experience. Our passion for crafting the perfect pizza shines through in every slice. Using only the freshest ingredients and time-honored recipes, we create pizzas that are bursting with flavor and quality. Whether you’re craving a classic Margherita, a spicy pepperoni, or a unique gourmet creation, our menu has something to satisfy every palate.
But our commitment goes beyond just delicious pizza. We offer a warm, inviting atmosphere where you can enjoy a meal with family and friends or order online for a quick and convenient delivery right to your door. With a focus on exceptional service and a dedication to excellence, we strive to make every visit memorable. Join us at Pizza Store and discover why we are the go-to destination for pizza lovers everywhere.</p>
  <div class="d-grid gap-2 d-md-flex justify-content-md-start">
  </div>
</div>


<div class="px-4 pt-5 my-5 text-center border-bottom">
  <h1 class="display-4 fw-bold text-body-emphasis">Indulge in Culinary Excellence at Pizza Store</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">  Discover the art of pizza-making at its finest with Pizza Store, where every bite tells a story of passion, tradition, and innovation. Our dedication to crafting extraordinary pizzas begins with sourcing the highest-quality ingredients, from vine-ripened tomatoes to artisanal cheeses and premium meats. Each pizza is a masterpiece, meticulously prepared to ensure a perfect balance of flavors and textures that will delight your taste buds.

But our commitment to excellence extends beyond our menu. We offer an inviting ambiance that makes every meal a special occasion, whether you're dining with loved ones or enjoying a quiet moment alone. Our online ordering system ensures that you can savor our gourmet creations from the comfort of your home, with prompt delivery that brings the essence of our kitchen straight to your doorstep.

At Pizza Store, we're not just serving pizza; we're crafting experiences. Our friendly staff is dedicated to providing impeccable service, making every visit or order memorable. Experience the pinnacle of pizza perfection and join us in celebrating the flavors that make life delicious.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
    </div>
  </div>
  <div class="overflow-hidden" >
    <div class="container px-5">
      <img src="https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="700" height="500" loading="lazy"/>
    </div>
  </div>
</div>

        {/* carousel */}
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" width='300' height='500' alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" width='300' height='500' alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" width='300' height='500' alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}

export default Home;