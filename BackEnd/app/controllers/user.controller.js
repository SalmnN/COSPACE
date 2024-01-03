import uCospace from "../models/user.model.js";
import { sequelize } from '../config/db.config.js';

export function create(req, res) {
  if (!req.body.name) {
    return res.status(400).send({
      message: "Title can not be empty",
    });
  };
  
  const cs = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  uCospace.create(cs)
    .then((data) => {
      res.json({
        message: "data created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the Book.",
        data: null,
      });
    });

}
export function createL(req, res) {
  if (!req.body.email) {
    return res.status(400).send({
      message: "Title can not be empty",
    });
  };
  
  const csL = {
    email: req.body.email,
    password: req.body.password,
  };

  uCospace.create(csL)
    .then((data) => {
      res.json({
        message: "data created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the Book.",
        data: null,
      });
    });

}

export function findAll(req, res) {
  uCospace.findAll()
    .then((users) => {
      res.json({
        message: "All users retrieved successfully.",
        data: users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving users.",
        data: null,
      });
    });
}

export function update(req, res) {
  const id = req.params.id;
  uCospace.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Book updated successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot update book with id=${id}. Maybe book was not found or req.body is empty!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while updating the book.",
        data: null,
      });
    });
}

export function _delete(req, res){
  const id = req.params.id;
  uCospace.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "data deleted successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot delete book with id=${id}. Maybe book was not found!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while deleting the book.",
        data: null,
      });
    });
};

export function findOne(req, res) {
  uCospace.findByPk(req.params.id)
    .then((cs) => {
    res.json({
        message: "data retrieved successfully.",
        data: cs,
    });
    })
    .catch((err) => {
    res.status(500).json({
        message: err.message || "Some error occurred while retrieving book.",
        data: null,
    });
    });
}
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const query = 'SELECT id, name, email, password FROM Users WHERE email = ? AND password = ?';
    const results = await sequelize.query(query, {
      replacements: [email, password],
      type: sequelize.QueryTypes.SELECT,
    });

    if (results.length === 1) {
      const user = results[0];
      return res.status(200).json({ user, message: 'Login successful' });
    } else {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function account(req, res) {
  try {
    const userId = parseInt(req.params.id);


    const user = await uCospace.findByPk(userId);

    if (user) {
      res.status(200).json({ data: { id: user.id, name: user.name, email: user.email } });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



