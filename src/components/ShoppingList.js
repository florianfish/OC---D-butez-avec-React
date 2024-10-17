import '../styles/ShoppingList.css'
import { plantList } from '../datas/plantList'

function ShoppingList() {
    const categories = [...new Set(plantList.map(plant => plant.category))];

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>
                        {cat}
                    </li>
                ))}
            </ul>
            <ul className="lmj-plant-list">
                {plantList.map((plant) => (
                    <li key={plant.id} className="lmj-plant-item">
                        {plant.name} {plant.isBestSale && <span>🔥</span>} {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList