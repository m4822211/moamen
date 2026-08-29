# StudyHub - פלטפורמה לשיתוף תוכן לימודי[cite: 1]

StudyHub היא מערכת Full-End[cite: 1] מתקדמת המיועדת לסטודנטים לשם שיתוף, ניהול והעלאה של חומרי לימוד וסיכומים אקדמיים[cite: 1].

## ארכיטקטורת הקוד

הפרויקט בנוי כ-Single Page Application (SPA)[cite: 1] עם הפרדה ברורה בין צד הלקוח (Frontend) לצד השרת (Backend):

- **`frontend/`** (React SPA)[cite: 1]:
  - `components/` - רכיבי ממשק משתמש מתעדכנים.
  - `api/` - הגדרות Axios[cite: 1] וניהול קריאות לשרת.
  - ניהול State משולב המשתמש ב-Context API וב-Redux[cite: 1].
- **`backend/`** (Node.js & Express)[cite: 1]:
  - `models/` - סכימות ומודלים של Mongoose[cite: 1] לעבודה מול MongoDB.
  - `routes/` - נתיבי ה-REST API[cite: 1] (כולל אימות משתמשים וניהוב קבצים).
  - `middleware/` - פונקציות ביניים לאבטחה, אימות JWT[cite: 1] וטיפול בשגיאות גלובליות[cite: 1].

---

## משתני סביבה (Environment Variables - .env)

על מנת להריץ את השרת, יש ליצור קובץ `.env` בתוך תיקיית ה-`backend` ולהגדיר את המשתנים הבאים:

| משתנה | תיאור | דוגמה לערך |
| :--- | :--- | :--- |
| `PORT` | פורט להפעלת שרת ה-Express | `5000` |
| `MONGO_URI` | מחלקת החיבור לבסיס הנתונים MongoDB Atlas | `mongodb+srv://<user>:<password>@cluster...` |
| `JWT_SECRET` | מפתח סודי ליצירת אסימוני אימות (JWT) | `your_super_secret_jwt_key` |

---

## קישורים לפרויקט החי
צד הלקוח https://moamen-io9m-hg6bylg72-moamen11.vercel.app/login
צד השרת https://project-backend-moamenn.onrender.com
