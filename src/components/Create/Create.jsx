import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/post/slice";
import { API } from "../../assets/variables";

const Create = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleClick = () => {
        if (name === '' || description === '') {
            alert('Debe rellenar todos los campos.');
            return;
        }
        fetch(`${API}post`, {
            method: "POST",
            body: JSON.stringify({ name: name, description: description }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => {
                if (res.ok) return res.json();
            })
            .then(data => {
                dispatch(addPost(data));
            })
            .catch(err => {
                console.log(err);
            })
        setName('');
        setDescription('');
    }
    return (
        <div className="contenedor-inputs">
            <div>
                <input type="text" name="name" required value={name} onChange={handleChangeName} placeholder="Nombre" />
                <input type="text" name="description" required value={description} onChange={handleChangeDescription} placeholder="Descripción" />
            </div>
            <input type="button" value="Crear" onClick={handleClick} />
        </div>
    )
}

export default Create;
