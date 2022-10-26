import { useState, useEffect } from 'react'
import { TextField } from "@mui/material"
import { Box } from '@mui/material'
import { alpha, styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { width } from '@mui/system';

// Prop Descriptions:
// title - The label on the input field. Also used as the placeholder value.
// rows - Number of rows the input field can have before it enables scrolling
// width - Width of the input field

const StyledTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: 'black',
		fontSize: '15px'
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#D2D2D2',
			borderRadius: '9px',
			color: 'black',
		},
		'&:hover fieldset': {
			borderColor: '#8C8C8C',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#8C8C8C',
			borderWidth: 1
		},
	},
});

const UserInputField = ({title, rows,  width, evtHandler}) => {
	const [text, setText] = useState()

	const handleChange = (e) => {
		setText(e.target.value)
		evtHandler(e.target.value)
	}

    return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { 
					m: 1, 
					width: {width},
					maxWidth: '100%',
					color: 'black',
					backgroundColor: '#FCFCFC',
				},
			}}
			noValidate
			autoComplete="off"
    	>
			<div>
				<StyledTextField
					id="outlined-multiline-static"
					label={title}
					multiline
					fullWidth
					rows={rows}
					size='small'
					onChange={handleChange}
					value={text}
				/>
			</div> 
    	</Box>
    )
}

UserInputField.defaultProps = {
    rows: 1,
	width: 300
}

UserInputField.propTypes = {
    title: PropTypes.string.isRequired,
}

export default UserInputField;