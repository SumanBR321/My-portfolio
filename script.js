(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    // document.querySelector(".theme-btn").addEventListener("click", () => {
    //     document.body.classList.toggle("light-mode");
     
    // })
})();

function downloadResume() {
    const resumePath = 'https://drive.google.com/file/d/1eB6ZI6_4cCfuPThnE02By5n8_7CTL-LD/view?usp=sharing';
    const downloadLink = document.createElement('a');
    downloadLink.href = resumePath;
    downloadLink.download = 'Sanidhya_Tiwari_Resume.pdf';
  
    document.body.appendChild(downloadLink);
    downloadLink.click();
  
    document.body.removeChild(downloadLink);
  }

