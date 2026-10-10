# ⚡ CASSANOVA — Clash Meta (Mihomo) Converter

Konverter link akun proxy menjadi **config Clash.Meta / Mihomo** siap pakai, berjalan **sepenuhnya di perangkat** (tanpa server). Satu file HTML, tanpa dependensi.

🌐 **Live:** https://clash.cassanova.my.id

---

## 📦 Protokol yang didukung

`VLESS` · `VMess` · `Trojan` · `Shadowsocks` · `ShadowsocksR` · `Hysteria2` · `Hysteria v1` · `TUIC` · `AnyTLS` · `SOCKS`

Plus **ingest config Clash YAML** apa adanya (passthrough semua tipe, termasuk `WireGuard`).

---

## ✨ Fitur

### Grup bawaan
Semua trafik masuk lewat selektor **🚀 Proxy**, berisi:
`♻️ Best Ping` (url-test) · `⚖️ Load Balance` · `🔁 Fallback` · `🌐 Global` (manual) · `🛑 AdBlock`

Opsional: **🎬 Streaming** (unlock), **grup per region** (otomatis dari bendera), **bagi akun ke beberapa grup**, dan **pisah grup per protokol**.

### Anti-blokir & performa
- Fingerprint **uTLS chrome** di semua node TLS (`global-client-fingerprint`) — tahan DPI
- **Sniffer** selalu aktif (SNI/Host) + fake-ip anti-leak
- `unified-delay` + `tcp-concurrent` — ping akurat & koneksi multi-IP paralel
- Health-check hemat baterai: `lazy` + `expected-status: 204` + `timeout` + `max-failed-times`
- `find-process-mode: off` — hemat CPU/baterai di HP
- **Mirror unduhan** (ghproxy, default) untuk geo-database & rule AdBlock — anti-blokir GitHub

### AdBlock (3 sumber)
- **Gabungan** (default): geosite umum + list lokal Indonesia (malikshi) + anti-hijack/privacy
- **Geosite** saja — **Lokal ID** saja
- Bisa dimatikan per situs lewat grup **🛑 AdBlock** di aplikasi Clash (REJECT → DIRECT)

### Routing
- **Profil aturan**: Lengkap (default, geosite iklan/privat, direct lokal/bank/gov Indonesia, STUN, GEOIP ID) atau Minimal
- **Blokir QUIC**: hanya video (disarankan) / semua UDP 443 / tidak — hemat kuota tunnel
- **Konten porno** (blokir) · **Game** (tunnel/direct/default) · **Telegram lancar** (skip-sniff)

### DNS
- Fake-IP + `respect-rules` + `nameserver-policy` (domain lokal `.id` → DNS sistem)
- **Penyedia DNS**: Cloudflare / Google / AdGuard / Quad9 / **Custom** (isi DoH/DoT/DoQ/IP sendiri)
- `prefer-h3`, `use-hosts` + hosts statis, `cache-algorithm: arc`, `fake-ip-filter` berbasis geosite
- **DNS ISP lokal** (opsional) · **DNS anti-poisoning** (fallback + GeoIP CN)

### Input / Output
- Tempel link (satu per baris), **subscription Base64**, **config Clash YAML**, atau **impor file** (.txt/.yaml)
- Output **config Clash penuh** siap pakai (TUN + fake-ip DNS + grup + aturan) — ada **ringkasan** (grup/aturan/proxy)

### Alat per-node
- **Edit node** (nama, server/bug, port, SNI, host, UUID/password) — termasuk node hasil ingest YAML
- **Ganti bug host / SNI massal** untuk semua node sekaligus
- **Bendera massal** (hanya akun yang dicentang) · deteksi bendera **otomatis** (~23 negara)
- **QR per node** · salin link · urutkan (naik/turun & drag) · buang akun (hapus centang)

### UX
- **Setelan lanjutan**: Tumpukan TUN, URL cek kecepatan, Port, Secret, IPv6, Mirror, geo auto-update
- **Reset setelan** ke default · **tema terang/gelap** · **bahasa EN/ID**
- **PWA** (bisa di-install + offline via `sw.js`), setelan terakhir diingat otomatis

---

## 🚀 Cara pakai

1. Buka https://clash.cassanova.my.id
2. Tempel link akun (satu per baris), atau isi subscription Base64 / config Clash YAML (bisa juga **Impor** file).
3. Atur pengaturan bila perlu (default sudah optimal), lalu tekan **⚡ Buat Config Clash**.
4. **Unduh** (atau **Salin**) config, lalu impor ke **CMFA / FlClash / Clash Verge**, atau pakai di core **Mihomo**.
5. Dashboard (jika controller aktif): `http://127.0.0.1:9090`.

---

## 🔒 Privasi

Semua pemrosesan terjadi di perangkat — **link akun tidak dikirim ke mana pun**.

> Catatan: profil **Lengkap** / AdBlock / Mirror mengunduh database geosite & geoip dari core **sekali** saat pertama berjalan. Mirror default (ghproxy) menyalurkan unduhan database lewat pihak ketiga agar lancar saat GitHub diblokir ISP — bisa diubah ke "Langsung" di Setelan lanjutan.

---

## 👤 Pengembang

Dibuat dan dipelihara oleh **amiercassanova**.

- 💬 Telegram: [@kang_rebahan](https://t.me/kang_rebahan)
- 📱 WhatsApp: [Hubungi](https://wa.link/3yhb8f)

---

Developed with ❤️ by **amiercassanova** • Powered by Clash.Meta (Mihomo)
