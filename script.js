function route (event){
  event == event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
}

const routes = {
  '/': '/pages/home.html',
  '/universe': '/pages/universe.html',
  '/exploration': '/pages/exploration.html'
}

function handle (){
  const {pathname} = window.location
  const route  = routes[pathname] 
  fetch(route)
  .then(data => data.text())
  .then(html => {
    document.querySelector("#app").innerHTML = html
    if (pathname == "/") {
      document.querySelector("#home").focus()
      document.querySelector("body").classList.add("home")
      document.querySelector("body").classList.remove("universe")
      document.querySelector("body").classList.remove("exploration")
    }else if(pathname == "/universe"){
      document.querySelector("#universe").focus()
      document.querySelector("body").classList.add("universe")
      document.querySelector("body").classList.remove("home")
      document.querySelector("body").classList.remove("exploration")
    }
    else if(pathname == "/exploration"){
      document.querySelector("#exploration").focus()
      document.querySelector("body").classList.add("exploration")
      document.querySelector("body").classList.remove("home")
      document.querySelector("body").classList.remove("universe")
    } else {
      404
    }
  })
}

handle()