import {useEffect, useState} from "react";
import {RFID} from "capacitor-rfid-plugin-ox";

type ScanData = { epc: string, tid: string, rssi: string };

const Scan = () => {
	const [started, setStarted] = useState<boolean>(false);

	const [scanData, setScanData] = useState<Array<{}>>([]);

	useEffect(() => {
		let scanListener;
		(async function () {
			scanListener = await RFID.addListener(
				'onScanEvent',
				(data: { epc: string, tid: string, rssi: string }) => {
					console.log('onScanEvent front', data.epc, data.rssi);
					setScanData(sd => sd.concat(data))
				},
			);
		})()

		return () => {
			if(scanListener) {
				scanListener.remove();
			}
		}
	}, [])

	const getScanData = () => {
		RFID.getScanData().then(scanData => {
			setScanData(scanData);
		})
	}

	const toggleStart = async () => {
		if (!started) {
			await RFID.startScan()
		} else {
			await RFID.stopScan()
		}
		setStarted(!started)
		// const res = await RFID.setRange({ range: value!})
		// alert("res" + JSON.stringify(res))
	}

	const clearData = async () => {
		await RFID.clearData();
		setScanData([]);
	}

	return <div>
		<hr/>
		<div className={"settings-item-actions"}>
			<button style={{marginRight: 10}} onClick={clearData}>Clear Data</button>
			<button onClick={toggleStart}>{started ? "STOP SCAN" : "START SCAN"}</button>
		</div>
		<div className={"settings-item-actions"}>
			<button onClick={getScanData}>GET SCAN DATA</button>
		</div>

		<pre>
			{
				JSON.stringify(scanData, null, 4)
			}
		</pre>
	</div>
}

export default Scan