document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

let count = 0

document.getElementById("open").style.display = 'none';
document.getElementById("secret").style.display = 'none';

function shake(){
  count+=1
  console.log("p***nis")
  document.getElementById("gift").className = "shake";
  if (count >= 10) {
    console.log("congrats dog")
    document.getElementById("gift").style.display =  'none';
    document.getElementById("open").style.display = 'block';
  }
  setTimeout(() => { document.getElementById("gift").classList.remove("shake")
  }, 300)
}

function shake2(){
  count+=1
  console.log("d***********ck")
  document.getElementById("open").className = "shake";
  if (count >= 40) {
    console.log("congrats dog")
    document.getElementById("open").style.display =  'none';
    document.getElementById("secret").style.display = 'block';
  }
  setTimeout(() => { document.getElementById("open").classList.remove("shake")
  }, 300)
}