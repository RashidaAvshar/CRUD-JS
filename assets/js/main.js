const BASE_URL = "https://fakestoreapi.com"

axios(`${BASE_URL}/products`).then((res)=>{
    res.data.map((item)=>{
        // console.log(item)
        document.querySelector("#data-table-body").innerHTML += `
        <tr>
                        <td data-label="Account">${item.id}</td>
                        <td data-label="Due Date">${item.category}</td>
                        <td data-label="Amount">${item.title.slice(0,13)}...</td>
                        <td data-label="Period">${item.description.slice(0, 20)}...</td>
                        <td data-label="Period"><span id="details" onclick="showDetails(${item.id})">Details</span> / <span id="delete" onclick="deleteProduct(${item.id})">Delete</span></td>
                      </tr>
        `
    });
});

function showDetails(id){
    sessionStorage.setItem("productID", id)
    location.pathname = "assets/detail.html"
};

function deleteProduct(id){
    console.log(id)
    swal({
        title: "Əminsinizmi?",
        text: `Bu ${id} №-li melumat silinecek!`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios({
                method: "delete",
                url: `${BASE_URL}/products/${id}`,
            }).then(res=>{
                if(res.status == 200){
                    swal("Silindi!", {
                        icon: "success",
                      });
                }
            }).catch((error)=>{
                swal("Ugursuz cehd!", `${error.message}`, "error");
        });          
        } else {
            swal("Your imaginary file is safe!");
             } ;
      });

}
