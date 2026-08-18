import Pessoa from "../../components/Pessoa"

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome="Erick" idade={25} />
            <Pessoa nome="Maria" />
        </div>
    )
}
