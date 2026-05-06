# Bless Stuff E-Catalog

Static frontend untuk katalog thrift Bless Stuff. Website ini bisa langsung dideploy ke Vercel dari root project karena memakai `index.html`, `blogs.html`, `styles.css`, dan `script.js` tanpa backend.

## Edit Data Produk

Semua data konten ada di `script.js`.

Yang paling sering diganti:

- `STORE.whatsappNumber`
- `shopeeUrl` per produk
- `name`, `price`, `size`, `condition`, `color`, dan `note`
- `assets/blessstuff.jpeg` untuk logo utama
- `products` untuk stok dan katalog barang. Saat ini katalog diisi 7 produk atasan.
- `blogs` untuk berita/blog di halaman `blogs.html`
- Foto produk disimpan di folder `assets`

## Update Tanpa Backend

Website ini bisa berjalan tanpa backend. Untuk update stok, foto, atau blog, edit file `script.js`,
tambahkan foto ke folder `assets`, lalu deploy ulang ke Vercel. Kalau ingin update lewat dashboard
admin atau form tanpa menyentuh kode, gunakan CMS/headless service seperti Google Sheets, Notion,
Sanity, atau GitHub-based CMS.

## Deploy ke Vercel

1. Push folder ini ke repository GitHub.
2. Import repository dari dashboard Vercel.
3. Framework preset: `Other`.
4. Build command dikosongkan.
5. Output directory dikosongkan.
6. Atur project name menjadi `blessstuff` agar URL default menjadi `blessstuff.vercel.app`.
