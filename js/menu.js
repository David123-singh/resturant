let MenuData = [
            {
                menu_id : "order1",
                menu_name : "Stay at Home Family Special (Veg)",
                menu_price : 899,
                menu_discount : 30,
                menu_description : "2 Med Pizzas(Farmhouse + Peppy Paneer) + 2(Garlic Bread + Pepsi)",
                menu_img : "images/order1.webp" 
            },
            {
                menu_id : "order2",
                menu_name : "Pasta Pizza Family Treat (Veg)",
                menu_price : 499,
                menu_discount : 30,
                menu_description : "Med Creamy Tomato Pasta Pizza + Garlic Bread + Pepsi",
                menu_img : "images/order2.webp" 
            },
            {
                menu_id : "order3",
                menu_name : "Everyday Value 2 Med Veg Deluxe Combo",
                menu_price : 769,
                menu_discount : 30,
                menu_description : "2 Med Pizzas (Farmhouse + Veg Extravaganza)",
                menu_img : "images/order3.webp" 
            },
            {
                menu_id : "order4",
                menu_name : "Chicken Dominator",
                menu_price : 305,
                menu_discount : 30,
                menu_description : "Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers",
                menu_img : "images/order4.webp" 
            },
            {
                menu_id : "order5",
                menu_name : "Ultimate cheese burst Premium Combo (Veg)",
                menu_price : 745,
                menu_discount : 30,
                menu_description : "Medium Veg Extravaganza Cheese Burst Pizza + Choco Lava Cake + Garlic Bread",
                menu_img : "images/order5.webp" 
            },
            {
                menu_id : "order6",
                menu_name : "Veg Extravaganza",
                menu_price : 235,
                menu_discount : 30,
                menu_description : "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
                menu_img : "images/banner-2.jpg" 
            }
        ]; 
        
const orderFetch = () => {
            let orderIOtem = '';
            let orderList = document.querySelector(".order-item-list");
           for(let i = 0; i < MenuData.length; i++){
              let orderLoop = MenuData[i];
              orderIOtem  += `
                    <div class="resturant-order-item" id="${orderLoop.menu_id}">
                    <div class="resturant-order-left">
                        <div class="resturant-order-imgSec">
                            <img src="${orderLoop.menu_img}" alt="order img" class="order-img">
                        </div>
                        <div class="resturant-order-detail">
                            <div class="order-detail-heading">${orderLoop.menu_name}
                            </div>
                            <div class="order-menu-amount">₹${orderLoop.menu_price}</div>
                            <p class="order-detail-txt">${orderLoop.menu_description} </p>
                        </div>
                    </div>
                    <div class="resturant-order-right">
                        <button class="addOrderBtn" onclick="addOrder(this)">
                            Add <span class="mdi mdi-plus"></span>
                        </button>
                        <div class="resturant-order-counter">
                            <button class="order-count-min mdi mdi-minus decreaseNumber"></button>
                            <input type="text" class="order-count-input" value="0">
                            <button class="order-count-plus mdi mdi-plus increaseNumber"></button>
                        </div>
                    </div>
                </div>
              `;           
           }
           orderList.innerHTML = orderIOtem;
}

orderFetch();
let menuAllData = [];
let orderArr = [];
let orderBottomSheet = document.querySelector(".resturant-total-botto-sheet");
const addOrder = (btn) => {
    let orderItem = btn.parentElement.parentElement;
    let OrderInput  = orderItem.querySelector(".order-count-input");
    OrderInput.value = 1;
    if(OrderInput.value == 1){
       orderItem.querySelector(".addOrderBtn").style.display = "none";
       let orderCounter =  orderItem.querySelector(".resturant-order-counter");
       orderCounter.classList.add("active");
       orderBottomSheet.classList.add("active");
    }
    let orderItemId = btn.parentElement.parentElement.getAttribute("id");
    let MenuArr = MenuData.find(menuArr => menuArr.menu_id === orderItemId);
    // menuAllData.push(MenuArr);
   counterFun(MenuArr, orderItem, OrderInput);
   
}
     
const counterFun = (MenuArr, orderItem, OrderInput) => {
    let decreaseNum = orderItem.querySelector(".decreaseNumber"); 
    let increaseNum = orderItem.querySelector(".increaseNumber");
    let orderCounter =  orderItem.querySelector(".resturant-order-counter");
    decreaseNum.addEventListener("click", function(){
             OrderInput.value = parseInt(OrderInput.value) - 1;
              
             if(OrderInput.value == 0){
                orderCounter.classList.remove("active");
                orderItem.querySelector(".addOrderBtn").style.display = "block";
                orderBottomSheet.classList.remove("active");
             }
             let orderCounterData = OrderInput.value;
             counterDataFun(orderCounterData, orderArr);
    })
    increaseNum.addEventListener("click", function(){
        OrderInput.value = parseInt(OrderInput.value) + 1;  
        let orderCounterData = OrderInput.value;
        counterDataFun(orderCounterData, MenuArr);
    })
}
     
const counterDataFun = (orderCounterData, MenuArr) => {
               MenuArr.MenuItem = orderCounterData;
               orderArr.push(MenuArr);
              
}



