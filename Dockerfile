# Menggunakan node versi 20 sebagai base image
FROM node:20

# Menentukan working directory di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Menyalin seluruh file project ke dalam container
COPY . .

# Menentukan port yang akan digunakan
EXPOSE 3033

# Menjalankan aplikasi
CMD ["node", "app.js"]
