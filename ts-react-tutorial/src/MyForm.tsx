import React, {useRef, useState} from "react";

type MyFormProps = {
    onSubmit: (form : {name : string; description : string}) => void;
}

function MyForm({onSubmit} : MyFormProps){
    const [form, setForm] = useState({name:'', description :''});
    const {name, description} = form;

    const inputRef = useRef<HTMLInputElement>(null)

    return <form>
        <input name="name" value={name} ref={inputRef}/>
    </form>
}

export default MyForm;