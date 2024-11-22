const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Tea-Light Candle",
        price: 30,
        colors: [
            {
                code: "pink",
                img: "./img/ProductTeaLightPink.jpg",
            },

            {
                code: "#a5caff",
                img: "./img/ProductTeaLightBlue.jpg",
            },

            {
                code: "#fff29d",
                img: "./img/ProductTeaLightYellow.jpg",
            },

            {
                code: "#f02c20",
                img: "./img/ProductTeaLightRed.jpg",
            },

            {
                code: "#fbfbf5",
                img: "./img/ProductTeaLightWhite.jpg",
            },

            {
                code: "d6c2ff",
                img: "./img/ProductTeaLightPurple.jpg",
            },
        ],
    },

    {
        id: 2,
        title: "Floating Candle",
        price: 25,
        colors: [
            {
                code: "pink",
                img: "./img/ProductFloatingPink.jpg",
            },

            {
                code: "#a5caff",
                img: "./img/ProductFloatingBlue.jpg",
            },

            {
                code: "#fff29d",
                img: "./img/ProductFloatingYellow.jpg",
            },

            {
                code: "#f02c20",
                img: "./img/ProductFloatingRed.jpg",
            },

            {
                code: "#fbfbf5",
                img: "./img/ProductFloatingWhite.jpg",
            },

            {
                code: "d6c2ff",
                img: "./img/ProductFloatingPurple.jpg",
            },
        ],
    },

    {
        id: 3,
        title: "Pillar Candle",
        price: 100,
        colors: [
            {
                code: "pink",
                img: "./img/ProductPillarPink.jpg",
            },

            {
                code: "#a5caff",
                img: "./img/ProductPillarBlue.jpg",
            },

            {
                code: "#fff29d",
                img: "./img/ProductPillarYellow.jpg",
            },

            {
                code: "#f02c20",
                img: "./img/ProductPillarRed.jpg",
            },

            {
                code: "#fbfbf5",
                img: "./img/ProductPillarWhite.jpg",
            },

            {
                code: "d6c2ff",
                img: "./img/ProductPillarPurple.jpg",
            },
        ],
    },

    {
        id: 4,
        title: "Jar Candle",
        price: 350,
        colors: [
            {
                code: "pink",
                img: "./img/ProductJarPink.jpg",
            },

            {
                code: "#a5caff",
                img: "./img/ProductJarBlue.jpg",
            },

            {
                code: "#fff29d",
                img: "./img/ProductJarYellow.jpg",
            },

            {
                code: "#f02c20",
                img: "./img/ProductJarRed.jpg",
            },

            {
                code: "#fbfbf5",
                img: "./img/ProductJarWhite.jpg",
            },

            {
                code: "d6c2ff",
                img: "./img/ProductJarPurple.jpg",
            },
        ],
    },

    {
        id: 5,
        title: "Dessert Candle",
        price: 250,
        colors: [
            {
                code: "pink",
                img: "./img/ProductDessertPink.jpg",
            },

            {
                code: "b#a5caff",
                img: "./img/ProductDessertBlue.jpg",
            },

            {
                code: "#fff29d",
                img: "./img/ProductDessertYellow.jpg",
            },

            {
                code: "#f02c20",
                img: "./img/ProductDessertRed.jpg",
            },

            {
                code: "#fbfbf5",
                img: "./img/ProductDessertWhite.jpg",
            },

            {
                code: "d6c2ff",
                img: "./img/ProductDessertPurple.jpg",
            },
        ],
    },
]

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change choosen product
        choosenProduct = products[index]

        // change title of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "Rs." + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // assigning new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})