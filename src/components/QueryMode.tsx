import {RFID} from "capacitor-rfid-plugin-ox";
import {ChangeEvent, useState} from "react";

type TQueryMode = 0 | 1 | 2 | 3
const QueryMode = () => {
	const [value, setValue] = useState<TQueryMode>();

	const set = async () => {
		const res = await RFID.setQueryMode({ queryMode: value!})
		// alert("res" + JSON.stringify(res))
	}

	const get = async () => {
		const range = await RFID.getQueryMode();
		console.log('range front', range.value)
		setValue(range.value);
	}

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const value = +e.target.value
		if(value > 3 || +value < 0) {
			throw new Error("value must be in 0 - 3");
		}
		setValue(value as TQueryMode)
	}

	return <div className={"settings-item"}>
		<div>
			<hr />
			Query Mode
		</div>
		<div>
			<select
				value={value}
				onChange={onChange}
			>
				<option value={0}>epc</option>
				<option value={1}>epc + tid</option>
				<option value={2}>epc + user</option>
				<option value={3}>fasttid</option>
			</select>
		</div>
		<div className={"settings-item-actions"}>
			<button onClick={get}>get</button>
			<button onClick={set}>set</button>
		</div>
	</div>
}

export default QueryMode