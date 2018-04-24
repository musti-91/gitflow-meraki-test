function loginPage() {
  let html = "";
  html += `<form>
    <h1> It is made by one and only naser </h1>
    <div>
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>
  
      <label><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
  
      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>
  
    <div style="background-color:#f1f1f1">
      <button type="button">Cancel</button>
      <span >Forgot <a href="#">password?</a></span>
    </div>
  </form>`;

  document.getElementById("nazif").insertAdjacentHTML("afterbegin", html);
  console.log("test222");
}

loginPage();
//adding an alert on pageLoad
alert("greetings from david");
console.log("another feature");
