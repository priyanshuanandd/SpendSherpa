// popup.js

// Helper functions to manage token
function saveToken(token, name) {
    chrome.storage.local.set({ token, name }, () => {
      console.log('Token and name saved');
    });
  }
  
  function getToken(callback) {
    chrome.storage.local.get(['token', 'name'], (result) => {
      if (result.token && result.name) {
        callback(result.token, result.name);
      } else {
        console.error('No token or name found');
      }
    });
  }
  
  function clearToken() {
    chrome.storage.local.remove(['token', 'name'], () => {
      console.log('Token and name cleared');
    });
  }
  
  // Display Login UI or Main UI based on authentication
  document.addEventListener('DOMContentLoaded', () => {
    getToken((token, name) => {
      if (token) {
        // Token exists, skip login and show the main container
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-container').style.display = 'block';
        // Display the user's name
        document.getElementById('user-name').innerText = `Hello, ${name}!`;
      } else {
        // No token, show login UI
        document.getElementById('login-container').style.display = 'block';
        document.getElementById('main-container').style.display = 'none';
      }
    });
  
    // Handle login functionality
    document.getElementById('login-button').addEventListener('click', () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            saveToken(data.token, data.name);
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('main-container').style.display = 'block';
            document.getElementById('user-name').innerText = `Hello, ${data.name}!`;
          } else {
            document.getElementById('error-message').style.display = 'block';
          }
        })
        .catch(err => {
          console.error('Error:', err);
        });
    });
  
    // Handle Add Expense functionality
    document.getElementById('add-expense').addEventListener('click', () => {
      // Fetch the title from the active tab
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: getPageTitle,
        }, (result) => {
          const title = result[0].result;
          addExpenseToAccount(title);
        });
      });
    });
  
    // Handle Logout functionality
    document.getElementById('logout-button').addEventListener('click', () => {
      clearToken(); // Clear token from storage
      document.getElementById('login-container').style.display = 'block';
      document.getElementById('main-container').style.display = 'none';
    });
  });
  
  // Function to fetch page title
  function getPageTitle() {
    return document.title;
  }
  
  // Function to add expense to account
  function addExpenseToAccount(title) {
    getToken((token) => {
      fetch('http://localhost:5000/api/expense', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: title, amount: 0 }), // Default amount as 0
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert('Expense added!');
          } else {
            alert('Failed to add expense');
          }
        })
        .catch((error) => console.error('Error:', error));
    });
  }
  