# NIF


## Deployment quickstart

Frontend (Vite/React)
- Root: `/frontend`
- Build: `npm run build`
- Output: `dist` (Vite default)
- Env: set `VITE_API_BASE_URL` to the backend URL in your hosting provider (Vercel/Netlify).

Backend (Express)
- Root: `/backend`
- Start: `npm start` (uses `node server.js`)
- Env: set `EMAIL_USER` and `EMAIL_PASS` (Gmail account or app password)
- Health endpoint: `/health`

See `DEPLOYMENT.md` for detailed steps.
