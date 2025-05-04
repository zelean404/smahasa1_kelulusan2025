function login() {
  const nis = document.getElementById('nis').value.trim();
  const dob = document.getElementById('dob').value.trim();

  // Format tanggal lahir dari input (dalam format YYYY-MM-DD)
  const formattedDob = formatInputDate(dob);

  // Cari siswa berdasarkan NIS dan tanggal lahir yang sudah diformat
  const siswa = data.find(d => d.nis == nis && formatInputDate(d.tanggal_lahir) == formattedDob);

  if (siswa) {
    // Jika ditemukan, simpan data user di localStorage
    localStorage.setItem('user', JSON.stringify({ nis: nis, tanggal_lahir: siswa.tanggal_lahir }));

    // Pindah ke halaman result.html
    window.location.href = 'result.html';
  } else {
    // Jika tidak ditemukan, tampilkan pesan kesalahan
    document.getElementById('error').innerText = 'NIS atau Tanggal Lahir salah';
  }
}

function formatInputDate(d) {
  // Misalkan d adalah dalam format YYYY-MM-DD
  const [y, m, d2] = d.split('-');
  
  // Mengembalikan tanggal dalam format DD-MM-YYYY
  return `${d2.padStart(2, '0')}-${m.padStart(2, '0')}-${y}`;
}
