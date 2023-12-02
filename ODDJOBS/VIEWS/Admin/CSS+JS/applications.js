function showModal() {
    var overlay = document.getElementById("overlay");
    var modal = document.getElementById("modal");

    overlay.style.display = "block";
    overlay.style.opacity = 0;
    overlay.classList.add("show");

    modal.style.display = "block";
    modal.classList.add("show");

    setTimeout(function () {
      overlay.style.opacity = 0.5;
    }, 10);
  }

  function closeModal() {
    var overlay = document.getElementById("overlay");
    var modal = document.getElementById("modal");

    overlay.classList.remove("show");
    modal.classList.remove("show");

    // Add closing animation
    overlay.style.animation = "fadeOut 0.5s ease-out";
    modal.style.animation = "scaleDown 0.3s ease-out";

    setTimeout(function () {
      overlay.style.display = "none";
      modal.style.display = "none";
      // Reset animation properties after the animation is complete
      overlay.style.animation = "";
      modal.style.animation = "";
    }, 500);
  }

  function proceed() {
    alert("Downloading...");
    closeModal();
  }