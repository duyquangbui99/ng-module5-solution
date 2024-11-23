# AngularJS Restaurant Menu Assignment

This project is part of a course assignment that demonstrates AngularJS concepts such as routing, components, and services. The application includes a restaurant menu, a signup form, and a MyInfo page.

## Description

The Restaurant Menu app features:
1. **Home Page**: A simple welcome page with a link to navigate to the categories view.
2. **Categories Page**: Displays a list of all menu categories retrieved from a REST API.
3. **Items Page**: Displays all items for a selected category, retrieved dynamically based on user selection.
4. **Signup Page**: A form where users can sign up and save their favorite menu item.
5. **MyInfo Page**: Displays the user’s saved signup details, including their favorite menu item.

The app uses AngularJS (v1.8.2) with `ui-router` for routing and a clean, responsive layout with CSS Grid.
<img width="1289" alt="Screenshot 2024-11-22 at 8 45 15 PM" src="https://github.com/user-attachments/assets/ee87009a-101e-42b2-abc0-15e860b7c950">
<img width="1263" alt="Screenshot 2024-11-22 at 8 45 26 PM" src="https://github.com/user-attachments/assets/85b644a3-ca90-443a-bfe2-b0e6f9b42467">

---

## Assignment Requirements Fulfilled

1. **Views**:
   - **Home (`/`)**: Displays a welcome message and a link to the categories page.
   - **Categories (`/categories`)**: Lists all menu categories as clickable links.
   - **Items (`/items/{categoryShortName}`)**: Displays menu items for the selected category.
   - **Signup (`/signup`)**: Displays a form for users to sign up and save their favorite menu item.
   - **MyInfo (`/myinfo`)**: Displays the user’s saved signup details, including their favorite menu item.

2. **Routing**:
   - Configured using AngularJS `ui-router`.
   - Proper URL mapping ensures direct access to pages via URL (e.g., `/items/{categoryShortName}`, `/signup`, `/myinfo`).

3. **REST API**:
   - Categories are fetched from `https://coursera-jhu-default-rtdb.firebaseio.com/categories.json`.
   - Items for a category are fetched from `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json`.

4. **Signup Form and MyInfo**:
   - The Signup form collects user details like name, email, phone, and their favorite menu item.
   - Data entered in the Signup form is displayed on the MyInfo page.

5. **AngularJS Concepts**:
   - Components are used to display categories, items, and the signup form.
   - Data binding is achieved using one-way `<` and two-way `=` bindings where applicable.
   - Services (`MenuDataService` and `SignupService`) handle data fetching and storage.

6. **Responsive Design**:
   - Categories and items are displayed in a professional, two-column layout using CSS Grid.
   - The app is fully responsive and adapts to different screen sizes.

---

## Technologies Used

- **AngularJS**: v1.8.2
- **Angular UI Router**: v0.3.1
- **HTML5 & CSS3**: For layout and styling
- **REST API**: Provided by Coursera's database

---

## Author
QUANG Bui
