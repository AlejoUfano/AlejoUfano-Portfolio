import dogs from '../../Assets/projects/dogsSpaAlejoUfano.png'
import ecommerce from '../../Assets/projects/kembaEcommerceAlejoUfano.png'
import weatherApp from '../../Assets/projects/weatherAppAlejoUfano.png'
import foodApp from '../../Assets/projects/TwistedFoodAppAlejoUfano.png'
import ecommerceHomePage from '../../Assets/projects/EcommerceHomePageAlejoUfano.png'
import NFTs from '../../Assets/projects/NFTsAlejoUfano.png'
import GPT3 from '../../Assets/projects/GPT3AlejoUfano.png'

export const projects = [
    {
        img: NFTs,
        title: 'NFTs App',
        description: 'Development of an React NFTs website with multiple functionalities using mainly JS and Bootstrap.',
        link: 'https://nfts-alejo-ufano.vercel.app/home',
        repository: 'https://github.com/AlejoUfano/NFTs'
    },
    {
        img: GPT3,
        title: 'GPT3 App',
        description: 'Front End project. Modern App about GPT3, using only React and CSS.',
        link: 'https://alejo-ufano-gpt3.vercel.app/',
        repository: 'https://github.com/AlejoUfano/GPT3'
    },    
    {
        img: ecommerceHomePage,
        title: 'Multimart',
        description: 'Development of an ecommerce of furniture, smart phones, watches, etc. Using mainly JS, react-redux and Bootstrap.',
        link: 'https://e-commerce-tau-two.vercel.app/home',
        repository: 'https://github.com/AlejoUfano/E-Commerce'
    },
    {
        img: foodApp,
        title: 'Food App',
        description: 'Twisted Food. App with features such as menu, hot dishes and fruits section, shopping cart, login, option to add new products when logged as admin, etc.',
        link: 'https://twisted-food-app.vercel.app/',
        repository: 'https://github.com/AlejoUfano/TwistedFoodApp'
    },   
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