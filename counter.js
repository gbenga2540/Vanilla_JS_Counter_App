let js_txt_counts = document.getElementById("txt_counts")
let js_txt_entries = document.getElementById("txt_entries")
let js_chkb_save = document.getElementById("chkb_save")

function increment(){
    let value = js_txt_counts.textContent
    value = parseInt(value) 
    value += 1
    js_txt_counts.textContent = value
}

function decrement(){
    let value = js_txt_counts.textContent
    value = parseInt(value)
    if(value <= 0){
        value = 0
    }else{
        value -= 1
    }
   js_txt_counts.textContent = value
}

function reset(){
    js_txt_counts.textContent = 0
}

function save(){
    let value = js_txt_entries.textContent
    value = value + js_txt_counts.textContent + " - "
    js_txt_entries.textContent = value
    if(js_chkb_save.checked){
        reset()
    }
}

function reset_entries(){
    js_txt_entries.textContent = ""
}