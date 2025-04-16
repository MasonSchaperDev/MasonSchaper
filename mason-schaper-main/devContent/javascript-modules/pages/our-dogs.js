// pages/our-dogs.js 
// 3 column layout, 1. Varms 2. Penny 3. Bodie, 2px border in red, hover over image alt and a title.
export function ourDogs() {
    return `
    <h1>About Our Dogs</h1>
    <p>Welcome to the Dogs Page!</p>
    <ul>
        <li>Varms - The leader of the Pack!</li>
        <li>Penny - 2nd in command</li>
        <li>Bodie - just a pain in the ass PUP!</li>
    </ul>
    <div class="row">
        <div class="column">
            <img src="images/varms.png" alt="Varms" title="Varms"/>
            <p>Varms</p>
        </div>

        <div class="column">
            <img src="images/penny.png" alt="Penny" title="Penny"/>
            <p>Penny</p>
        </div>

        <div class="column">
            <img src="images/bodie.png" alt="Bodie" title="Bodie"/>
            <p>Bodie</p>
        </div>
    </div>
    `; 
}