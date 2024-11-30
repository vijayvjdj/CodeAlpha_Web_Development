function filterBooks() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const books = document.querySelectorAll(".book");

    books.forEach(book => {
        const title = book.querySelector("h3").textContent.toLowerCase();
        const author = book.querySelector("p").textContent.toLowerCase();

        if (title.includes(searchInput) || author.includes(searchInput)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}

function filterCategory(category) {
    const books = document.querySelectorAll(".book");

    books.forEach(book => {
        const bookCategory = book.getAttribute("data-category");

        if (category === "All" || bookCategory === category) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}

function borrowBook(bookTitle) {
    const history = document.getElementById("history");
    const borrowDate = new Date().toLocaleDateString();

    // Create a new list item for the borrowed book
    const historyItem = document.createElement("li");
    historyItem.textContent = `Borrowed "${bookTitle}" on ${borrowDate}`;
    
    // Append the borrowed book to the history list
    history.appendChild(historyItem);

    // Optional: Disable borrow button for this book
    const books = document.querySelectorAll(".book");
    books.forEach(book => {
        if (book.querySelector("h3").textContent === bookTitle) {
            const borrowButton = book.querySelector("button");
            borrowButton.disabled = true;
            borrowButton.textContent = "Borrowed";
        }
    });
}

