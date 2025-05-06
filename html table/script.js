// Product data (in a real application, this might come from an API)
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Noise-cancelling over-ear headphones.",
        price: 7999,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=250&h=250&fit=crop"
    },
    {
        id: 2,
        name: "Smartwatch",
        description: "Fitness tracking smartwatch.",
        price: 12999,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=250&h=250&fit=crop"
    },
    {
        id: 3,
        name: "Gaming Mouse",
        description: "Ergonomic gaming mouse.",
        price: 2499,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=250&h=250&fit=crop"
    },
    {
        id: 4,
        name: "Laptop Stand",
        description: "Adjustable aluminium stand.",
        price: 1999,
        image: "https://images.unsplash.com/photo-1619118884592-11b151f1ae11?w=250&h=250&fit=crop"
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        description: "RGB backlit mechanical keyboard.",
        price: 4999,
        image: "https://images.unsplash.com/photo-1595225476474-63bd911e7ede?w=250&h=250&fit=crop"
    },
    {
        id: 6,
        name: "External SSD",
        description: "1TB portable solid state drive.",
        price: 8999,
        image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=250&h=250&fit=crop"
    },
    {
        id: 7,
        name: "Bluetooth Speaker",
        description: "Waterproof portable speaker.",
        price: 3499,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=250&h=250&fit=crop"
    },
    {
        id: 8,
        name: "Webcam",
        description: "HD webcam with microphone.",
        price: 5999,
        image: "https://images.unsplash.com/photo-1596112924132-7e7e9e85a1b8?w=250&h=250&fit=crop"
    },
    {
        id: 9,
        name: "Graphics Tablet",
        description: "Digital drawing tablet for artists.",
        price: 6999,
        image: "https://images.unsplash.com/photo-1628815113969-0509f76978a9?w=250&h=250&fit=crop"
    },
    {
        id: 10,
        name: "USB Hub",
        description: "4-port USB 3.0 hub.",
        price: 1499,
        image: "https://images.unsplash.com/photo-1618410320928-25228d811631?w=250&h=250&fit=crop"
    },
    {
        id: 11,
        name: "Power Bank",
        description: "20000mAh portable charger.",
        price: 2999,
        image: "https://images.unsplash.com/photo-1585003791535-a25932071f87?w=250&h=250&fit=crop"
    },
    {
        id: 12,
        name: "Wireless Earbuds",
        description: "True wireless earbuds with case.",
        price: 4999,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=250&h=250&fit=crop"
    },
];

// Pagination settings
const itemsPerPage = 5;
let currentPage = 1;

// DOM elements
const productTableBody = document.getElementById('productTableBody');
const paginationContainer = document.getElementById('pagination');

// Function to display products for the current page
function displayProducts() {
    // Clear the current table
    productTableBody.innerHTML = '';
    
    // Calculate the range of products to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    
    // Add each product to the table
    currentProducts.forEach(product => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><img src="${product.image}" alt="${product.name}" class="product-image"></td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>₹${product.price.toLocaleString()}</td>
        `;
        
        productTableBody.appendChild(row);
    });
    
    // Update pagination
    setupPagination();
}

// Function to set up pagination controls
function setupPagination() {
    paginationContainer.innerHTML = '';
    
    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts();
        }
    });
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayProducts();
        }
    });
    
    // Page information
    const pageInfo = document.createElement('div');
    pageInfo.className = 'page-info';
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
    // Add elements to pagination container
    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(pageInfo);
    paginationContainer.appendChild(nextButton);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', displayProducts); 