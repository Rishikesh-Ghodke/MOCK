# AJAX To-Do List Applications

This folder contains two versions of a To-Do List application that demonstrate AJAX functionality:

## 1. simple_todo.html - Simplified AJAX Simulation

A beginner-friendly to-do list that simulates AJAX calls using localStorage:

- **Easy to understand**: Simple code structure with clear comments
- **No server required**: Works offline using localStorage
- **Complete functionality**: Add, edit, and delete tasks
- **AJAX simulation**: Shows how AJAX works without needing a real server

To use:
1. Open `simple_todo.html` in any browser
2. Add, edit, and delete tasks
3. Data will persist across page refreshes

## 2. real_ajax_todo.html - Real AJAX Implementation

A complete to-do list that makes actual AJAX calls to a real API:

- **Real AJAX calls**: Uses the Fetch API to make HTTP requests
- **Complete error handling**: Shows error messages if API calls fail
- **Loading indicators**: Shows loading state during API operations
- **Modern JavaScript**: Uses promises and arrow functions
- **Connected to a real API**: Uses JSONPlaceholder for demonstration

To use:
1. Open `real_ajax_todo.html` in a browser with internet connection
2. The app will load sample tasks from JSONPlaceholder API
3. You can add, edit, and delete tasks with real API calls

**Note about JSONPlaceholder API**:
- This is a demo API that simulates responses but doesn't actually save data permanently
- Your changes will appear to work but won't persist on their server
- In a real application, you would replace this with your own backend API

## Key Differences

1. **Data Storage**:
   - `simple_todo.html`: Uses localStorage (browser storage)
   - `real_ajax_todo.html`: Uses a remote API server

2. **AJAX Implementation**:
   - `simple_todo.html`: Simulates AJAX with setTimeout
   - `real_ajax_todo.html`: Real AJAX using fetch() API

3. **Error Handling**:
   - `simple_todo.html`: Basic error handling
   - `real_ajax_todo.html`: Complete error handling with try/catch and HTTP status checks

## Learning Path

Start with the simple version to understand the concepts, then move to the real AJAX version when you're ready to connect to a server. 