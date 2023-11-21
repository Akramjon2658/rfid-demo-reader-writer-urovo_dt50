import {RFID} from "capacitor-rfid-plugin-ox";
import {ChangeEvent, useState} from "react";

const FirmwareVersion = () => {
	const [value, setValue] = useState<string>();

	const get = async () => {
		const range = await RFID.getFirmwareVersion();
		console.log('range front', range.value)
		setValue(range.value);
	}

	return <div className={"settings-item"}>
		<div>
			<hr />
			Firmware version
		</div>
		<div>
			{value}
		</div>
		<div className={"settings-item-actions"}>
			<button onClick={get}>get</button>
		</div>
	</div>
}

export default FirmwareVersion