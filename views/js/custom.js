console.log(window.location.href);
if (window.location.href == "http://localhost:3000/") {
    const previews = document.querySelectorAll('.card_header img')
    const model = document.querySelector('.model');
    const full_image = document.querySelector(".model .full-img");
    const preview_icon = document.querySelectorAll(".example-image-link i");
    previews.forEach((preview) => {
        preview.addEventListener("click", () => {

        })
    })
    preview_icon.forEach((icon) => {
        icon.addEventListener("click", () => {
            model.classList.add("open");
            const originalSrc = icon.getAttribute("data-original");
            full_image.src = originalSrc;
        })
    })
    model.addEventListener("click", (e) => {
        if (e.target.classList.contains("model")) {
            model.classList.remove("open")
        }
    })

    const fileInput = document.querySelector('#avatar');
    fileInput.onchange = () => {
        // const selectedFiles = [...fileInput.files];
        console.log(fileInput[0].mozFullPath);
        //console.log(fileInput);
    }

} else if (window.location.href == "http://localhost:3000/upload") {
    document.getElementById("avatar").onchange = function () {
        document.getElementById("_submit_").style.opacity = "1";
        document.getElementById("_submit_").style.visibility = "visible";
    };
}