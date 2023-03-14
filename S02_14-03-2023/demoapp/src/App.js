import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Card from './Card';

function App() {
     // conditionally rendering the Component (Calling the Component)
       if(true){
        return <Header />
       } else {
        return <Card  image="https://media.istockphoto.com/id/1201437847/photo/good-looking-male-business-professional-in-studio.jpg?s=170667a&w=0&k=20&c=q5Jfx85LpLr4GEPH4DsTpk3bbf3lXsmLVOW84GT_07w=" 
        name="Raj" 
        gender="male"/>
       }













 
    // <div className="App">

    //       {
    //          false ? <Header /> :<Card  image="https://media.istockphoto.com/id/1201437847/photo/good-looking-male-business-professional-in-studio.jpg?s=170667a&w=0&k=20&c=q5Jfx85LpLr4GEPH4DsTpk3bbf3lXsmLVOW84GT_07w=" 
    //          name="Raj" 
    //          gender="male"/>

    //       }
      
       



     
    //   {/* <div style={{display:"flex",justifyContent:"space-evenly"}}>
    //   <Card 
    //   image="https://media.istockphoto.com/id/1201437847/photo/good-looking-male-business-professional-in-studio.jpg?s=170667a&w=0&k=20&c=q5Jfx85LpLr4GEPH4DsTpk3bbf3lXsmLVOW84GT_07w=" 
    //   name="Raj" 
    //   gender="male" />

    //  <Card image="https://thumbs.dreamstime.com/b/professional-modern-woman-closeup-portrait-young-beautiful-confident-pink-shirt-gray-suit-arms-crossed-folded-smiling-indoors-55345174.jpg" name="Taniya" gender="female" />
    //  <Card image="https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=170667a&w=is&k=20&c=flvkF5qWfHeT6gy7YRhWcWzfPIhPaGh7_tbhRVVbdDI=" name="Ruchi" gender="female" />
    //   </div> */}
 
    // </div>
  
}

export default App;
