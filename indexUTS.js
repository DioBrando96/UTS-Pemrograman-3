let tombolId = document.querySelector('.cek-btn');
let jatahCuti = {
    id : {
        a1 : {
            nama : 'mukidi',
            cutiTahunan : 12,
            
        },
        a2 : {
            nama : 'samson',
            cutiTahunan : 10,
           
        },
        a3 : {
            nama : 'mandra',
            cutiTahunan : 8,
            
        }
    }
}

tombolId.addEventListener('click', function() {
   let id = document.querySelector('.inputan-id').value;
   let waktu = document.querySelector('.inputan-waktu').value;
   if(id == 'a1' && waktu) {
    document.querySelector(".result").innerHTML = `<div class='hasil'> <p>Nama : ${jatahCuti.id.a1.nama}</p>
    <p>Jatah cuti tahunan : ${jatahCuti.id.a1.cutiTahunan}</p>
    <p class='hasil-cuti'>${jatahCuti.id.a1.cutiTahunan >= waktu ? 'Boleh Cuti' : 'Tidak dapat Cuti'}</p>
   </div>`;
   } else if(id == 'a2' && waktu) {
    document.querySelector(".result").innerHTML = `<div class='hasil'>
    <p>Nama : ${jatahCuti.id.a2.nama}</p>
    <p>Jatah cuti tahunan : ${jatahCuti.id.a2.cutiTahunan}</p>
    <p class='hasil-cuti'>${jatahCuti.id.a2.cutiTahunan >= waktu ? 'Boleh Cuti' : 'Tidak dapat Cuti'}</p>
   </div>`;
   } else if(id == 'a3' && waktu) {
    document.querySelector(".result").innerHTML = `<div class='hasil'>
    <p>Nama : ${jatahCuti.id.a3.nama}</p>
    <p>Jatah cuti tahunan : ${jatahCuti.id.a3.cutiTahunan}</p>
    <p class='hasil-cuti'>${jatahCuti.id.a3.cutiTahunan >= waktu ? 'Boleh Cuti' : 'Tidak dapat Cuti'}</p>
   </div>`;
   } else {
       if(id) {
        document.querySelector(".result").innerHTML = `<div class='hasil'>
        <p>Lama waktu cuti wajib diisi</p>
        </div>`
       } else if (id && !waktu){
        document.querySelector(".result").innerHTML = `<div class='hasil'>
        <p>Id wajib diisi</p>
        </div>`
       } else {        
        document.querySelector(".result").innerHTML = `<div class='hasil'>
        <p>Id salah</p>
        </div>`
     }
    }
   
   

})





