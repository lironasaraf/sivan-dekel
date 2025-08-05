# Welcome to Your Project

## 🌐 Live Site
**URL**: [https://sivandekel.com](https://sivandekel.com)

---

## 🛠 How to Edit the Code

### 1. Edit Locally with Your IDE

To work locally:

```bash
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

✅ Make sure you have **Node.js** and **npm** installed.  
We recommend using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage Node versions.

---

### 2. Edit Directly in GitHub

- Navigate to the file you want to change.
- Click the pencil icon ("Edit").
- Make your changes and commit.

---

## 🚀 Deployment Instructions (Firebase Hosting)

This project is deployed using **Firebase Hosting**.

To deploy manually:

```bash
# Login to Firebase
firebase login

# Initialize the project (if not already)
firebase init

# Deploy the site
firebase deploy
```

Make sure the Firebase project ID is correct in both `firebase.json` and `.firebaserc`.

---

## ✉️ Email Setup (Resend)

This project uses **[Resend](https://resend.com)** for sending emails.

### Setup Instructions:

1. Create a free account at [resend.com](https://resend.com).
2. Create a new **API key** from the dashboard.
3. Add the key to your `.env` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
```

4. Update the sender email in `src/lib/email.ts` or your email function logic as needed.

> Note: Emails will not send without a valid API key.

---

## ⚙️ Technologies Used

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS
- Firebase Hosting
- Resend (email service)

---

## 🌍 Custom Domain

This site is connected to a custom domain:  
[https://sivandekel.com](https://sivandekel.com)

To manage the domain:
- Go to **Firebase Console** → **Hosting** → **Custom Domain**
- Ensure DNS settings are correctly configured with your domain provider.

---

## 🙋‍♀️ Need Help?

If something isn't working, check:
- That Firebase is correctly configured (`firebase.json`, `.firebaserc`)
- That your `.env` file includes the necessary environment variables
- That your DNS is correctly pointing to Firebase Hosting IPs