# The Wild Oasis

**The Wild Oasis** is a learning project built with **Next.js**, **Supabase**, and **Auth.js**. This website allows users to:

- **Browse** and explore a variety of cabin rentals
- **Create reservations** for their selected cabins
- **View and update** account details and profile information
- **Manage reservations**, with options to delete or modify them

## Technologies Used

- **Next.js** – for building the front end and managing routing
- **Supabase** – for database management and authentication
- **Auth.js** – to handle secure user authentication

  ### Prerequisites

  - Node.js (v16 or higher)
  - A Supabase account
  - A Nextauth account

  ### Installation Steps

  1. Clone the repository:

     ```
     git clone https://github.com/elenetskitishvili/the-wild-oasis-website.git
     ```

  2. Navigate to the project directory:

     ```
     cd the-wild-oasis-website
     ```

  3. Install dependencies:

     ```
     npm install
     ```

  4. Create a `.env.local` file in the root directory and add the following environment variables:

     - Supabase:

       ```
       SUPABASE_URL=your_supabase_url
       SUPABASE_KEY=your_supabase_key
       ```

     - Nextauth:

       ```
        NEXTAUTH_URL=http://localhost:3000/
        NEXTAUTH_SECRET=your_nextauth_secret
        AUTH_GOOGLE_ID=google_id
        AUTH_GOOGLE_SECRET=google_secret
       ```

  5. Run the development server:

     ```
       npm run dev
     ```

  6. Open [http://localhost:3000](url) in your browser to view the project.
