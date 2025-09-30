<div class="kartu-profil">
    <img src="foto-profil.jpg" ait="foto profil saya">
    <h1>Nama Lengkap Anda</h1>
    <a href="...">Kunjungi Instragram Saya</a>
    <button id="sapsButton">Sapa Saya!</button>
</div>
//1.Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementByld('sapaButton')
//2.Tambahkan 'event listerner' untuk aksi 'click'
tombolSapa.addEventListener('click',function(){
    //3.Jalankan kode ini ketika tombol di-klik
    alert('Halo! Terima kasih sudah berkunjung!');
});
