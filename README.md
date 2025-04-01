# SpendSherpa

SpendSherpa is a Progressive Web App (PWA) designed to help users track and manage their expenses efficiently. With a user-friendly interface and robust backend, SpendSherpa provides a seamless experience for logging expenses, viewing analytics, and managing financial records. It also includes a Chrome extension that allows users to quickly add expenses from any webpage.

## Features

- **Expense Tracking:** Log and categorize expenses effortlessly.
- **User Authentication:** Secure login and signup with JWT authentication.
- **Data Visualization:** View expense trends using interactive charts.
- **PWA Support:** Install SpendSherpa as a PWA for quick access.
- **Chrome Extension:** Fetch webpage titles and log expenses directly.
- **Dark & Light Theme:** Customize the UI for better readability.

## Installation Guide

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/spendsherpa.git
   cd spendsherpa/backend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Create a `.env` file and configure the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the server:
   ```bash
   yarn start
   ```
   The backend will run on `http://localhost:5000`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the frontend:
   ```bash
   yarn dev
   ```
   The frontend will run on `http://localhost:5173`.

### Chrome Extension Setup
1. Navigate to the extension directory:
   ```bash
   cd ../chrome-extension
   ```
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** (top right corner).
4. Click **Load Unpacked** and select the `chrome-extension` folder.
5. The extension should now be available in your browser.

## Usage
- Sign up or log in to track your expenses.
- Use the Chrome extension to add expenses directly from websites.
- View your spending trends in the dashboard.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss your ideas.

## License
This project is open-source and available under the MIT License.
