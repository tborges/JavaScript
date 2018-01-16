# <a href="https://github.com/tborges/JavaScript"> JavaScript</a>

<a href="https://github.com/tborges/JavaScript">&larr; JavaScript</a> / Blackjack - Card Counting
<br>
<br>
# Blackjack - card counting using switch statement javascript
<small>Card counting is a casino card game strategy used primarily in the blackjack family of casino games to determine whether the next hand is likely to give a probable advantage to the player or to the dealer.
<b>Card counting allows players to bet more with less risk when the count gives an advantage as well as minimize losses during an unfavorable count.</b></small>
<img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Blackjack_board.JPG" width="100%" height="auto">
<br>
<br>
<h4>Code Explanation:</h4>
<ul>
<li>Check the value of each card via a switch statement.
<li>The variable count:</li>
<ul>
<li>Increases by 1 if the card is a 2, 3, 4, 5, or 6.</li>
<li>Since 7, 8, and 9 aren’t worth anything, I ignore those cards in our switch statement.</li>
<li>Decreases by 1 if the card is a 10, ‘J’, ‘Q’, ‘K’, or ‘A’.</li>
</ul>
<li>Check the value of count and return the appropriate response.
</ul>
