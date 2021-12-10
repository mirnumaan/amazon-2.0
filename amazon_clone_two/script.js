function getItems(){


    db.collection("items").get().then((querySnapshot) => {
        let items =[];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                image:doc.data().image,
                // name:doc.data().name,
                make:doc.data().make,
                rating:doc.data().rating,
                price:doc.data().price

           })
         
        });
        generateItems(items)
       
    });
}
    function generateItems(items){
        let itemsHTML="";
        items.forEach((item) =>{
            let doc = document.createElement("div");
            doc.classList.add("main-product", "mr-5");
            doc.innerHTML=`
            <div class="product-image rounded-lg w-48 h-52  p-4 ">
            <img class= "w-full h-full object-contain"src="${item.image}">
        </div>
        <div class="product-name text-gray-600 font-bold mt-2 test-sm cursor-pointer">
            ${item.name}

        </div>
        <div class="product built text-bold text-green-500 my-1">
            ${item.make}

        </div>
        <div class="product-rating text-black my-1">
            ⭐️⭐️⭐️⭐️⭐️ ${item.rating}

        </div>
        <div class="product-price text-black  my-1">
            $ ${item.price}
        </div>
        <div class="add-to-cart h-8 w-28  text-md rounded  cursor-pointer 
            hover:bg-yellow-600 text-white-500 flex bg-yellow-600 items-center justify-center">
            Add To Cart

        </div>
        `
            itemsHTML +=`
                <div class="main-product" mr-5>
            
                </div>

        
            `
        })
        document.querySelector(".main-section-products").innerHTML= itemsHTML;

    }
    
getItems();