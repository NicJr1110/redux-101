import React from 'react';



const History = ({ games }) => (
   <table className ="table">
         <thead>
            <tr>
               <th>Game</th>
               <th>Player 1</th>
               <th>Player 2</th>
            </tr>
         </thead>
         <tbody>
            {games.map((game, i) => (
                <tr key={ i }>
                    <td> { i + 1} </td>
                    <td className ={ game.player_1.won ? " table-success " : "table-danger"}> { game.player_1.score }</td>
                    <td className ={ game.player_2.won ? " table-success " : "table-danger"}> { game.player_2.score }</td>
                </tr>
            ))} 
         </tbody>
   </table>
);

export default History;