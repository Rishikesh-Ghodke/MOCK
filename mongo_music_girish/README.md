# Mongo Music Girish

A Node.js + Express + MongoDB app to manage and view a music songs collection.

---

## Prerequisites

- Ubuntu (fresh install)
- Internet connection

---

## Installation & Setup

### 1. Update System

```bash
sudo apt update
sudo apt upgrade -y
```

### 2. Install Node.js and npm

```bash
sudo apt install -y nodejs npm
```

### 3. Install MongoDB

```bash
sudo apt install -y mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

### 4. Install MongoDB Shell (`mongosh`)

```bash
sudo apt install -y mongodb-clients
```

### 5. (Optional) Install MongoDB Compass (GUI)

- Download the `.deb` from [MongoDB Compass Downloads](https://www.mongodb.com/try/download/compass)
- Install:
  ```bash
  sudo dpkg -i ~/Downloads/mongodb-compass_*_amd64.deb
  sudo apt-get install -f
  ```

### 6. Clone or Copy the Project

If using Git:
```bash
git clone <your-repo-url>
cd mongo_music_girish
```
Or copy the folder and `cd` into it.

### 7. Install Project Dependencies

```bash
npm install
```

### 8. Start the Application

```bash
node app.js
```
Or, if you want auto-reload:
```bash
npx nodemon app.js
```

### 9. Insert Sample Data

Visit in your browser:
```
http://localhost:3000/insert
```

---

## Viewing Data in MongoDB

### Using MongoDB Shell (`mongosh`)

**Step-by-step commands:**

```bash
mongosh
```

```mongodb
use music
show collections
db.songs.find().pretty()
```

- `mongosh` — Start the MongoDB shell.
- `use music` — Switch to the `music` database.
- `show collections` — List all collections in the database.
- `db.songs.find().pretty()` — Display all documents in the `songs` collection in a readable format.

---

### Using MongoDB Compass

1. Open MongoDB Compass.
2. Connect to: `mongodb://localhost:27017`
3. Browse the `music` database and `songs` collection.

---

## Application Usage

- **Homepage:** [http://localhost:3000/](http://localhost:3000/)
- **Insert Sample Songs:** [http://localhost:3000/insert](http://localhost:3000/insert)
- **Add, Update, Delete, and Filter Songs:** Use the forms on the homepage.

---

## Notes

- The database and collection are created automatically on first insert.
- The app uses EJS for views and Mongoose for MongoDB interaction.

---