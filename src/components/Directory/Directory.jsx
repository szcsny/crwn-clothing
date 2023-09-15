import CategoryItem from "../CategoryItem/CategoryItem";
import './Directory.scss';

export default function Directory({categories}) {
    return (
        <div className="directory-container">
            {categories.map((category) => {
                return (
                <CategoryItem key={category.id} category={category}/>
                )
            })
            }
            
        </div>
    )
}
