import { useDispatch } from "react-redux";
import { updateFilter } from "../../store/post/slice";
const Filter = () => {

    const dispatch = useDispatch();

    const handleSearch = (event) => {
        const {value} = event.target;
        dispatch(updateFilter(value))
    }

    return (
        <div className="container-filter">
            <input
                type="text"
                name="filter"
                placeholder="Busca por nombre" 
                onChange={handleSearch}/>
            <span>Filtrar</span>
        </div>
    )
}

export default Filter;