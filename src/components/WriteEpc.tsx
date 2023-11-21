import {RFID} from "capacitor-rfid-plugin-ox";
import {ChangeEvent, useState} from "react";

const WriteEpc = () => {
	const [value, setValue] = useState<string>("");

	const writeEpc = async () => {
		const result = await RFID.writeEpc({ epc: value, password: value});
		alert('result: ' + result.value);
	}

	const writeEpcString = async () => {
		const result = await RFID.writeEpcString({ epc: value, password: value});
		alert('result: ' + result.value);
	}

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	return <div className={"settings-item"}>
		<div>
			<hr />
			Write EPC
		</div>
		<div>
			<input onChange={onChange}/>
		</div>
		<div className={"settings-item-actions"}>
			<button onClick={writeEpc}>Write EPC</button>
		</div>
		<div className={"settings-item-actions"}>
			<button onClick={writeEpcString}>Write EPC String</button>
		</div>
	</div>
}

export default WriteEpc