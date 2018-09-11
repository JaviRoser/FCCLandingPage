// document.getElementbyClassName

// const navbar = document.getElementsByClassName('topnav');
const whatWeOfferlist = document.getElementById('what-we-offer');
// const footer = document.getElementsByClassName('footer');

offerList = [
    'Premiun Materials',
    'Fast Shipping',
    'Quality Insurance'
]

offerListContent = ["Our robot is made with aluminiun, which will increase duration of our product",
    "We make sure your robot is ready to shipped as soon as it is ordered.",
    "No damages or faults"
]	

footerContent=[
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

let footer = document.getElementsByClassName('footer');
let newFooterUl=document.createElement('ul');
footer.appendChild(newFooterUl);  
// for(let k = 0; k < footerContent.length; k++) {

// }