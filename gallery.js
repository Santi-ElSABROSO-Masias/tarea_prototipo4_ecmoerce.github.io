document.addEventListener("DOMContentLoaded", function() {
    const lbAlbum = document.querySelector(".lb-album");
    for (let i = 1; i <= 35; i++) {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.setAttribute("href", `#image-${i}`);
        const image = document.createElement("img");
        image.setAttribute("src", `images/thumbs/thumbsceramicas/${i}.jpg`);
        image.setAttribute("alt", `image${i}`);
        const span = document.createElement("span");
        span.textContent = `Photo ${i}`;
        anchor.appendChild(image);
        anchor.appendChild(span);
        listItem.appendChild(anchor);
        image.setAttribute("class", "thumbnail-image");

        
        
        const lbOverlay = document.createElement("div");
        lbOverlay.classList.add("lb-overlay");
        lbOverlay.setAttribute("id", `image-${i}`);
        const closeButton = document.createElement("a");
        closeButton.setAttribute("href", "#page");
        closeButton.classList.add("lb-close");
        closeButton.textContent = "x Cerrar";
        const fullImage = document.createElement("img");
        fullImage.setAttribute("src", `images/full/fullceramicas/${i}.jpg`);
        fullImage.setAttribute("alt", `image${i}`);
        fullImage.classList.add("full-image"); // Agrega una clase para aplicar estilos
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.textContent = `Photo ${i}`;
        const p = document.createElement("p");
        p.textContent = `Description of photo ${i}`;
        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("add-to-cart-button");
        addToCartButton.textContent = "Add to Cart";
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(addToCartButton);
        lbOverlay.appendChild(closeButton);
        lbOverlay.appendChild(fullImage);
        lbOverlay.appendChild(div);
        
        listItem.appendChild(lbOverlay);
        lbAlbum.appendChild(listItem);
    }
});
