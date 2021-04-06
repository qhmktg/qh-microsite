import React, { useContext, createContext, useState, Component } from 'react'
import { EasterEggs, DetailEasterEgg } from './data'
// const EasterEggContext = React.createContext();
// //Provider

// //User
// const EasterEggUser = EasterEggContext.User;

// class EasterEggProvider extends Component {
//     render() {
//         return (
//             <EasterEggContext.EasterEgg value="hello from context">
//                 {this.props.children}
//             </EasterEggContext.EasterEgg>
//         );
//     }
// }

// export { EasterEggProvider, EasterEggUser }

//-----------FUNCTIONAL APPROACH

// export const EasterEggContext = createContext()
// state={
//     EasterEggs: [],
//     DetailEasterEgg: DetailEasterEgg
// };
// export const EasterEggProvider = props=> {


//     const [EasterEggs, setEasterEggs] = useState([
//         {
//           id: 1,
//           title: "Test 1",
//           img: "https://via.placeholder.com/300",
//           floor: '/floor-1',
//           info:
//             "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//         },{
//             id: 2,
//             title: "test item 2",
//             img: "https://via.placeholder.com/300",
//             floor: '/floor-2',
//             info:
//               "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//           },
//       ]);


//     return (
//         <EasterEggContext.Provider value={[EasterEggs, setEasterEggs]}>
//             {props.children}
//         </EasterEggContext.Provider>
//     );

//     }

// export function getEasterEgg(id){
//         const EasterEgg = this.state.EasterEggs.find(item => item.id === id)
//         return EasterEgg;
//         }

// export function handleDetail(id){
//             const EasterEgg = this.getEasterEgg(id);
//             this.setState(()=>{
//                 return{EasterEggContent:EasterEgg }})
//         }


// ------------------------------------------------------------------------------------------

// Class solution
const EasterEggContext = React.createContext();


class EasterEggProvider extends React.Component {

    state = {
        EasterEggs: [],
        DetailEasterEgg: DetailEasterEgg
    };

    getEasterEgg = id => {
        const EasterEgg = this.state.EasterEggs.find(item => item.id === id)
        return EasterEgg;
    }

    handleDetail = id => {
        const EasterEgg = this.getEasterEgg(id);
        this.setState(() => {
            return { DetailEasterEgg: EasterEgg }
        });
    };

    render() {
        return (
            <EasterEggContext.Provider value={{...this.state,
                handleDetail: this.heandleDetail,
            }}>
                {this.props.children}
            </EasterEggContext.Provider>
        );
    }
}
const EasterEggConsumer = EasterEggContext.Consumer;

export { EasterEggProvider, EasterEggConsumer };
