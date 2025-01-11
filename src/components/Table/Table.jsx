import { useSelector, useDispatch } from "react-redux"
import { deletePost } from "../../store/post/slice";

const Table = () => {

    const posts = useSelector(state => {
        const { posts, filter } = state.post;
        return posts.filter(post => post.name?.toLowerCase().includes(filter.toLowerCase()));
    });

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
                {posts.map((item) => (
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