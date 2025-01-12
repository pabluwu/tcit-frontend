import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux"
import { deletePost } from "../../store/post/slice";

const Table = () => {

    const { posts, filter } = useSelector(state => state.post);

    //Use memo para mejorar perfomance y re render del filtro desde redux
    const postsFiltrados = useMemo(() => {
            return posts.filter(post => post.name?.toLowerCase().includes(filter.toLowerCase()));
    }, [posts, filter])


    const dispatch = useDispatch();

    const handleEliminar = (item) => {
        dispatch(deletePost(item.id));
    }

    return (

        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {postsFiltrados.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>
                            <span onClick={() => handleEliminar(item)}>Eliminar</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default Table;