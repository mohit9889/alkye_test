# Next.js Photograph Dashboard

This is a Next.js project that provides a photograph dashboard, accessible only after logging in. The login credentials are provided below.

## Features

- **Login Authentication**: Secure login to access the dashboard.
- **Dashboard**: Displays a collection of photographs.
- **Protected Routes**: Only accessible after logging in.

## Login Credentials

- **Username**: **testadmin**
- **Password**: **testadmin**

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohit9889/alkye_test.git
   ```

2. Navigate to the project directory:

   ```bash
   cd alkye_test
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

3. You will be prompted to log in. Use the following credentials:

   - **Username**: **testadmin**
   - **Password**: **testadmin**

4. Upon successful login, you will be redirected to the `/dashboard` page, where you can view the photograph collection.

### Project Structure

- `/pages`: Contains the Next.js pages.
  - `index.js`: The login page.
  - `dashboard.js`: The protected dashboard page.
- `/components`: Contains reusable React components.
- `/styles`: Contains global and component-specific styles.

### Authentication Flow

1. The user navigates to the login page.
2. The user enters the credentials (**testadmin** / **testadmin**).
3. On successful authentication, a token is stored in local storage.
4. The user is redirected to the `/dashboard` page.
5. The `/dashboard` page checks for the token in local storage. If the token is present, the page is displayed. If not, the user is redirected back to the login page.

**Happy coding!**
