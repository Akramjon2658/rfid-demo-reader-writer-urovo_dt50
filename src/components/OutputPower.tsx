import {RFID} from "capacitor-rfid-plugin-ox";
import {ChangeEvent, useState} from "react";

const OutputPower = () => {
	const [value, setValue] = useState<number>();

	const set = async () => {
		const res = await RFID.setOutputPower({ power: value!})
		// alert("res" + JSON.stringify(res))
	}

	const get = async () => {
		const range = await RFID.getOutputPower();
		console.log('range front', range.value)
		setValue(range.value);
	}

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.valueAsNumber)
	}

	return <div className={"settings-item"}>
		<div>
			<hr />
			Output power
		</div>
		<div>
			<input
				type={'number'}
				value={value}
				onChange={onChange}
			/>
		</div>
		<div className={"settings-item-actions"}>
			<button onClick={get}>get</button>
			<button onClick={set}>set</button>
		</div>
	</div>
}

export default OutputPower