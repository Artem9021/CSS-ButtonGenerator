window.addEventListener("load", () => {
    let mybtn = document.querySelector(".mybtn");

    let padding_slider = document.querySelector(".slider.padding");
    let padding_range = document.querySelector(".range.padding");
    padding_slider.addEventListener("input", () => {
        padding_range.innerText = `${padding_slider.value}px`;
        mybtn.style.padding = `${padding_slider.value}px ${paddingx_slider.value}px`;
    })

    let paddingx_slider = document.querySelector(".slider.paddingx");
    let paddingx_range = document.querySelector(".range.paddingx");
    paddingx_slider.addEventListener("input", () => {
        paddingx_range.innerText = `${paddingx_slider.value}px`;
        mybtn.style.padding = `${padding_slider.value}px ${paddingx_slider.value}px`;
    })

    let radius_slider = document.querySelector(".slider.radius");
    let radius_range = document.querySelector(".range.radius");
    radius_slider.addEventListener("input", () => {
        radius_range.innerText = `${radius_slider.value}px`;
        mybtn.style.borderRadius =  `${radius_slider.value}px`;
    })

    let bwidth_slider = document.querySelector(".slider.bwidth");
    let bwidth_range = document.querySelector(".range.bwidth");
    bwidth_slider.addEventListener("input", () => {
        bwidth_range.innerText = `${bwidth_slider.value}px`;
        mybtn.style.borderWidth =  `${bwidth_slider.value}px`;
    })



    let sborder = document.querySelector(".border");
    sborder.value = "solid";
    sborder.addEventListener("input", () => {
        
        mybtn.style.borderStyle =  `${sborder.value}`;
    })

    let tcolor = document.querySelector(".textcolor");
    let color_label = document.querySelector(".colorlabel")
    tcolor.addEventListener("input", () => {
        color_label.innerText = `${tcolor.value}`;
        mybtn.style.color =  `${tcolor.value}`;
    })


    let bgcolor = document.querySelector(".bgcolor");
    let bgcolor_label = document.querySelector(".bgcolorlabel")
    bgcolor.addEventListener("input", () => {
        bgcolor_label.innerText = `${bgcolor.value}`;
        mybtn.style.background = `${bgcolor.value}`;
    })
    
    
    let bcolor = document.querySelector(".bcolor");
    let bcolor_label = document.querySelector(".bcolorlabel")
    bcolor.addEventListener("input", () => {
        bcolor_label.innerText = `${bcolor.value}`;
        mybtn.style.borderColor = `${bcolor.value}`;
    })
    
    let generare_btn = document.querySelector(".generate")
    generare_btn.addEventListener("click", () => {
       
       let padding = `${padding_slider.value}px ${paddingx_slider.value}px`;
       let color = `${tcolor.value}`;
       let border = `${bwidth_slider.value}px ${sborder.value} ${bcolor.value}`
       let bg = `${bgcolor.value}`
       let borderradius = `${radius_slider.value}px`
        document.querySelector(".popup").classList.toggle("open")
        document.querySelector(".popup textarea").value = `button {\n    padding: ${padding};\n    color: ${color};\n    border: ${border};\n    background: ${bg};\n    border-radius: ${borderradius};\n    outline: none;\n}`
        
        
        
    })
    
    let copybtn = document.querySelector(".copy")
    
    copybtn.addEventListener("click", () => {
        document.querySelector(".popup textarea").select();
    document.querySelector(".popup textarea").setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("Copied!")
       
    })
    
    let closebtn = document.querySelector(".close")
    closebtn.addEventListener("click", () => {
        document.querySelector(".popup").classList.toggle("open")
    })
    
})



