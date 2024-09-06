// Twitter @anniebombanie_

const sHand = document.querySelector( '.s' );
const mHand = document.querySelector( '.m' );
const hHand = document.querySelector( '.h' );

function setTime() {
  const d = new Date();
  const s = d.getSeconds();
  const m = d.getMinutes();
  const h = d.getHours();

  const sDeg = (( s / 60 ) * 360 );
  const mDeg = (( m / 60 ) * 360 );
  const hDeg = (( h / 12 ) * 360 );

  sHand.style.transform = `rotate( ${sDeg}deg )`;
  mHand.style.transform = `rotate( ${mDeg}deg )`;
  hHand.style.transform = `rotate( ${hDeg}deg )`;
  document.getElementById('timeRemaining').innerHTML = timeUntilSixPM()
  



}

setInterval( setTime, 1000 );


function timeUntilSixPM() {
  const now = new Date();
  const target = new Date();
  
  // Set the target time to 6 PM of the current day
  target.setHours(21, 0, 0, 0); // 18:00:00.000
  
  // If it's already past 6 PM, set target to 6 PM of the next day
  if (now > target) {
      target.setDate(target.getDate() + 1);
  }
  
  // Calculate the difference in milliseconds
  const diff = target - now;
  
  // Convert milliseconds to hours, minutes, and seconds
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return `Time remaining until 9 PM: ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;
}
