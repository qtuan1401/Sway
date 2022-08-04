import "./Filter.css"
import TextField from '@mui/material/TextField';
import Button from "../common-ui/Button";

export default function Filter() {
	return (
		<div className="filter-container">
			<div className="filter-text">Enter text or a URL into the boxes below.</div>
			<div className="filter-url-box">
				<TextField
					required
					id="outlined-required-url"
					label="URL"
					sx={{
						width: '100%'
					}}
				/>
			</div>
			<div className="filter-text">Enter text or a URL into the boxes below.</div>
			<div className="filter-url-box">
				<TextField
					required
					id="outlined-required-text"
					label="Text"
					sx={{
						width: '100%',
					}}
					multiline={true}
					rows={10}
				/>
			</div>
			
			<Button>Submit</Button>
		</div>
	);
}