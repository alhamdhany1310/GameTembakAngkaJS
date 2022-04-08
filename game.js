alert(
  'Halo. Selamat datang di game tebak angka, nah disini kamu diminta untuk menebak angka 1 sampai 5 dan kamu akan bermain dalam 10 rende. player yang berhasil mengumpulkan tebakan paling banyak akan memenangkan pertandingan. \n oke kalo bigitu SELAMAT BERMAIN YAH..!'
);

let skorPemain1 = 0;
let skorPemain2 = 0;
let ronde = 1;
let stop = true;

// perulangan while
while (stop) {
  let player1 = parseInt(prompt('Pemain 1: silakan masukan angka'));
  let player2 = parseInt(prompt('Pemain 1: silakan masukan angka'));

  let random = getRandom();
  let ulangi = validasi(player1, player2);
  if (!ulangi) {
    stop = window.confirm('Apakah Mau di Ulang?');
  } else {
    if (player1 !== random && player2 !== random) {
      alert('Wah, tidak ada yang benar nih, Hasilnya Seri');
    } else {
      if (player1 === random) {
        alert('Sekor tambahan untuk pamain 1');
        skorPemain1++;
      }
      if (player2 === random) {
        alert('Sekor tambahan untuk pamain 1');
        skorPemain2++;
      }
    }

    alert(`
      Nilai yang di cari: ${random}
      -----------------------------------
      - Pemain 1: ${skorPemain1}
      - Pemain 2: ${skorPemain2}`);

    ronde++;
    if (ronde <= 10) {
      stop = window.confirm('Ronde ke ' + ronde + '?');
    } else {
      if (skorPemain1 > skorPemain2) {
        alert('Selamat ya untuk pemain 1');
        stop = false;
      } else if (skorPemain1 < skorPemain2) {
        alert('Selamat ya untuk pemain 2');
        stop = false;
      } else {
        alert(`Wow Pertandingannya makin memanas tidak ada yang mau kalah.`);
        ronde = 1;
        skorPemain1 = 0;
        skorPemain2 = 0;
        stop = window.confirm('mau main lagi gak?');
      }
    }
  }
}
// fungsi untuk mempalidasi hasil inputan pemain.
function validasi(player1, player2) {
  if (player1 === player2) {
    alert('tebakan tidak boleh sama');
    return false;
  }

  if (player1 < 1 || player2 < 1) {
    alert('tebakan angka tidak boleh lebih kecil dari angka 1 yah.');
    return false;
  }

  if (player1 > 5 || player2 > 5) {
    alert('tebakan angka tidak boleh lebih besar dari angka 5 yah.');
    return false;
  }

  if (isNaN(player1) || isNaN(player2)) {
    alert('salah satu player belum menebak');
    return false;
  }

  return true;
}

// untuk mengacak angka
function getRandom() {
  const range = [1, 2, 3, 4, 5];
  let isNotRandom = true;
  while (isNotRandom) {
    let random = Math.floor(Math.random() * 10);
    let ketemu = range.find((r) => r === random);
    if (ketemu) {
      isNotRandom = false;
      return random;
    }
  }
}

console.log(getRandom());
