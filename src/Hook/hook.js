let link="https://www.youtube.com/watch?v=omCLq-mfIeQ"
async function hook(link) {
    try {
        const response= await fetch("https://cleanuri.com/api/v1/shorten",{
        method:"POST",
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            url:link
        })
    })
    const data=await response.json()
    console.log(data)
    } catch (error) {
        console.error("Somthing Went Wrong")
    }
}