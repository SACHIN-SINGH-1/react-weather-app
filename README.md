# Weather App

A simple weather application built with React, Tailwind CSS, and Open-Meteo API. The app allows users to search for weather conditions in different cities and displays the current temperature and weather status.

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for building custom designs
- **Open-Meteo API**: A free weather API for retrieving weather data
- **Geocoding API**: Used to fetch latitude and longitude from city names

## Features

- Search for weather by city name.
- Displays current weather data, including temperature and weather conditions.
- Clean and responsive design using Tailwind CSS.

## API Used

- **Open-Meteo API**: This API provides free weather data for developers.
  - [Open-Meteo API Documentation](https://open-meteo.com/)
  - We use the following endpoints:
    1. **Geocoding API**: Converts a city name to latitude and longitude.
       ```plaintext
       https://geocoding-api.open-meteo.com/v1/search?name={city}&count=1
       ```
    2. **Weather API**: Fetches the current weather using latitude and longitude.
       ```plaintext
       https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current_weather=true
       ```

## Setup Instructions

### Step 1: Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### Step 2: Install Dependencies

Install all the required dependencies using npm:

```bash
npm install
```

### Step 3: Install Tailwind CSS

Follow the instructions below to add Tailwind CSS to your React project:

1. Install Tailwind and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Create a `tailwind.config.js` file:

```bash
npx tailwindcss init
```

3. Configure Tailwind by adding the following to `tailwind.config.js`:

```Javascript
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. Add Tailwind’s directives to your `src/index.css` file:

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 4: Run the Application

Now that the project is set up, you can run the application locally:

```bash
npm start
```

This will start the development server and open the app in your browser.

### Step 5: Test the Application

- Enter a city name in the input field and click "Get Weather" to retrieve the weather data.
- You will see the temperature and weather condition for the specified city.

## Folder Structure

```plaintext
weather-app/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── ...
├── tailwind.config.js
├── package.json
└── README.md
```

## Explanation of Folder Structure:

- `public/`: Contains the static files, such as index.html.
- `src/`: Contains the source code of the app:
- `App.jsx`: The main React component where the weather app logic is implemented.
- `index.css`: The global CSS file, where Tailwind CSS directives are added.
- `App.css`: Custom CSS (if needed) for additional styling.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `package.json`: Contains project metadata and dependencies.

## License

- This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to Open-Meteo for providing free and accessible weather data.
- Tailwind CSS for the beautiful, customizable, and responsive design system.

### How to Use:

1. **Clone or create the repository**: Create a new folder or repository and copy this content into the `README.md` file.
2. **Follow setup instructions**: The README provides step-by-step setup instructions, including how to install dependencies and configure Tailwind CSS using the ES module syntax.
3. **API Details**: Information about how the Open-Meteo API is used is included, along with links to the documentation.
4. **Folder structure and license**: The README also provides details about the project structure and license information.

With this `README.md`, your users will have a complete guide to set up and use the weather app.
