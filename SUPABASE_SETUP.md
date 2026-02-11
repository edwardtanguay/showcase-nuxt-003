# Supabase Setup Instructions for Members API

To enable the "Members" feature using Supabase and Prisma, follow these steps:

## 1. Create a Supabase Account and Project

1.  Go to [Supabase](https://supabase.com/) and sign up for an account.
2.  Once logged in, click "New project".
3.  Enter a name for your project (e.g., `NuxtShowcase`).
4.  Set a database password (store this securely, you will need it later).
5.  Select a region close to you.
6.  Click "Create new project". Wait for the project to be provisioned (this may take a few minutes).

## 2. Get the Database Connection String

1.  In your Supabase project dashboard, go to **Project Settings** (gear icon at the bottom left).
2.  Click on **Database** in the sidebar.
3.  Scroll down to the **Connection string** section.
4.  Click on the **URI** tab.
5.  Usually, Supabase provides two connection strings: one for direct connections (port 5432) and one for transaction pooler (port 6543). For serverless environments (like Vercel/Netlify/Nuxt), it's recommended to use the **Transaction Pooler** (port 6543) if available, or just the direct connection if you manage connection limits.
    *   **Recommendation**: Use the connection string ending with `?pgbouncer=true` if using the transaction pooler, or append `?pgbouncer=true` manually if using port 6543.
    *   Example format: `postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-ID].supabase.co:5432/postgres` (Direct) or `postgresql://postgres:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true` (Pooler).

## 3. Configure the Application

1.  Open the `.env` file in the root of your project.
2.  Locate the `DATABASE_URL` variable.
3.  Replace the placeholder value with your Supabase connection string.
    *   Replace `[YOUR-PASSWORD]` with the password you set in step 1.
    *   Replace `[YOUR-PROJECT-ID]` with your actual project ID (found in the connection string).

    Example `.env`:
    ```env
    DATABASE_URL="postgresql://postgres:mysecretpassword@db.xyzprojectid.supabase.co:5432/postgres?pgbouncer=true"
    ```

## 4. Initialize the Database Schema

Run the following command in your terminal to create the `Member` table in your Supabase database based on the Prisma schema:

```bash
npx prisma db push
```

If successful, you should see a message confirming that the database is now in sync with your schema.

## 5. Add Sample Data (Optional)

Since the database is initially empty, the Members page will show "No members found". To add some data:

1.  Go to your Supabase project dashboard.
2.  Click on **Table Editor** (table icon in the sidebar).
3.  Select the `Member` table.
4.  Click **Insert row**.
5.  Add some sample members (leave `id` blank as it auto-increments):
    *   First Name: John, Last Name: Doe, Email: john@example.com
    *   First Name: Jane, Last Name: Smith, Email: jane@example.com
6.  Click **Save**.

## 6. Run the Application

Now you can start the development server and navigate to the "Members" page:

```bash
npm run dev
```

The application should now fetch and display the members from your Supabase database!
