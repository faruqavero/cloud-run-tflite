# Menggunakan runtime Node.js 20
FROM node:20

# Menyalin file ke dalam direktori kerja kontainer
WORKDIR /app
COPY . .

# Menginstal dependensi
RUN npm install

# Menjalankan server saat kontainer dimulai
CMD [ "npm", "start" ]
