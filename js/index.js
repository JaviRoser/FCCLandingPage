// const navbar = document.getElementsByClassName('topnav');
const whatWeOfferlist = document.getElementById('what-we-offer');
let footer = document.querySelector('footer');

offerList = [
    'Premiun Materials',
    'Fast Shipping',
    'Quality Insurance'
]

offerListContent = ["Our robot is made with aluminiun, which will increase duration of our product",
    "We make sure your robot is ready to shipped as soon as it is ordered.",
    "No damages or faults"
]

footerContent = [
    'Privacy',
    'Terms',
    'Contact'
]

function navbarEffect() {
    navbar.classList.add('sticky');
}
var printThis = ""
for (let i = 0; i < offerList.length; i++) {
    printThis += `<h3> ${offerList[i]}  </h3>`;
    for (let j = 0; j < offerListContent.length; ++j) {
        printThis += `<p> ${offerListContent[j]}</p>`;
        whatWeOfferlist.innerHTML = printThis;
    }
}

const copyrights=document.querySelector('.copyRights');
//It dynamically adds the content to the footer content
for (let k = 0; k < footerContent.length; k++) {
    const footerListContent = document.querySelector('.footerListContent')
    footerListContent.innerHTML += `<li>${footerContent[k]}</li>`;
}
copyrights.innerText= "Copyright 2016, Ninja Toy";