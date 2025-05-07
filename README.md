# StudyHub - Educational Materials Platform

StudyHub is a web application designed for students to share and access educational materials. Users can browse materials organized by subjects, view details, and upload their own study materials.

## Features

- Browse educational materials by subject
- View detailed information about each material
- Upload and share your own study materials
- Responsive design works on all devices
- Modern UI using Tailwind CSS

## Project Structure

```
project-root/
├── public/
│   ├── index.html         # Main homepage
│   ├── subject.html       # Subject details page
│   ├── upload.html        # Upload new materials page
│   ├── output.css         # Compiled CSS (generated)
│   └── js/
│       └── main.js        # Main JavaScript functionality
├── src/
│   └── input.css          # Source CSS with Tailwind directives
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Project dependencies
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Build the CSS:

```bash
npm run build
```

4. For development with automatic rebuilding:

```bash
npm run watch
```

5. Open `public/index.html` in your browser to view the site

## Technologies Used

- HTML5
- CSS3 with Tailwind CSS
- JavaScript (ES6+)
- Tailwind CSS for styling
- PostCSS for processing CSS

## Contributing

Feel free to fork this project and make your own changes. Pull requests are welcome!

## License

[ISC License](LICENSE) 