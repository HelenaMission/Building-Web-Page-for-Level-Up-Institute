// Module Imports
const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const cors = require("cors");

//Enable express
const app = express();

// Middlewares
app.use(cors("http://localhost:3000"));
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/", (req, res) => {
  res.send("Hey the backend is connected.");
});

// Jene's Endpoints here

app.post("/api/login/student", (req, res) => {
  const { emailLogin, passwordLogin } = req.body;
  const sqlCredentialsCheck = "SELECT * FROM student WHERE email = ? AND password = ?";
  const sqlStudentInfo = `
    SELECT student.*, teacher.teacher_name
    FROM student
    JOIN teacher ON student.teacher_id = teacher.teacher_id
    WHERE student.student_id = ?
  `;

  pool.query(sqlCredentialsCheck, [emailLogin, passwordLogin], (err, result) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      if (result.length > 0) {
        const studentID = result[0].student_id;

        pool.query(sqlStudentInfo, [studentID], (err, studentResult) => {
          if (err) {
            console.error("Error executing SQL query:", err);
            res.status(500).json({ error: "Internal server error" });
          } else {
            if (studentResult.length > 0) {
              const studentInfo = studentResult[0];
              res.json({
                message: "Login successful",
                student_id: studentInfo.student_id,
                name: studentInfo.name,
                email: studentInfo.email,
                school: studentInfo.school,
                profile_pic: studentInfo.profile_pic,
                date_of_birth: studentInfo.date_of_birth,
                contact_number: studentInfo.contact_number,
                course: studentInfo.course,
                teacher_name: studentInfo.teacher_name,
              });
            } else {
              res.status(401).json({ error: "Invalid email or password" });
            }
          }
        });
      } else {
        res.status(401).json({ error: "Invalid email or password" });
      }
    }
  });
});

app.post("/api/login/teacher", (req, res) => {
  const { emailLogin, passwordLogin } = req.body;
  const sqlLoginCheck = `
    SELECT * FROM teacher WHERE email = ? AND password = ?`;

  pool.query(sqlLoginCheck, [emailLogin, passwordLogin], (err, result) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      if (result.length > 0) {
        const teacherInfo = result[0];
        res.json({
          message: "Login successful",
          teacher_id: teacherInfo.teacher_id,
          teacher_name: teacherInfo.teacher_name,
          email: teacherInfo.email,
          school: teacherInfo.school,
          profile_pic: teacherInfo.profile_pic,
          date_of_birth: teacherInfo.date_of_birth,
          contact_number: teacherInfo.contact_number,
        });
      } else {
        res.status(401).json({ error: "Invalid email or password" });
      }
    }
  });
});

app.post("/api/signup/student", (req, res) => {
  const email = req.body.email;

  pool.execute("SELECT * FROM student WHERE email = ?", [email], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    if (result.length > 0) {
      return res.status(409).json({ message: "Email already exists." });
    } else {
      const query = "INSERT INTO student (name, email, password) VALUES (?, ?, ?);";
      const { name, password } = req.body;

      pool.execute(query, [name, email, password], (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }

        res.sendStatus(201);
      });
    }
  });
});

app.post("/api/signup/teacher", (req, res) => {
  const email = req.body.email;

  pool.execute("SELECT * FROM teacher WHERE email = ?", [email], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    if (result.length > 0) {
      return res.status(409).json({ message: "Email already exists." });
    } else {
      const query = "INSERT INTO teacher (teacher_name, email, password) VALUES (?, ?, ?);";
      const { name, password } = req.body;

      pool.execute(query, [name, email, password], (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }

        res.sendStatus(201);
      });
    }
  });
});

// Helena's Endpoints here
//1st page
app.get("/api/teacherProfileViewer", (req, res) => {
  pool.query("SELECT * FROM teacher", [req.params.id], (err, result) => {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

//2nd page
app.get("/api/helpRequests", (req, res) => {
  const teacher_id = req.query.teacher_id;

  pool.query(
    "SELECT help_request.*, student.name, student.profile_pic, student.gender FROM help_request JOIN student ON help_request.student_id = student.student_id JOIN teacher ON student.teacher_id = teacher.teacher_id WHERE teacher.teacher_id = ?;",
    [teacher_id],
    function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
      }
      console.log(result);
      res.send(result);
    }
  );
});

app.post("/api/markAsDone", (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  pool.query("UPDATE help_request SET done= '1' WHERE request_id = ?", [id], function (err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to mark request as done" });
    }
    res.json({ message: "Request marked as done successfully" });
  });
});

//3rd page
app.get("/api/teacherProjectLibrary/:id", (req, res) => {
  pool.query("SELECT * FROM teacher WHERE teacher.teacher_id = ?", [req.params.id], (err, result) => {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

// Jorge's Endpoints here
//1st page
app.get("/api/studentsByTeacher", (req, res) => {
  const teacher_id = req.query.teacher_id;
  const query = "SELECT * FROM student WHERE teacher_id = ?;";

  pool.query(query, [teacher_id], function (err, result) {
    if (err) {
      console.log("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(result);
  });
});

// 1st page - Projects data
app.get("/api/projects", (req, res) => {
  pool.query("SELECT * FROM project;", function (err, result) {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

// 1st page - Student Projects data
app.get("/api/studentProjects", (req, res) => {
  pool.query("SELECT * FROM student_projects;", function (err, result) {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

//2nd page - Student data
app.get("/api/studentProfiles", (req, res) => {
  pool.query("SELECT * FROM student;", function (err, result) {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

// Jimson's Endpoints here
//1st page PROJECT LIBRARY PAGE
app.get('/api/projects', (req, res) => {
    pool.query(`SELECT * FROM project;`, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Page resources can not be found");
        } else {
            res.send(result);
        }
    })
});

//2nd page STUDENT PROFILE VIEWER PAGE
app.get('/api/student/:id', (req, res) => {
    pool.query(` SELECT student.* , teacher.teacher_name FROM student JOIN teacher 
        ON student.teacher_id = teacher.teacher_id WHERE student.student_id = ?;`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Student can not be found");
            } else {
                res.send(result);
            }
        })
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`)).on("error", (error) => console.error(error));
