import React from "react";

import Accessories from "../images/traits/accessories.png";
import Background from "../images/traits/background.jpg";
import Eyes from "../images/traits/eyes.png";
import Clothes from "../images/traits/clothes.png";
import Character from "../images/traits/body.png";
import Headwear from "../images/traits/hat.png";
import Mouth from "../images/traits/mouth.png";

export default function RarityGrid() {
    const traits = [
        {
            'name': 'Accessories',
            'image': Accessories,
            'colour': '[#4A4CBA]'
        },
        {
            'name': 'Background',
            'image': Background,
            'colour': 'transparent'
        },
        {
            'name': 'Eyes',
            'image': Eyes,
            'colour': 'medium-blue'
        },
        {
            'name': 'Clothes',
            'image': Clothes,
            'colour': 'pink'
        },
        {
            'name': 'Body',
            'image': Character,
            'colour': 'lime-green'
        },
        {
            'name': 'Headwear',
            'image': Headwear,
            'colour': 'red'
        },
        {
            'name': 'Mouth',
            'image': Mouth,
            'colour': 'light-green'
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
            {traits.map(trait => (
                <div className="">
                    <div className={`h-48 w-48 rounded-lg bg-gradient-radial from-light-violet to-${trait.colour}`}>
                        <img src={trait.image} alt={`Trait example for ${trait.name}`} className="object-cover rounded-lg" />
                    </div>
                    <p className="text-lg text-white">{trait.name}</p>
                </div>
            ))}
        </div>
    )
}