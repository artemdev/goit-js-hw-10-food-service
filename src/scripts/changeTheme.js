//settings
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const defaultTheme = Theme.DARK
const body = document.querySelector("body")
const toolbar = document.querySelector("input.js-switch-input")
const currentTheme = localStorage.getItem('theme') || defaultTheme

//set theme
body.classList.add(currentTheme)

//change toolbar to checked when dark theme applied
if(currentTheme === Theme.DARK) {
    toolbar.setAttribute("checked", true)
}

//setup toolbar listener
 const changeTheme = () => {
        if(body.classList.contains(Theme.DARK)) {
            body.classList.replace(Theme.DARK, Theme.LIGHT)
            localStorage.setItem('theme', Theme.LIGHT);
            return
        }

        if(body.classList.contains(Theme.LIGHT)) {
            body.classList.replace(Theme.LIGHT, Theme.DARK)
            localStorage.setItem('theme', Theme.DARK);
            return
        }

}

 toolbar.addEventListener("change", changeTheme)
