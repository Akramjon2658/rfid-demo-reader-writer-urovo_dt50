import {RFID} from "capacitor-rfid-plugin-ox";
import {ChangeEvent, useState} from "react";

const ReaderType = () => {
	const [value, setValue] = useState<number>();

	const get = async () => {
		const range = await RFID.getReaderType();
		console.log('range front', range.value)
		setValue(range.value);
	}

	return <div className={"settings-item"}>
		<div>
			<hr />
			Reader Type
		</div>
		<div>
			{value}  <span style={{fontSize: 9}}>(80 is short, others long)</span>
		</div>
		<div className={"settings-item-actions"}>
			<button onClick={get}>get</button>
		</div>
	</div>
}

export default ReaderType