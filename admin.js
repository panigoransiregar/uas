var aktivitasPenggunaContoh = [
    { username: 'Jack Ma', activity: 'Baru saja Login' },
    { username: 'Mark@134562', activity: 'Baru saja membuka coloums Sejarah' },
    { username: 'Elon Musk', activity: 'Baru saja Berkomentar di Forum' },
    { username: 'Ada Lovelace', activity: 'Menyelesaikan Modul Kursus' },
    { username: 'Grace Hopper', activity: 'Melakukan Ujian Online' }
];

function ambilAktivitasPengguna() {
    return aktivitasPenggunaContoh;
}


var komentarContoh = [
    { username: 'Admin', comment: 'Selamat datang di e-Learning! Jika Anda memiliki pertanyaan, jangan ragu untuk bertanya.' },
    { username: 'Jack Ma', comment: 'Terima kasih atas pengalaman belajar yang luar biasa di platform ini.' },
    { username: 'Mark@134562', comment: 'Saya suka dengan fitur-fitur baru yang diperkenalkan! Sangat membantu.' },
    { username: 'Elon Musk', comment: 'Bagaimana cara mengakses materi terkait teknologi terkini?' },
    { username: 'Grace Hopper', comment: 'Sangat mudah digunakan dan materinya terstruktur dengan baik.' },
    { username: 'Admin', comment: 'Terima kasih atas umpan balik positif Anda, Elon! Anda dapat mengakses materi terkini di menu "Sejarah".' }
];

function ambilKomentar() {
    return komentarContoh;
}


function tampilkanAktivitasPengguna() {
    const daftarAktivitasPengguna = document.getElementById('userActivities');
    daftarAktivitasPengguna.innerHTML = '';

    const aktivitasPengguna = ambilAktivitasPengguna();
    aktivitasPengguna.forEach(aktivitas => {
        const elemenList = document.createElement('li');
        elemenList.className = 'list-group-item';
        elemenList.textContent = `${aktivitas.username}: ${aktivitas.activity}`;
        daftarAktivitasPengguna.appendChild(elemenList);
    });
}

function tambahKomentar() {
    const namaPengguna = document.getElementById('namaPengguna').value;
    const komentar = document.getElementById('komentar').value;
}

function tampilkanKomentar() {
    const daftarKomentar = document.getElementById('commentList');
    daftarKomentar.innerHTML = '';

    const komentar = ambilKomentar();
    komentar.forEach(k => {
        const elemenList = document.createElement('div');
        elemenList.className = 'list-group-item';
        elemenList.textContent = `${k.username}: ${k.comment}`;
        daftarKomentar.appendChild(elemenList);
    });
}
function addComment() {
    var namaPengguna = document.getElementById("namaPengguna").value;
    var komentar = document.getElementById("komentar").value;
    
    var waktu = new Date();
    var waktuFormatted = waktu.toLocaleString();
    
    var commentItem = document.createElement("div");
    commentItem.className = "list-group-item";
    commentItem.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${namaPengguna}</h5>
            <small>${waktuFormatted}</small>
        </div>
        <p class="mb-1">${komentar}</p>
        <button type="button" class="btn btn-danger btn-sm" onclick="deleteComment(this)">Hapus</button>
    `;
    
    var commentList = document.getElementById("commentList");
    commentList.appendChild(commentItem);
    
    document.getElementById("commentForm").reset();
}

function deleteComment(button) {
    var commentItem = button.parentElement;
    var namaPenggunaKomentar = commentItem.querySelector("h5").innerText.trim();
    var namaPenggunaInput = document.getElementById("namaPengguna").value.trim();
    var peranPengguna = "admin"; // You can customize the role as needed
    
    if (namaPenggunaInput === namaPenggunaKomentar || peranPengguna === "admin") {
        commentItem.remove();
    } else {
        alert("Anda tidak memiliki izin untuk menghapus komentar ini.");
    }
}

tampilkanAktivitasPengguna();
tampilkanKomentar();
