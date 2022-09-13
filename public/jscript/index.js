const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themetoggler = document.querySelector(".themeToggler");

menuBtn.addEventListener("click", function(){
    sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", function(){
    sideMenu.style.display = "none";
});

themetoggler.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme-variables");
    themetoggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themetoggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// const Orders = [
//     {
//         productName: 'Miss Cherie Fair'.toUpperCase(),
//         productNumber: "96621",
//         paymentStatus: "Paid",
//         shipping: "Delivered"
//     },
//     {
//     productName: "Oriamo Power Bank".toUpperCase(),
//     productNumber: "969696",
//     paymentStatus: "Due",
//     shipping: "Pending"
// },
// {
//     productName: "Toyota Corolla".toUpperCase(),
//     productNumber: "220021",
//     paymentStatus: "Refunded",
//     shipping: "Declined"
// },
// {
//     productName: "Drone with 4k GPS".toUpperCase(),
//     productNumber: "378336",
//     paymentStatus: "Refunded",
//     shipping: "Delivered"
// },
// {
//     productName: "Nike shoes white colour".toUpperCase(),
//     productNumber: "420212",
//     paymentStatus: "Paid",
//     shipping: "Deiclined"
// }
// ]

// Orders.forEach(function(order){
//     const tr = document.createElement("tr");
//     const trContent = '<td>${order.productName}</td> <td>${order.productNumber}</td> <td>${order.paymentStatus}</td> <td class"${order.shipping === "Declined" ? "danger" : order.shipping === "pending" ? "warning": "primary"}">${order.shipping}</td> <td class="primary">Details</td>';
//     tr.innerHTML = trContent;
//     document.querySelector("table tbody").appendChild(tr);
// });
