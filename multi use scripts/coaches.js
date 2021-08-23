function detailsdisplay(x) {
  document.querySelector(".detail-box-1").style.display = "none";
  document.querySelector(".detail-box-2").style.display = "none";
  document.querySelector(".detail-box-3").style.display = "none";
  document.querySelector(".detail-box-4").style.display = "none";
  document.querySelector(".detail-box-5").style.display = "none";
  document.querySelector(".detail-box-6").style.display = "none";
  if (x == 1) {
    document.querySelector(".detail-box-1").style.display = "flex";
  }
  if (x == 2) {
    document.querySelector(".detail-box-2").style.display = "flex";
  }
  if (x == 3) {
    document.querySelector(".detail-box-3").style.display = "flex";
  }

  if (x == 4) {
    document.querySelector(".detail-box-4").style.display = "flex";
  }

  if (x == 5) {
    document.querySelector(".detail-box-5").style.display = "flex";
  }

  if (x == 6) {
    document.querySelector(".detail-box-6").style.display = "flex";
  }
}
function hidedetails(x) {
  if (x == 1) {
    document.querySelector(".detail-box-1").style.display = "none";
  }

  if (x == 2) {
    document.querySelector(".detail-box-2").style.display = "none";
  }

  if (x == 3) {
    document.querySelector(".detail-box-3").style.display = "none";
  }

  if (x == 4) {
    document.querySelector(".detail-box-4").style.display = "none";
  }

  if (x == 5) {
    document.querySelector(".detail-box-5").style.display = "none";
  }

  if (x == 6) {
    document.querySelector(".detail-box-6").style.display = "none";
  }
}
