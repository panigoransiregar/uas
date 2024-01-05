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
