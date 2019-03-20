import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req,res) => {
 res.status(200).json({
 message: 'Hello WDI-infinty'
 });
});


app.listen(port, () => console.log(`express-api app listening on port ${port}`));