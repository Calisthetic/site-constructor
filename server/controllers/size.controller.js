const db = require('../db');
const table_name = 'size';

class SizeController {
  async createSize(req, res) {
    try {
      const { width, height, layer } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (width, height, layer) values ($1, $2, $3) RETURNING *',
        [width, height, layer]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getSize(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOneSize(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where id = $1', [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updateSize(req, res) {
    try {
      const { id, width, height, layer } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set width = $1, height = $2, layer = $3 where id = $4 RETURNING *',
        [width, height, layer, id]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deleteSize(req, res) {
    try {
      const id = req.params.id;
      const deleted_elem = await db.query('DELETE FROM ' + table_name + ' where id = $1', [id]);
      if (deleted_elem.rowCount === 1) {
        res.status(200).send([{'message': 'Successfully deleted!'}])
      } else { 
        (res.send([{'message': 'Does not exist...'}])) 
      }
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
}

module.exports = new SizeController();
