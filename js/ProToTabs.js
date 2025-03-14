document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tabs").forEach(tabsBlock => {
        tabsBlock.querySelectorAll("h5.open").forEach(clickedTab => {
            let contentBlock = clickedTab.nextElementSibling;
            if (contentBlock && contentBlock.tagName === "DIV") {
                contentBlock.classList.add("open");
            }
        });
        tabsBlock.addEventListener("click", (event) => {
            if (event.target.tagName === "H5") {
                let clickedTab = event.target;
                let contentBlock = clickedTab.nextElementSibling;
                let isOpen = clickedTab.classList.contains("open");
                tabsBlock.querySelectorAll("h5, div").forEach(el => el.classList.remove("open"));
                if (!isOpen) {
                    clickedTab.classList.add("open");
                    if (contentBlock && contentBlock.tagName === "DIV") {
                        contentBlock.classList.add("open");
                    }
                }
            }
        });
    });
});

