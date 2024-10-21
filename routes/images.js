const express = require('express');
const sharp = require('sharp');
const axios = require('axios');
const router = express.Router();

// Endpoint untuk konversi gambar ke WEBP
router.post('/convert', async (req, res) => {
    const { url_gambar, persentase_kompresi } = req.body;

    // Validasi input
    if (!url_gambar || !persentase_kompresi) {
        return res.status(400).json({ status: 'error', message: 'url_gambar and persentase_kompresi are required' });
    }

    try {
        // Ambil gambar dari URL
        const response = await axios({
            url: url_gambar,
            responseType: 'arraybuffer',
        });
        const imageBuffer = Buffer.from(response.data);

        // Kompres dan konversi ke WEBP
        const webpBuffer = await sharp(imageBuffer)
            .webp({ quality: parseInt(persentase_kompresi) })
            .toBuffer();

        // Response sukses
        res.json({
            url_webp: 'data:image/webp;base64,' + webpBuffer.toString('base64'),
            ukuran_webp: webpBuffer.length,
            status: 'success',
            message: 'Image converted successfully',
        });
    } catch (error) {
        // Tangani error saat mengambil gambar atau konversi
        res.status(500).json({ status: 'error', message: 'Failed to process the image: ' + error.message });
    }
});

module.exports = router;
