# ⚡ CASSANOVA — Clash Meta (Mihomo) Converter

Konverter link akun proxy menjadi **config Clash.Meta / Mihomo** siap pakai, berjalan sepenuhnya di HP (tanpa server). Satu file HTML, tanpa dependensi.

🌐 **Live:** https://clash.cassanova.my.id

---

## ✨ Fitur

**Grup bawaan** (semua di bawah `🚀 Proxy`): `♻️ Best Ping` (url-test), `⚖️ Load Balance`, `🔁 Fallback`, `🌐 Global`, `🛑 AdBlock`.

**Anti-blokir & hemat baterai**
- Fingerprint uTLS (`client-fingerprint` + `global-client-fingerprint`) di semua node TLS
- Health-check `lazy` + `expected-status: 204`, sniffer selalu aktif

**Routing & DNS**
- Profil aturan **Minimal / Lengkap** (geosite iklan+privat, direct lokal/bank/gov Indonesia, STUN, GEOIP ID)
- DNS fake-ip, `respect-rules`, `nameserver-policy`, `fake-ip-filter` untuk STUN/NTP/push

**Input / Output**
- Ingest **config Clash YAML** + subscription Base64 + Ambil-dari-URL (opsional)
- Output **config penuh** atau **proxy-provider**

**UX**
- Profil tersimpan, setelan lanjutan (fingerprint, IPv6, port, secret, test-url, strategi LB, tun stack)
- QR per node, salin link, urutkan, bendera massal
- PWA (installable + offline via `sw.js`)

---

## 📦 Protokol yang didukung

`VLESS` · `VMess` · `Trojan` · `Shadowsocks` · `ShadowsocksR` · `Hysteria2` · `Hysteria v1` · `TUIC` · `AnyTLS` · `SOCKS` — plus passthrough apa pun dari config Clash YAML (termasuk WireGuard).

---

## 🚀 Cara pakai

1. Buka https://clash.cassanova.my.id
2. Tempel link akun (satu per baris) atau isi subscription / config Clash YAML.
3. Atur pengaturan (opsional), lalu tekan **⚡ Buat Config Clash**.
4. **Unduh** config dan impor ke CMFA / FlClash / Clash Verge, atau salin ke core Mihomo.
5. Dashboard (jika controller aktif): `http://127.0.0.1:9090`.

---

## 🔒 Privasi

Semua pemrosesan terjadi di perangkat. Link akun tidak dikirim ke mana pun — kecuali fitur **Ambil-dari-URL** yang memakai proxy pihak ketiga untuk menembus CORS.

> Catatan: profil aturan **Lengkap** / AdBlock mengunduh database geosite & geoip dari core **sekali** saat pertama berjalan.

---

## 👤 Pengembang

Dibuat oleh **amiercassanova**.

- 💬 Telegram: [@kang_rebahan](https://t.me/kang_rebahan)
- 📱 WhatsApp: [Hubungi](https://wa.link/3yhb8f)

---

Developed with ❤️ by **amiercassanova** • Powered by Clash.Meta (Mihomo)
