

const gajah = 'gajah';
const orang = 'orang';
const semut = 'semut';

function pilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return gajah;
    if (comp >= 0.34 && comp < 0.67) return orang;
    return semut;
}

function hasil(comp, player) {
    if (player == comp) return 'SERI';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}

const PlayerGajah = document.getElementById('gajah');



PlayerGajah.addEventListener('click', function () {
    const getpilihancomputer = pilihanComputer();
    const pilihanuser = gajah;
    const gethasil = hasil(getpilihancomputer,pilihanuser)
    const komputergambar = document.getElementById('img-komputer')
    komputergambar.setAttribute ('src','img/'+getpilihancomputer+'.png')

    const hasilakhir = document.getElementById('info')
    hasilakhir.innerHTML = gethasil;

    // console.log('komputer ' + getpilihancomputer);
    // console.log('user ' + pilihanuser);
    // console.log(gethasil)

});


const PlayerOrang = document.getElementById('orang')

PlayerOrang.addEventListener('click',function(){
    const getpilihancomputer = pilihanComputer();
    const pilihanuser = orang;
    const gethasil = hasil(getpilihancomputer,pilihanuser)
    const komputergambar = document.getElementById('img-komputer')
    komputergambar.setAttribute ('src','img/'+getpilihancomputer+'.png')

    const hasilakhir = document.getElementById('info')
    hasilakhir.innerHTML = gethasil;
    //     console.log('komputer ' + getpilihancomputer);
    // console.log('user ' + pilihanuser);
    // console.log(gethasil)
    // alert('ok')
})

const PlayerSemut = document.getElementById('semut')

PlayerSemut.addEventListener('click',function(){
  
    const getpilihancomputer = pilihanComputer();
    const pilihanuser = semut;
    const gethasil = hasil(getpilihancomputer,pilihanuser)
    const komputergambar = document.getElementById('img-komputer')
    komputergambar.setAttribute ('src','img/'+getpilihancomputer+'.png')

    const hasilakhir = document.getElementById('info')
    hasilakhir.innerHTML = gethasil;
    //     console.log('komputer ' + getpilihancomputer);
    // console.log('user ' + pilihanuser);
    // console.log(gethasil)
    // alert('ok')
})