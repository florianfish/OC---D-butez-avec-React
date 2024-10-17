import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import logo from '../assets/logo.png'
import QuestionForm from "./QuestionForm";
import Footer from "./Footer";

function App() {
  return (
      <div>
          <Banner>
              <img src={logo} alt='La maison jungle' />
              <h1 className='lmj-title'>La maison jungle</h1>
          </Banner>
          {/*<Cart />*/}
          <ShoppingList />
          {/*<QuestionForm />*/}
          <Footer />
      </div>
  )
}

export default App