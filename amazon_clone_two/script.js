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
           
        `
        let addToCartEl = document.createElement("div")
        addToCartEl.classList.add("hover:bg-yellow-600", "cursor-pointer", "product-add", "h-8", "w-28", "rounded", "bg-yellow-500", "text-white", "text-md", "flex", "justify-center", "items-center");
        addToCartEl.innerText="Add To Cart";
        doc.appendChild(addToCartEl);
        document.querySelector(".main-sectiom-products").appendChild(doc);
        })
        document.querySelector(".main-section-products").innerHTML= itemsHTML;

    }
    
getItems();