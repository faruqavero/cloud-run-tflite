const express = require('express');
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

// Memuat model TFLite
const modelPath = './model-1.tflite';
const modelBuffer = fs.readFileSync(modelPath);
const model = tf.GraphModel.fromBuffer(modelBuffer);

// Membuat aplikasi Express
const app = express();
const port = process.env.PORT || 8080;

app.get('/', async (req, res) => {
  // Ambil teks dari query parameter
  const text = req.query.text;
  
  // Lakukan preprocessing teks sesuai kebutuhan
  
  // Lakukan klasifikasi menggunakan model TFLite
  const input = tf.tensor2d([text], [1, 1]);
  const output = model.predict(input);
  
  // Proses output sesuai kebutuhan
  
  // Mengirimkan hasil klasifikasi sebagai respons
  res.send(/* Hasil klasifikasi */);
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
