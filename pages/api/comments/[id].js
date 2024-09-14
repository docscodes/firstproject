import comments from '../comments.json';

export default (req, res) => {

  switch (req.method) {

    case 'GET':
      res.status(200).json({ 
        post: req.query.id, 
        comments 
      });
      break;

    case 'POST':
      //...
      break;

    default:
      res.status(405).end();
      break;
  }
}