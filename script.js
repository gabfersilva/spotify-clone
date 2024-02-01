// bom dia / boa tarde / boa noite 

const greetingElement = document.getElementById("greeting")

// obter a hora atual do sistema

const currentHour = new Date().getHours;

// define a saudação com base na hora atual 
if (currentHour >= 5 && currentHour < 12) {
    greetingElement.textContent = "Bom dia";
} else if (currentHour >= 12 && currentHour < 18) {
    greetingElement.textContent = "Boa tarde";
} else {
    greetingElement.textContent = "Boa noite";
}


// grid inteligente

const container = document.querySelector(".offer_list-item");

const observer = new ResizeObserver(() => { // mudanças no tamanho do elemento
    const containerWidth = container.offsetWidth; // largura total do elemento, incluindo largura  do conteudo, borda e preenchimento
    const numColumns = Math.floor(containerWidth / 200); // numero de colunas com base na largura do container

    // largura min 200px e max de 1fr 
    container.style.gridTemplateColums = `repeat(${numColumns}, minmax (200px, 1fr))`;

    console.log({ container });
    console.log({ numColumns });

});

//observando a mudança do elemento
observer.observe(container);