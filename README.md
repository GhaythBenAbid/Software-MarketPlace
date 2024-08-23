
# Software MarketPlace

Software MarketPlace is an advanced e-commerce platform for software products. It is built using modern web technologies, including Angular for the frontend, NestJS for the backend microservices, and MySQL for the database. The platform offers a comprehensive solution for software vendors and customers to interact, manage software licenses, and process transactions efficiently.

## Features

- **User Authentication**: Secure login and registration using JWT (JSON Web Tokens).
- **Product Management**: Comprehensive tools for vendors to list and manage software products.
- **Microservices Architecture**: Scalable backend services using NestJS microservices.
- **Order Processing**: Seamless shopping cart and order management system.
- **License Management**: Manage and renew software licenses directly from the user dashboard.
- **Payment Integration**: Secure payment processing integrated with popular payment gateways.
- **Admin Dashboard**: Role-based access for managing users, orders, and product listings.

## Technologies Used

- **Frontend**: Angular framework for building a dynamic and responsive user interface.
- **Backend**: NestJS microservices for scalable and modular backend architecture.
- **Database**: MySQL database for persistent data storage.
- **Authentication**: JWT-based authentication and authorization.
- **API Gateway**: Centralized API gateway for routing and managing microservices.
- **Docker**: Containerized application for consistent deployment across environments.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- [Angular CLI](https://angular.io/cli)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/) (optional, for containerized setup)

### Clone the Repository

```bash
git clone https://github.com/GhaythBenAbid/Software-MarketPlace.git
cd Software-MarketPlace
```

### Setup Environment Variables

Create a `.env` file in the root directory and fill it with your configuration values. Use the `.env.example` as a template.

```bash
cp .env.example .env
```

### Install Dependencies

For the backend services:

```bash
cd backend
npm install
```

For the frontend:

```bash
cd frontend
npm install
```

### Database Setup

Ensure MySQL is running and create the necessary database:

```sql
CREATE DATABASE software_marketplace;
```

Apply migrations or setup the database schema using your preferred method.

### Running the Application

#### Backend

Start the NestJS microservices:

```bash
cd backend
npm run start:microservices
```

#### Frontend

Start the Angular application:

```bash
cd frontend
ng serve
```

### Docker Setup (Optional)

For running the entire application using Docker:

```bash
docker-compose up --build
```

## Usage

- **Access the Platform**: Once the server is running, navigate to `http://localhost:4200` for the frontend.
- **Admin Access**: Use the admin dashboard to manage products, orders, and users.
- **User Features**: Browse, purchase, and manage software licenses as an authenticated user.

## Deployment

### Production

For production deployment, ensure you configure the `.env` file with production values. You can use Docker Compose or deploy the services individually.

```bash
npm run build
```

Deploy the built application to your production environment.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please reach out to the project maintainer:

- **Ghayth Ben Abid**
- [GitHub](https://github.com/GhaythBenAbid)
- [Email](mailto:ghaythbenabid0@gmail.com)
