import React, { useState } from 'react';
import Draggable from './Draggable';
import './DesignTshirt.css';
import tshirt from '../Images/white-tshirt.jpg'
import FooterSce from '../FooterSec/FooterSce';
const DesignTshirt = () => {
    const [text, setText] = useState('');
    console.log(text);
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputText = document.getElementById('inputText').value;
       setText(inputText)
        document.getElementById('remove').style.display = 'block';

    }
    const removeText = (e) => {
        setText('')
        document.getElementById('remove').style.display = 'none';
    }
    return (
        <div>
            <div className="AddTextButton">
                <a className="AddTextButton" href="/">Go Home</a>
                <p data-toggle="modal" data-target=".bd-example-modal-lg"> Add Text On</p>
                
            </div> 

           
            
           

            <div className="modal fade bd-example-modal-lg"  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content addTextContent">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">Design Your T-shirt as you like</h5>
                          <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input id='inputText' type="text" placeholder="text here"/>
                            <button className="textSubmit" type='submit'>Submit Text</button>
                        </form>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                  </div>
                </div>
              </div>
   
               <div className="designTshirt">
               <div className="tshirt">
                       <img src={tshirt} alt=""/>
                   </div>
                   <div className="tshirtContent pl-5 ml-5 mt-5 pt-5">
                        <Draggable>
                        <h1><strong>{text}</strong></h1>
                        <button id="remove" onClick={removeText}> <span aria-hidden="true">&times;</span></button> 
                     </Draggable> 
                   </div>
               
               </div>

               <FooterSce></FooterSce>
        </div>
    );
};

export default DesignTshirt;


















// import React from 'react';
// import './DesignThirty.css'
// import Draggable from './Draggable';
// import ListItems from './ListItems';

// class DesignTshirt extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//           items:[],
//           currentItem:{
//             text:'',
//             key:''
//           }
//         }
//         this.handleInput = this.handleInput.bind(this);
//         this.addItem = this.addItem.bind(this);
//       }
//     handleInput(e){
//         this.setState({
//             currentItem:{
//                 text: e.target.value,
//                 //  key: Data.now()
//             }
//         })
//     }  
//     addItem(e){
//         e.preventDefault();
//         const newItem = this.state.currentItem;
//         if(newItem.text !==""){
//             const newItems = [...this.state.items, newItem];
//             this.setState({
//                 items: newItems,
//                 currentItem:{
//                     text: '',
//                     key: ''
//                 }
//             })
//         }
//     }
//     render() {
//         return (
//             <div className="designTshirt">
//                 <Draggable>
//                    <h1>By By </h1>
                
//                 </Draggable>
//                 <form id="to-do-form">
//                     <input type="text" placeholder="Enter task" 
//                     value={this.state.currentItem.text}
//                     onChange={this.handleInput}
//                     />
//                     <button type="submit">Add</button>
//                 </form>
//                 <ListItems items = {this.state.items} ></ListItems>



                
        
//             </div>
            
//         );
//     }
// }

// export default DesignTshirt;







// import React from 'react';
// import './DesignTshirt.css'
// import Draggable from './Draggable';

// const DesignTshirt = () => {
   
//     return (
//         <div className="designTshirt">
//            <Draggable>
//                adckml
//            </Draggable>
           
//         </div>
//     );
// };

// export default DesignTshirt;