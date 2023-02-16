const BASE_URL = "https://fakestoreapi.com";

let id = sessionStorage.getItem("productID");
console.log(id);

axios(`${BASE_URL}/products/${id}`).then((res)=>{
    console.log(res.data);

    const {image} =res.data;
    const {price} = res.data;
    const {title} =res.data;
    const {description}= res.data;
    const {category} = res.data;
    const {id} =res.data;

    document.querySelector(".card-wrapper").innerHTML = `
    <div class="card">
    <div class="top-card">
      <img src="../image/golden-star.jpg" class="logo" />
      <div class="top-card-text">
        <h1>${title.slice(0, 10)}...</h1>
        <p>
          ${description.slice(0, 15)}...
        </p>
        <div class="shoes">
          <img src="${image}" class="shoe-1" />
        </div>
      </div>
    </div>
    <div class="bottom-card">
      <h1>${title.slice(0,10)}</h1>
      <div class="badge">New</div>
      <h3>${category}</h3>
      <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <div class="size">
        <h4>ID</h4>
        <div class="sizes">
        #${id}
        </div>
      </div>
      <div class="color">
        <h4>Color</h4>
        <div class="colors">
          <div class="color-1"></div>
          <div class="color-2"></div>
        </div>
      </div>
      <div class="price">
        <span>USD</span>
        <span>${price}</span>
      </div>
    </div>
  </div>`
});
