import dogs from '../../Assets/projects/dogsSpaAlejoUfano.png'
import ecommerce from '../../Assets/projects/kembaEcommerceAlejoUfano.png'
import weatherApp from '../../Assets/projects/weatherAppAlejoUfano.png'

export const projects = [
    {
        img: dogs,
        title: 'Dogs SPA',
        description: 'Development of a SPA (Single Page Application) consuming an API (The dog API). using React, Redux, Node, Express. All components were developed with pure CSS.',
        link: 'https://dogs-app-alpha.vercel.app/',
        repository: 'https://github.com/AlejoUfano/PIHENRY/tree/main/PI-Dogs-main/PI-Dogs-main'

    },
    {
        img: ecommerce,
        title: 'E-commerce',
        description: 'E-commerce grupal project with all its features. Catalog, ordering, registration, payment gateway, shopping cart, favorites, admin dashboard and more.',
        link: 'https://pf-henry.vercel.app/',
        repository: 'https://github.com/franRappazzini/PF---Henry'
    },
    {
        img: weatherApp,
        title: 'Weather App',
        description: 'Development of a simple Weather App consuming an API (Openweathermap). With details such as temperature, humidity, weather, wind speed, etc.',
        link: 'https://weather-app-au.vercel.app/',
        repository: 'https://github.com/AlejoUfano/WeatherApp'
    }
]