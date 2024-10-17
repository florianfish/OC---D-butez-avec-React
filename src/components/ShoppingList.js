import { plantList } from '../datas/plantList'

// const uniqueCategories = [...new Set(plantList.map(plant => plant.category))];

function ShoppingList() {
    const categories = [...new Set(plantList.map(plant => plant.category))];

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>
                        {plant.name} {plant.isBestSale && <span>🔥</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList