let sec1 = document.querySelector(".sec1");
let sec2 = document.querySelector(".sec2");


function card1(imgSrc, title, paragraph) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");


    img.src = imgSrc;
    h1.textContent = title;
    p.textContent = paragraph;


    div.style.height = "300px";
    div.style.width = "440px";

    div.style.borderRadius = "20px";
    div.style.padding = "20px";
    div.style.margin = "20px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "left";
    div.style.justifyContent = "center";
    div.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";


    img.style.width = "60px";
    img.style.marginBottom = "20px";
    h1.style.fontSize = "20px";
    h1.style.marginBottom = "10px";
    p.style.textAlign = "left";

    // إضافة العناصر
    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);

    sec1.appendChild(div);


}

card1(
    "images/icon-online.svg",
    "Online Banking",
    "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."

)

card1(
    "images/icon-budgeting.svg",
    "Simple Budgeting",
    "See exactly where your moneygoes each month.Receivenotifications when you're close to htting your limits."
)

card1(
    "images/icon-api.svg",
    "Fast Onboarding",
    "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
)

card1(
    "images/icon-onboarding.svg",
    "Open AP",
    "Manage your savings, investments, pension, and much more from one account. Tracking your money has , been easier."
)

function card2(imgSrc, pparagraph, title, paragraph) {
    let y = document.createElement("p");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    img.src = imgSrc;
    h2.textContent = title;
    p.textContent = paragraph;
    y.textContent = pparagraph;


    div.style.height = "auto";
    div.style.width = "440px";
    div.style.borderRadius = "20px";
    div.style.margin = "20px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "flex-start";
    div.style.justifyContent = "center";
    div.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    div.style.overflow = "hidden";

    img.style.width = "100%";
    img.style.height = "auto";
    img.style.borderTopLeftRadius = "20px";
    img.style.borderTopRightRadius = "20px";

    h2.style.fontSize = "20px";
    h2.style.margin = "20px 20px 10px 20px";
    h2.style.textAlign = "left";

    p.style.textAlign = "left";
    p.style.margin = "0 20px 20px 20px";


    y.style.textAlign = "left";
    y.style.margin = " 20px 20px 20px";


    div.appendChild(img);
    div.appendChild(y);
    div.appendChild(h2);
    div.appendChild(p);

    sec2.appendChild(div);
}

card2(

    "images/image-currency.jpg",
    "By Claire Robinson",
    "Receive money in anycurrency with no fees",
    "The world is getting smaller and we're becoming more mobile. So why should you be forced to onlyreceive money in a single .."

)

card2(
    "images/image-restaurant.jpg",
    "By Witson Hutton",

    "Treat yourself without worrying about money",
    "Our simple budgeting feature allows you to separate out your why should you be forced to only spending and set realistic limits each month. That means you ..."

)

card2(
    "images/image-plane.jpg",
    "By Wilson Hutton",

    "Take your Digitalbank card wherever you go",
    "We want you to enjoy yours. This is why we don'tard wor by trees on purchases while you're abroad. We'll even ."

)

card2(
    "images/image-confetti.jpg",
    "By Claire Robinson",

    "Our invite-only Beta accounts are now live!",
    "After a lot of hard work by theard wor by tre es on purchases whole team, we're excited to launch our closed beta. It's easy to request an invite through ..."

)