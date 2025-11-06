// Variabel Global
let angkaRahasia;
let jumlahTebakan = 0;
const batasBawah = 1;
const batasAtas = 100;

// Ambil elemen HTML
const inputTebakan = document.getElementById('tebakanInput');
const tombolTebak = document.getElementById('tombolTebak');
const tombolReset = document.getElementById('tombolReset');
const elemenPesan = document.getElementById('pesan');
const elemenJumlahTebakan = document.getElementById('jumlahTebakan');

// Fungsi untuk memulai atau mereset permainan
function mulaiPermainan() {
    // 1. Komputer "memikirkan" angka 1-100
    angkaRahasia = Math.floor(Math.random() * (batasAtas - batasBawah + 1)) + batasBawah;
    jumlahTebakan = 0;

    // 2. Reset tampilan dan status
    elemenPesan.textContent = "Masukkan tebakan pertama Anda!";
    elemenPesan.className = 'message'; // Hapus kelas warna
    elemenJumlahTebakan.textContent = `Tebakan: ${jumlahTebakan}`;
    
    inputTebakan.value = '';
    inputTebakan.disabled = false;
    tombolTebak.disabled = false;
    console.log("Angka rahasia (untuk debugging):", angkaRahasia); // Opsional: Hapus ini saat rilis
}

// Fungsi utama untuk memproses tebakan siswa
function prosesTebakan() {
    const tebakanSiswa = parseInt(inputTebakan.value);
    
    // Validasi input
    if (isNaN(tebakanSiswa) || tebakanSiswa < batasBawah || tebakanSiswa > batasAtas) {
        elemenPesan.textContent = `⚠️ Masukkan angka yang valid (1-100)!`;
        elemenPesan.className = 'message high';
        return; 
    }

    jumlahTebakan++;
    elemenJumlahTebakan.textContent = `Tebakan: ${jumlahTebakan}`;
    inputTebakan.value = ''; // Kosongkan input setelah tebakan

    // Logika perbandingan dan petunjuk real-time
    if (tebakanSiswa < angkaRahasia) {
        // Petunjuk: Terlalu Rendah!
        elemenPesan.textContent = `⬇️ **${tebakanSiswa} Terlalu Rendah!** Coba lagi.`;
        elemenPesan.className = 'message low';
    } else if (tebakanSiswa > angkaRahasia) {
        // Petunjuk: Terlalu Tinggi!
        elemenPesan.textContent = `⬆️ **${tebakanSiswa} Terlalu Tinggi!** Coba lagi.`;
        elemenPesan.className = 'message high';
    } else {
        // Jawaban Benar!
        elemenPesan.textContent = `🎉 **Selamat!** Anda berhasil menebak angka ${angkaRahasia} dalam ${jumlahTebakan} tebakan.`;
        elemenPesan.className = 'message correct';
        
        // Nonaktifkan input setelah menang
        inputTebakan.disabled = true;
        tombolTebak.disabled = true;
    }
}

// Tambahkan Event Listener
// 1. Tombol Tebak
tombolTebak.addEventListener('click', prosesTebakan);

// 2. Tombol Reset
tombolReset.addEventListener('click', mulaiPermainan);

// 3. Memungkinkan tebakan dengan menekan 'Enter' di input
inputTebakan.addEventListener('keyup', function(event) {
    // Nomor 13 adalah kode tombol 'Enter'
    if (event.key === 'Enter') {
        prosesTebakan();
    }
});

// Panggil fungsi ini saat script dimuat untuk memulai game
mulaiPermainan();