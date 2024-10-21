# Image Conversion Microservice

## Deskripsi
Ini adalah microservice sederhana yang mengubah gambar ke format WEBP dengan kompresi 60%. Microservice ini menggunakan autentikasi HMAC SHA-512 untuk memastikan integritas data yang dikirim melalui request.

### Fitur Utama:
- Mengubah gambar dari URL menjadi format WEBP dengan tingkat kompresi yang disesuaikan.
- Mendukung autentikasi dengan HMAC SHA-512.
- Menangani berbagai skenario error, seperti URL gambar kosong, kegagalan mengambil gambar, dan error konversi gambar.

---

## Persyaratan Sistem
- Node.js (versi >= 16)
- Docker (untuk setup container)
- Postman atau cURL (untuk testing API)

## Instalasi dan Menjalankan Project Secara Lokal

### 1. Clone Repository
```bash
git clone https://github.com/habibdani/Image_Conversion_Microservice.git
cd Image_Conversion_Microservice
