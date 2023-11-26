//1. fonts
import { Sora } from '@next/font/google';

/*
Their are different ways to use font
1. @next/font/google
after that make instance and used as className = {sora.className}

2. @next/font/local
import path is slightly different
import localfont from '@next/font/local'

const myfont = localfont({src: 'give path here'})
*/ 

//2. fonts settings
//Note When you use tailwing css we have to use variable here
//Now check the tailwing css config file
//Where you want to apply then do like this
//className = {`${sora.variable} sans-serif`} //Check config here
//you will find this sans-serif
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora', //This means give a name like this now check tailwind
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

// components
import Nav from './Nav'
import Header from './Header'
import TopLeftImg from './TopLeftImg'

const Layout = ({children}) => {
  return <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
   <TopLeftImg/>
   <Nav/>
   <Header/>

   {children}
  </div>;
};

export default Layout;
