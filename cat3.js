const cats = [
    { id: 1, name: "cat1", image: "cat1.jpg", clicks: 0 },
    { id: 2, name: "cat2", image: "cat2.jpg", clicks: 0 },
    { id: 3, name: "cat3", image: "cat3.jpg", clicks: 0 },
    { id: 4, name: "cat4", image: "cat4.jpg", clicks: 0 },
    { id: 5, name: "cat5", image: "cat5.jpg", clicks: 0 }
];

const catList = document.getElementById("cat-list");
const catName = document.getElementById("cat-name");
const catImage = document.getElementById("cat-image");
const catClicks = document.getElementById("cat-clicks");
const catClicksWrapper = document.getElementById("cat-clicks-wrapper");

let currentCat = null;

function chooseDisplayCat(catId) {
    const cat = cats.find(c => c.id === catId);
    if (!cat) return;

    currentCat = cat;
    catName.style.display = "block";
    catImage.style.display = "block";
    catClicksWrapper.style.display = "block";

    catName.textContent = cat.name;
    catImage.src = cat.image;
    catImage.alt = cat.name;
    catClicks.textContent = cat.clicks;
}

catList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        chooseDisplayCat(parseInt(event.target.dataset.catId, 10));
    }
});

catImage.addEventListener("click", function () {
    if (currentCat) {
        currentCat.clicks++;
        catClicks.textContent = currentCat.clicks;
    }
});