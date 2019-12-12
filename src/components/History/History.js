import React from 'react';
import germanLang from '../../languages/german';
import englishLang from '../../languages/english';

const History = ({ games,german }) => (
   <table className ="table">
         <thead>
            <tr>
               <th>{!german ? englishLang.game : germanLang.game }</th>
               <th>{!german ? englishLang.player1 : germanLang.player1 }</th>
               <th>{!german ? englishLang.player2 : germanLang.player2 }</th>
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