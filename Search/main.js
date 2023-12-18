function searchbar(){
    const searchInput = document.querySelector(".search");
    const elements = document.querySelectorAll(".ele");

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();

        elements.forEach(item => {
            if (!item.textContent.toLowerCase().includes(searchText)) 
                item.style.display = "none";
            else 
                item.style.display = "list-item";
        });
    });
}

searchbar();