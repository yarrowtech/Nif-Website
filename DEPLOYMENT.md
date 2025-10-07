Deployment notes

Overview
- Frontend: Vite + React app located in `/frontend`. Designed to be deployed to Vercel (recommended) or Netlify.
- Backend: Express server located in `/backend`. Small API with a single `/api/contact` route that uses nodemailer to send emails. Designed to be deployed to Render (recommended) or Heroku.

Important environment variables

Backend (set these on Render/Heroku):
- EMAIL_USER: Gmail account used to send mails
- EMAIL_PASS: Password or app-password for the Gmail account
- PORT: (optional) Render/Heroku will set this automatically

Frontend (set these on Vercel/Netlify):
- VITE_API_BASE_URL: Full URL of the deployed backend (e.g. https://nif-backend.onrender.com)

Backend checks
- A health endpoint is available at `/health` which returns { status: 'ok' }.

Deploying frontend to Vercel
1. In Vercel dashboard, import the project from your Git repo.
2. Set the root directory to `/frontend`.
3. Set build command: `npm run build` and output directory: `dist` (Vite default).
4. Add environment variable `VITE_API_BASE_URL` to point to your backend URL.
5. Deploy.

Deploying backend to Render (Recommended)
1. In Render dashboard, create a new Web Service and connect your Git repo.
2. Set the root to `/backend`.
3. Set build command: `npm install` (Render will run this automatically) and start command: `npm start`.
4. Add environment variables `EMAIL_USER` and `EMAIL_PASS`.
5. Deploy. Render will provide the public URL; use that in `VITE_API_BASE_URL` on the frontend.

Notes and troubleshooting
- Nodemailer with Gmail may require enabling "Less secure apps" or creating an App Password if the account has 2FA. Prefer creating an App Password and using that as `EMAIL_PASS`.
- If you plan to use Vercel for both frontend and backend, Vercel's Serverless Functions can be used instead of Render; the current backend is a long-running Express server and maps more naturally to Render/Heroku.
- Verify CORS if you change domain names; the server currently uses `cors()` with default settings (allows all origins).

"Try it" locally
- Backend: from `/backend` run

  npm install
  npm run dev

- Frontend: from `/frontend` run

  npm install
  npm run dev

Then visit `http://localhost:5173` (Vite) and ensure forms submit successfully to `http://localhost:5000/api/contact`.
