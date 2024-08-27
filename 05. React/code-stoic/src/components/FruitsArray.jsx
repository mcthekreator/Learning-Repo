export default function FruitsArray(){
    const fruits = [
        {name: "Apple", price: 5, emoji: "🍎"},
        {name: "Mango", price: 5, emoji: "🥭"},
        {name: "Banana",price: 5, emoji: "🍌"},
        {name: "Oange", price: 5, emoji: "🍊"},
        {name: "Pineapple", price: 8, emoji: "🍍"}
    ]
    return (
        <>

        <ul>
            {fruits.map((fruit)=>(
                <li key={fruit.name}>
                    {fruit.emoji} {fruit.name} - ${fruit.price}
                </li>

            ))}
        </ul>
        
        </>
    )
}