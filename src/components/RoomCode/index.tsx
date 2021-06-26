import copyImg from '../../assets/images/copy.svg';
import './styles.scss'



type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {

    function copyRoomCodeToClipBoard() {
        navigator.clipboard.writeText(props.code);
    }


    return (
        <button className="room-code" onClick={copyRoomCodeToClipBoard}>
            <div>
                <img src={copyImg} alt="Copiar o código da sala" />
            </div>
            <span>Código {props.code}</span>
        </button>
    )
}
