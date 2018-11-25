// import React from "react";
// import { Route, Switch } from "react-router-dom";

// export const Router = ({ list, paginationArray }) => {
//   console.log("check router");
//   return (
//     <Switch>
//       {paginationArray.map(element => {
//         return (
//           <Route
//             path={`/artists/${element.index}`}
//             key={element.index}
//             render={props => <ListForAll {...props} fullList={list} from={element.from} to={element.to}/>}
//           />
//         );
//       })}
//       {/* <Route
//         path="/Test1"
//         // list={list}
//         // render={props => <Test1 {...props} list={list} />}
//       />
//       <Route
//         path="/Test2"
//         // list={list}
//         //render={props => <Test2 {...props} list={list} />}
//       /> */}
//     </Switch>
//   );
// };