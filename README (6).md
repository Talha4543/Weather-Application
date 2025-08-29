# Weather Application ☀️

This is a simple weather application!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License. That means you're free to use and modify this code for your own projects. Click the badge above to read the full license!



## Description 📝
The Weather-Application is a simple web application built with Flask that allows users to retrieve weather information for a specific city. It fetches data from the wttr.in API and uses the OpenStreetMap Nominatim API to get country information. The application provides details such as temperature, humidity, wind speed, and weather description. The frontend is designed with Bootstrap and custom CSS for an appealing user experience.



## Table of Contents 🧭
1.  [Features](#features-%EF%B8%8F)
2.  [Tech Stack](#tech-stack-%F0%9F%92%BB)
3.  [Installation](#installation-%E2%9A%A1%EF%B8%8F)
4.  [Usage](#usage-%F0%9F%94%8D)
5.  [How to Use](#how-to-use-%F0%9F%94%8D)
6.  [Project Structure](#project-structure-%F0%9F%93%81)
7.  [API Reference](#api-reference-%F0%9F%95%A8)
8.  [Contributing](#contributing-%F0%9F%9A%80)
9.  [License](#license-%F0%9F%93%9C)
10. [Important Links](#important-links-%F0%9F%94%97)
11. [Footer](#footer-%F0%9F%93%8D)



## Features ✨
-   **City-Specific Weather**: Retrieves weather information based on the city entered by the user.
-   **Location-Based Weather**: Fetches weather data based on the user's current geolocation.
-   **Detailed Weather Information**: Displays temperature, humidity, wind speed, and weather description.
-   **Dynamic Icon Display**: Shows weather icon corresponding to the weather condition.
-   **User-Friendly Interface**: Utilizes Bootstrap for responsive design and custom CSS for styling.



## Tech Stack 💻
-   **Backend**: Python, Flask
-   **Frontend**: HTML, CSS, JavaScript
-   **Libraries**: requests, Bootstrap
-   **APIs**: wttr.in, OpenStreetMap Nominatim API



## Installation ⚙️
1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Talha4543/Weather-Application.git
    cd Weather-Application
    ```

2.  **Install the required Python packages:**

    ```bash
    pip install Flask requests
    ```

3.  **Set up the Flask application:**

    No specific setup required as dependencies are minimal.



## Usage 🚀
1.  **Run the Flask application:**

    ```bash
    python app.py
    ```

2.  **Open the application in your web browser:**

    Navigate to `http://127.0.0.1:5000/` (or the address provided by Flask).

3.  **Enter a city name in the input field and click "Get Weather".**

    Alternatively, you can use the "Current Location" button to retrieve weather based on your device's geolocation.



### Real World Use Cases
*   **Personal Weather Dashboard:** Individuals can use this application to quickly check the current weather conditions in their city or any other location of interest.
*   **Travel Planning:** Travelers can use the app to get weather information for their destination before traveling.
*   **Educational Tool:** Students learning about web development, APIs, or weather data can use this project as a practical example.



## How to Use ℹ️
1.  **Input City/ZIP:** Enter the city name or ZIP code in the respective input field.
2.  **Get Weather:** Click the "Get Weather" button to fetch weather information.
3.  **Use Location:** Click the "Current Location" button to use your device's geolocation to get weather data.
4.  **View Results:** The weather information (city name, temperature, humidity, wind speed, and description) will be displayed in the weather card.



## Project Structure 🌳
```
Weather-Application/
├── app.py               # Main Flask application file
├── static/
│   ├── script.js        # JavaScript file for frontend functionality
│   └── style.css        # CSS file for styling
├── templates/
│   └── index.html       # HTML template for the main page
├── README.md            # Project documentation
└── vercel.json          # Vercel configuration file
```



## API Reference 🌐



### wttr.in
-   **Endpoint**: `https://wttr.in/{city}?format=j1`
-   **Description**: Fetches current weather conditions for a given city.
-   **Parameters**: `city` (required)
-   **Example**: `https://wttr.in/Islamabad?format=j1`



### OpenStreetMap Nominatim API
-   **Endpoint**: `https://nominatim.openstreetmap.org/search?city={city}&format=json&limit=1`
-   **Description**: Retrieves geographical information for a given city.
-   **Parameters**: `city` (required)
-   **Headers**: `User-Agent: weather-app` (required)
-   **Example**: `https://nominatim.openstreetmap.org/search?city=Islamabad&format=json&limit=1`



## Contributing 🤝
Contributions are welcome! Here are the steps to contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Commit your changes with descriptive commit messages.
5.  Push your changes to your fork.
6.  Submit a pull request.



## License 📄
This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.



## Important Links 🔗
-   **Repository**: [https://github.com/Talha4543/Weather-Application](https://github.com/Talha4543/Weather-Application)



## Footer 👣
Weather-Application - [https://github.com/Talha4543/Weather-Application](https://github.com/Talha4543/Weather-Application)

Author: Talha4543

Contact: [Your Email/Contact]

⭐️ Like this project? Give it a star on [GitHub](https://github.com/Talha4543/Weather-Application)!

Fork it, contribute, and raise issues!