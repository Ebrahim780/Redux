import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.25: 0.25,
    0.5: 0.5,
    0.75: 0.75,
    1: 1,
    1.25: 1.25,
    1.5: 1.5,
    1.75: 1.75,
    2: 2,
    2.25: 2.25,
    2.5: 2.5,
    2.75: 2.75,
    3: 3,
    3.25: 3.25,
    3.5: 3.5,
    3.75: 3.75,
    4: 4,
    4.25: 4.25,
    4.5: 4.5,
    4.75: 4.75,
    5: 5,
};

export default function HoverRating() {
    const [value, setValue] = React.useState(3.75);
    const [hover, setHover] = React.useState(-1);

    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <span className="ms-3 mb-2">116</span>
            <Rating
                size="large"
                name="hover-feedback"
                value={value}
                precision={0.25}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}