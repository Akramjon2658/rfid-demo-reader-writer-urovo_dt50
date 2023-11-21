import {useState} from "react";
import {RFID} from "../../../capacitor-rfid-plugin-ox";

const CheckConnection = () => {
	const [connected, setConnected] = useState();

	const checkConnection = async () => {
		const connection = await RFID.isConnected();
		setConnected(connection.connected)
	}

	return <div>
		<button onClick={checkConnection}>Check connection</button>
		<button style={{
			width: 130,
			marginLeft: 10,
			color: '#fff',
			background: connected ? "green" : connected === false ? "red" : ""
		}}>
			{connected ? "connected" : connected === false ? "not connected" : "."}
		</button>
	</div>
}

export default CheckConnection