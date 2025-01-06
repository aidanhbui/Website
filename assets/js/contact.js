const contact_form=document.getElementById("contact-form")
console.log(contact_form)
contact_form.onsubmit = async (e) => {
    e.preventDefault()
    console.log("submitting form")
    const formdata=new FormData(e.target)
    const submitdata={}
    for (const [key,value] of formdata.entries()) {
        submitdata[key] = value
    }
    console.log(submitdata)

    try {
        const res=await fetch("https://telling-frill-cactus.glitch.me/api/contact", {
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(submitdata)
        })
        const res_json=await res.json()
        console.log(res_json)
        if(!res_json.success){
            alert("Message Could Not Send, Try Again")
        } else {
            alert("Message Sent!")   
            contact_form.reset()
        }
    } catch (error) {
        console.log("error submitting contact form",error)
        alert("Message Could Not Send, Try Again")
    }
}

