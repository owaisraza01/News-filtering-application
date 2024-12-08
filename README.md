**News Application**  
A dynamic and responsive news aggregator app built with HTML, Bootstrap, and JavaScript. This application fetches the latest news articles from the [NewsAPI](https://newsapi.org/) and displays them in a visually appealing card layout. Users can search for news on any topic, and the app will show the most recent and relevant articles.

---

#### **Features**
- 🔍 **Search Functionality**: Search for news articles based on custom keywords.
- 📰 **Dynamic Content**: Fetches real-time news data using the NewsAPI.
- 🎨 **Responsive Design**: Styled with Bootstrap for seamless viewing on different devices.
- 🔄 **Loading Indicator**: Displays a spinner while fetching data to enhance user experience.
- 🛠️ **Error Handling**: Gracefully handles API errors and displays appropriate messages.

---

#### **Technologies Used**
- **HTML**: Structuring the application.
- **Bootstrap**: For responsive design and styling.
- **JavaScript**: To handle API requests, DOM manipulation, and rendering dynamic content.
- **NewsAPI**: Source of news articles.

---

#### **How to Use**
1. **Clone the Repository**  
   Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/your-username/news-application.git
   ```

2. **Obtain an API Key**  
   - Go to [NewsAPI](https://newsapi.org/) and sign up to get your free API key.
   - Replace the placeholder API key in the JavaScript file with your own key:
     ```javascript
     const API_KEY = 'https://newsapi.org/v2/everything?q=${inputData.value}&from=2024-11-07&sortBy=publishedAt&apiKey=YOUR_API_KEY';
     ```

3. **Run the Application**  
   - Open the `index.html` file in your browser to launch the application.
   - Use the search bar to enter any topic, and the app will display the latest news articles related to your search.

4. **Explore Features**  
   - View news cards with images, titles, and descriptions.
   - Enjoy a seamless experience with a responsive layout and loading spinner.

---

#### **Contributions**
Feel free to contribute by reporting issues, suggesting enhancements, or submitting pull requests! Let's make this app even better. 🚀
