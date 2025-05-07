// StudyHub main JavaScript file

// Function to handle the file upload UI
document.addEventListener('DOMContentLoaded', function() {
    // File upload handling
    const fileUpload = document.getElementById('file-upload');
    if (fileUpload) {
        fileUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const uploadContainer = this.closest('.border-dashed');
                const hiddenPreview = uploadContainer.querySelector('.hidden');
                
                if (hiddenPreview) {
                    // Update the file name in the preview
                    const fileNameElement = hiddenPreview.querySelector('span');
                    if (fileNameElement) {
                        fileNameElement.textContent = `${file.name} (${formatFileSize(file.size)})`;
                    }
                    
                    // Show the preview
                    hiddenPreview.classList.remove('hidden');
                }
            }
        });
    }
    
    // Subject page functionality
    initializeSubjectPage();
    
    // Search functionality
    initializeSearch();
    
    // Initialize dark mode
    initializeDarkMode();
});

// Format file size in a human-readable format
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Initialize subject page content based on the URL parameter
function initializeSubjectPage() {
    const subjectTitle = document.getElementById('subject-title');
    const subjectDescription = document.getElementById('subject-description');
    
    if (subjectTitle && subjectDescription) {
        // Get the subject ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const subjectId = urlParams.get('id');
        
        if (subjectId) {
            // Set the page content based on the subject
            const subjectData = getSubjectData(subjectId);
            
            if (subjectData) {
                subjectTitle.textContent = subjectData.title;
                subjectDescription.textContent = subjectData.description;
                
                // You could also update other elements like tags, stats, etc.
            }
        }
    }
}

// Get subject data based on the ID
function getSubjectData(subjectId) {
    // This would typically come from an API, but for now we'll use hardcoded data
    const subjects = {
        'math': {
            title: 'Mathematics',
            description: 'Mathematics includes the study of numbers, quantities, shapes, and patterns. It is essential across science, engineering, finance, and many other fields.'
        },
        'physics': {
            title: 'Physics',
            description: 'Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force.'
        },
        'chemistry': {
            title: 'Chemistry',
            description: 'Chemistry is the scientific study of the properties and behavior of matter. It is a physical science that covers elements, compounds, atoms, molecules, and reactions between substances.'
        },
        'literature': {
            title: 'Literature',
            description: 'Literature includes written works with artistic or intellectual value, such as poetry, novels, drama, and non-fiction. It represents culture and tradition across human history.'
        }
    };
    
    return subjects[subjectId];
}

// Initialize search functionality
function initializeSearch() {
    const searchInputs = document.querySelectorAll('input[placeholder*="Search"]');
    
    searchInputs.forEach(input => {
        input.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                // In a real application, this would perform an actual search
                alert(`Searching for: ${this.value}`);
            }
        });
    });
}

// Add event listeners for tag removal
document.addEventListener('click', function(e) {
    if (e.target.closest('button') && e.target.closest('.bg-gray-100')) {
        const tag = e.target.closest('.bg-gray-100');
        tag.remove();
    }
});

// Initialize dark mode functionality
function initializeDarkMode() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply dark mode if saved theme is dark or if system prefers dark
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    }
    
    // Create dark mode toggle if it doesn't exist
    if (!document.querySelector('.dark-mode-toggle')) {
        createDarkModeToggle();
    }
}

// Create dark mode toggle button
function createDarkModeToggle() {
    const header = document.querySelector('header .container');
    
    if (header) {
        // Create toggle container
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'dark-mode-toggle flex items-center ml-4';
        
        // Create the toggle button
        const toggle = document.createElement('button');
        toggle.className = 'toggle-dark-mode';
        toggle.setAttribute('aria-label', 'Toggle dark mode');
        toggle.setAttribute('title', 'Toggle dark mode');
        
        // Add click event listener
        toggle.addEventListener('click', toggleDarkMode);
        
        // Add the toggle to the container
        toggleContainer.appendChild(toggle);
        
        // Add a label
        const label = document.createElement('span');
        label.className = 'ml-2 text-sm text-white';
        label.textContent = 'Dark Mode';
        toggleContainer.appendChild(label);
        
        // Insert the toggle after the navigation
        const nav = header.querySelector('nav');
        if (nav) {
            nav.parentNode.insertBefore(toggleContainer, nav.nextSibling);
        } else {
            header.appendChild(toggleContainer);
        }
    }
}

// Toggle dark mode
function toggleDarkMode() {
    const root = document.documentElement;
    
    if (root.classList.contains('dark')) {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
} 