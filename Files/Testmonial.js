// console.log("Kashif")

const personImg = document.querySelector(".imgShow");
const personName = document.querySelector(".name");
const personText = document.querySelector(".text");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
let counter = 0;
let custmorArr = [];
// console.log(btns)

function Customer(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = text;
}

function custmorFun(img, name, text) {
    // let fullimg = `url('../images - Copy/contBcg-${img}.jpg')`;
    //   `url('../images - Copy/${pictures[counter]}.jpg')`
    const contBcg = new Customer(img, name, text)
    // console.log(customer)
    custmorArr.push(contBcg);
}

custmorFun("contBcg-0", "Kashif", "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle")
custmorFun("contBcg-1", "Nasir", "Take chances, make mistakes. That's how you grow. Pain nourishes your courage. You have to fail in order to practice being brave.")
custmorFun("contBcg-2", "Shahbaz", "If you don’t go after what you want, you’ll never have it. If you don’t ask, the answer is always no. If you don’t step forward, you’re always in the same place.")
custmorFun("contBcg-3", "Mehmood", "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.")
custmorFun("contBcg-4", "Zeeshan", "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.")
custmorFun("contBcg-5", "Atif", "Just decide; what's it's gonna be, who you're gonna be and how your gonna do it, and then from that point, the universe will get out of your way.")

prevBtn.addEventListener("click", function (e) {
    counter--;
    if (counter < 0) {
        counter = custmorArr.length - 1;
    }
    let imgData = personImg.style;
    imgData.background = `url('./images/${custmorArr[counter].img}.jpg')`;
    imgData.backgroundSize = "100%"
    imgData.backgroundRepeat = "no-repeat"
    imgData.backgroundPosition = "center"
    personName.textContent = custmorArr[counter].name
    personText.textContent = custmorArr[counter].text
})

nextBtn.addEventListener("click", () => {
    counter++;
    if (counter > custmorArr.length - 1) {
        counter = 0;
    }
    let imgData = personImg.style;
    imgData.background = `url('./images/${custmorArr[counter].img}.jpg')`;
    imgData.backgroundSize = "100%"
    imgData.backgroundRepeat = "no-repeat"
    imgData.backgroundPosition = "center"
    personName.textContent = custmorArr[counter].name
    personText.textContent = custmorArr[counter].text
})