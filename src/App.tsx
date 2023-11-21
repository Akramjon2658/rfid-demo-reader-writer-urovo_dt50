import './App.css'
import OutputPower from "./components/OutputPower";
import Scan from "./components/Scan";
import CheckConnection from "./components/CheckConnection";
import Range from "./components/Range";
import QueryMode from "./components/QueryMode";
import ReaderType from "./components/ReaderType";
import FirmwareVersion from "./components/FirmwareVersion";
import WriteEpc from "./components/WriteEpc";

function App() {

	return (
		<>
			<CheckConnection />
			<WriteEpc />
			<FirmwareVersion />
			<QueryMode />
			<ReaderType />
			<Range />
			<OutputPower />
			<Scan />
		</>
	)
}

export default App
