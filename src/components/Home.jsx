import React from 'react'
import{ Link }from 'react-router-dom'
import '../components/assets/styles/baselayout.css'
import '../components/assets/styles/bootstrap.css'
import '../components/assets/styles/responsive.css'

export default function Home() {
  return <>

    <body class='container'>
        <div class="jumbotron text-center">
            <h1>Home Page for Movie Watchlist App</h1>
            <Link to='/movie' > 
                <button class="btn btn-primary" href='./components/Movie.jsx'>
                    Enter Site
                </button>
            </Link>
        </div>

    </body>
        
    </>
}



