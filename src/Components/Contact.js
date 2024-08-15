function Contact(){
    return(
        <>
        <h1 className="heading">Contact</h1>
        <form>
            <div className="conto">
<div class="card" >
  <div class="card-body">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn">Submit</button>
  </div>
  </div>
  </div>
</form>
<div class="card-group">
  <div class="card">
    <img src="https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Free</h5>
      <h4 class="card-text">price:$0 per month</h4>
      <ul className="card-text">
        <li>Pizzas per Month: 1 pizza</li>
        <li>Toppings: Basic toppings only</li>
        <li>Individuals who have minimal pizza needs.</li>
        <li>Customers who want to try out the service without any cost.</li>
      </ul>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Pro</h5>
      <h4 class="card-text">Price: $15 per month</h4>
      <ul className="card-text">
        <li>Pizzas per Month: 5 pizzas
        </li>
        <li>Toppings: Access to all toppings</li>
        <li>Support: Priority email support</li>
        <li>Small families or groups who consume pizzas regularly.</li>
        <li>Customers who want a wider variety of toppings.</li>
        <li>Users who require more responsive support compared to the Free plan.</li>
      </ul>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Enterprise</h5>
      <h4 class="card-text">Price: $29 per month</h4>
      <ul className="card-text">
        <li>Pizzas per Month: Unlimited pizzas</li>
        <li>Toppings: Access to all toppings, including premium toppings</li>
        <li>Support: 24/7 phone support</li>
        <li>Large families or pizza enthusiasts who want unlimited access.</li>
        <li>Businesses or events that require frequent pizza orders.
        </li>
        <li>Customers who need premium toppings and around-the-clock support.</li>
        <li>Premium Toppings: Includes all available toppings plus premium options like truffle oil, prosciutto, gourmet cheeses, etc.</li>
      </ul>
      <p class="card-text"><small class="text-body-secondary">For Legends Only</small></p>
    </div>
  </div>
</div>
        
        </>
    )
}
export default Contact;