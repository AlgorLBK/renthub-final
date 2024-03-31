### RENTHUB PROPERTY MANAGEMENT APP

- Oluwatobi Hajarat Giwa - 101331074
- Daniel Akindun - 101384910
- Divine Iyalla Falola - 101394076
- Algor Lombako - 101372552
- Parsa Majdol Hosseini  - 101356047


```CAPSTONE PROJECT```

The RentHub Rental Management System is a web application designed to streamline the process of managing rental properties. It offers a user-friendly interface for property owners and tenants to efficiently handle various rental tasks. The system is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and integrated with the Swavy UI CSS framework for responsive and visually appealing user interfaces.

## Features

- **Property Management:** Add, update, and delete rental properties. Assign properties to specific owners or landlords. View property details including location, rent amount, and availability.
  
- **Tenant Management:** Manage tenant information including contact details, lease agreements, and payment history. Send notifications to tenants regarding rent payments, lease renewals, and maintenance requests.

- **Rental Payments:** Allow tenants to make rental payments securely through integrated payment gateways. Generate invoices and receipts for rental payments. Track payment status and send reminders for overdue payments.

- **Maintenance Requests:** Enable tenants to submit maintenance requests online. Assign and track the status of maintenance tasks for each property. Schedule maintenance appointments and communicate updates with tenants.

- **Reporting:** Generate reports on rental income, expenses, and occupancy rates. Analyze trends and performance metrics to make informed business decisions. Export reports in various formats for further analysis or sharing.

- **User Management:** Administer user accounts with different roles and permissions. Authenticate users securely and manage sessions. Implement password recovery and account verification mechanisms.

## Architecture

- **Frontend (React.js):** Utilizes Swavy UI CSS framework for responsive and visually appealing user interfaces. Implements components for property management, tenant management, payment processing, maintenance requests, and reporting. Communicates with backend APIs to fetch and update data asynchronously.

- **Backend (Node.js, Express.js):** Manages application logic and data flow using Express.js middleware. Connects to MongoDB database to store and retrieve rental property information, tenant details, payment records, and other relevant data. Implements RESTful APIs to handle CRUD operations for properties, tenants, payments, maintenance requests, and user accounts.

- **Database (MongoDB):** Stores structured data in a NoSQL document-oriented database. Defines schemas for rental properties, tenants, payments, maintenance requests, and user accounts. Supports efficient querying and indexing for fast data retrieval.

- **Authentication and Authorization:** Utilizes JWT (JSON Web Tokens) for secure authentication and authorization. Implements middleware to verify user tokens and restrict access to authenticated routes. Provides role-based access control to limit users' permissions based on their roles (e.g., admin, landlord, tenant).

## Deployment

- Deploy the frontend application on a hosting service such as Netlify or Vercel.
- Deploy the backend server on a platform-as-a-service (PaaS) provider like Heroku or AWS Elastic Beanstalk.
- Configure environment variables for database connection strings, API keys, and other sensitive information.
- Enable HTTPS for secure communication between clients and the server.

## Usage

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file in the root directory and define variables for MongoDB connection string, JWT secret, and other configurations.
4. Start the server: `npm start`
5. Access the application in your web browser: `http://localhost:3000`

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any enhancements, bug fixes, or new features.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Note:** This README is a template. Please update the content with relevant information specific to your Rental Management System.
