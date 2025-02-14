function referralEmailTemplate(url){
    return `
    <h1>Click here to redirect to welcome page </h1>
    <a 
  href=${url} 
  style={{
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    display: "inline-block",
    textAlign: "center",
    transition: "background-color 0.3s ease",
    cursor: "pointer"
  }}
>
  Click Me
</a>`
}

export {referralEmailTemplate}