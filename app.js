import React from "react";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Cards from "./components/cards";
export default function App(){
   return(
    <div><Navbar />
    <Carousel />
    <div className="cardarr">
    <Cards 
    img="./images/logo.png"
    name="ROSE"
    about="Roses Are One of the Oldest Flowers

    It's no wonder that roses have been referenced in literature and music for centuries. Archaeologists have discovered rose fossils that date back 35 million years. Even more shocking, the oldest living rose is 1,000 years old."
    likes="45"
    
    />
    <Cards 
     name="Lily"
     about="The lily is incredible for pollinators, attracting insects with its large colorful flowers and tasteful nectar. Certain species of lily are pollinated by wind, while others are pollinated by bees! Lilies have large petals that can be white, yellow, orange, red, purple or pink in color. They can even have freckles!"
     likes="5"
     
    />
    <Cards
     name="MarieGold"
     about="Marigold shows anti-bacterial and anti-viral properties, which make them special. They grow once a year. They are 1 to 5 feet in height. They need 5-6 hours of sunlight every day to grow properly."
     likes="69"
     
    />
    <Cards 
     name="Daisy"
     about="The sweet simplicity and genuine beauty of the daisy have made the flower an international emblem of innocence and purity. Its fresh, crisp appearance has come to symbolize new beginnings, and its bright, spirit-lifting colors are known to spread happiness like wildfire."
     likes="02"
     
    />
    <Cards
     name="Jasmine"
     about="Fragrance. The main reason jasmine is so famous is its strong fragrance. People adore the flower for its strong, sweet smell. Countless cultures worldwide include it in aromatic products like candles, perfumes, soaps, and lotions."
     likes="78"
     
    />
    <Cards
     name="Daffodils"
     about="
     There are at least 25 different daffodil species and up to 13,000 hybrids. They're the official 10th wedding anniversary flower. Tradition holds that if a daffodil is forced to bloom for the Chinese New Year, it will bring luck to the whole household. Daffodils contain sap that's often poisonous to other plants."
     likes="45"
     
    />
    </div>
    </div>
    
   )
}
