// const navbar = document.getElementsByClassName('topnav');
const whatWeOfferlist = document.getElementById("what-we-offer");
let footer = document.querySelector("footer");

let offerList = {
    features: [{
            imgSrc: "fas fa-thumbs-up",
            title: "Premium Materials",
            content: "Our robot is made with aluminiun, which will increase duration of our product"
        },
        {
            imgSrc: "fas fa-shipping-fast",
            title: "Fast Shipping",
            content: "We make sure your robot is ready to shipped as soon as it is ordered."
        },
        {
            imgSrc: "fas fa-certificate",
            title: "Quality Insurance",
            content: "No damages or faults"
        }
    ]
};

footerContent = ["Privacy", "Terms", "Contact"];

// function navbarEffect() {
//     navbar.classList.add("sticky");
// }

/*Adds dynamically main content*/
var printThis = "";
for (let i = 0; i < offerList.features.length; i++) {
    printThis += `<div class="offerContent">
                    <div class="mainContentListIcons">
                        <i class="${offerList.features[i].imgSrc}" aria-hidden="true"></i>
                    </div>       
                    <div class="offerDescription">
                        <h3>${offerList.features[i].title}</h3>
                        <p> ${offerList.features[i].content}</p>
                    </div>

                  </div>`;
    whatWeOfferlist.innerHTML = printThis;
}

//It dynamically adds the content to the footer content
const copyrights = document.querySelector(".copyRights");
for (let k = 0; k < footerContent.length; k++) {
    const footerListContent = document.querySelector(".footerListContent");
    footerListContent.innerHTML += `<li>${footerContent[k]}</li>`;
}
copyrights.innerText = "Copyright 2016, Ninja Toy";