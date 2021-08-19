import React from 'react'


const DarkMode = () => {
    
    const body = document.body

    let clickedClass = "clicked"
    
    let theme = localStorage.getItem('theme')

    if(theme == null){
        body.classList.add("light")
    }
    else{
        body.classList.add(theme)
    }

    const switchTheme = (e) => {
        
        if(theme === 'dark'){
            body.classList.replace('dark', 'light')
            e.target.classList.remove(clickedClass)
            localStorage.setItem("theme", 'light')
            theme = 'light'
        }
        else{
            body.classList.replace('light', 'dark')
            e.target.classList.add(clickedClass)
            localStorage.setItem("theme", 'dark')
            theme = 'dark'
        }
    }
    
    return (
        <div>
            <button className={theme === 'dark' ? clickedClass : "dbtn"} id="darkMode" onClick={e => switchTheme(e)}>
                Toggle Dark Mode    
            </button>    
        </div>
    )
}

export default DarkMode
