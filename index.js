require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/person");
const PORT = process.env.PORT;

morgan.token("body", (req, res) => {
  if (req.method === "POST") {
    return JSON.stringify(req.body);
  }
  return "";
});

app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

const errorHandler = (error, req, res, next) => {
  console.error(error.message);

  if (error.name === "CastError" && error.kind === "ObjectId") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }

  next(error);
};

app.get("/info", (req, res, next) => {
  Person.countDocuments({})
    .then(result =>
      res.send(`
    <p>Phonebook has info on ${result} people</p>
    <p>${new Date()}</p>
  `)
    )
    .catch(e => next(e));
});

app.get("/api/persons", (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons.map(person => person.toJSON()));
  });
});

app.get("/api/persons/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person.toJSON());
      } else {
        res.status(404).end();
      }
    })
    .catch(e => {
      console.log(e);
      next(e);
    });
});

app.delete("/api/persons/:id", (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => res.status(204).end())
    .catch(e => next(e));
});

app.post("/api/persons", (req, res, next) => {
  const body = req.body;

  const person = new Person({
    name: body.name,
    number: body.number
  });

  person
    .save()
    .then(savedPerson => res.json(savedPerson.toJSON()))
    .catch(e => {
      console.log(e);
      next(e);
    });
});

app.put("/api/persons/:id", (req, res, next) => {
  const body = req.body;
  const person = {
    number: body.number
  };

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => res.json(updatedPerson.toJSON()))
    .catch(e => next(e));
});

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
