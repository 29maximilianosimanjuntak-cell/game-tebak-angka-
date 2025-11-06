// Salin kode JavaScript dari Bagian 1 ke sini, atau pindahkan ke file terpisah (misal: game.js)
        // Jika Anda menempatkannya di file terpisah, ganti dengan: <script src="game.js"></script>
        
        // --- TEMP: Salin kode JS di sini jika ingin satu file HTML ---
        let angkaRahasia;
        let jumlahTebakan = 0;
        const batasBawah = 1;
        const batasAtas = 100;

        function mulaiPermainan() {
            angkaRahasia = Math.floor(Math.random() * (batasAtas - batasBawah + 1)) + batasBawah;
            jumlahTebakan = 0;

            document.getElementById('pesan').innerHTML = "Saya sudah memikirkan angka antara 1 dan 100. Coba tebak!";
            document.getElementById('tebakanInput').value = '';
            document.getElementById('tebakanInput').disabled = false;
            document.getElementById('tombolTebak').disabled = false;
            document.getElementById('jumlahTebakan').textContent = "Tebakan ke-0";
        }

        function prosesTebakan() {
            const inputTebakan = document.getElementById('tebakanInput').value;
            const tebakanSiswa = parseInt(inputTebakan);
            
            const elemenPesan = document.getElementById('pesan');
            const elemenJumlahTebakan = document.getElementById('jumlahTebakan');

            if (isNaN(tebakanSiswa) || tebakanSiswa < batasBawah || tebakanSiswa > batasAtas) {
                elemenPesan.innerHTML = `⚠️ Mohon masukkan angka yang valid antara ${batasBawah} dan ${batasAtas}.`;
                return;
            }

            jumlahTebakan++;
            elemenJumlahTebakan.textContent = `Tebakan ke-${jumlahTebakan}`;

            if (tebakanSiswa < angkaRahasia) {
                elemenPesan.innerHTML = `⬇️ **${tebakanSiswa} Terlalu Rendah!** Coba lagi.`;
            } else if (tebakanSiswa > angkaRahasia) {
                elemenPesan.innerHTML = `⬆️ **${tebakanSiswa} Terlalu Tinggi!** Coba lagi.`;
            } else {
                elemenPesan.innerHTML = `🎉 **Selamat!** Anda berhasil menebak angka ${angkaRahasia} dalam ${jumlahTebakan} tebakan.`;
                
                document.getElementById('tebakanInput').disabled = true;
                document.getElementById('tombolTebak').disabled = true;
            }
            
            document.getElementById('tebakanInput').value = '';
        }

        // Mulai permainan saat script dimuat
        mulaiPermainan();
        // --- AKHIR KODE JS ---