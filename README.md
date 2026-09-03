# StudyHub - פלטפורמה לשיתוף תוכן לימודי

StudyHub היא מערכת Full-End מתקדמת המיועדת לסטודנטים לשם שיתוף, ניהול והעלאה של חומרי לימוד וסיכומים אקדמיים.

## ארכיטקטורת הקוד

הפרויקט בנוי כ-single עם הפרדה ברורה בין צד הלקוח (Frontend) לצד השרת (Backend):

frontend (React SPA):
components - רכיבי ממשק משתמש מתעדכנים.
    api - הגדרות Axios וניהול קריאות לשרת.
  - ניהול State משולב המשתמש ב-Context API וב-Redux.
  backend (Node.js & Express):
    models - סכימות ומודלים של Mongoose לעבודה מול MongoDB.
    routes - נתיבי ה-REST API (כולל אימות משתמשים וניהוב קבצים).
    middleware - פונקציות ביניים לאבטחה, אימות JWT וטיפול בשגיאות גלובליות.

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
צד הלקוח:https://moamen-io9m-q39ia149j-moamen11.vercel.app/login
צד השרת https://project-backend-moamenn.onrender.com
