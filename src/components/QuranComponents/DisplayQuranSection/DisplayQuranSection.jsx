
import { Box, Typography ,Grid, Divider} from '@mui/material';
import React from 'react'


const tempArray = [1, 2, 3, 4, 5, 6];

const DisplayQuranSection = () => {
  return <>
    {
        tempArray.map((items) => (
            <Box>
            <Grid item xs={12}>
             <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed asperiores inventore natus maxime recusandae placeat aliquid maiores perferendis! Impedit eius blanditiis recusandae! Porro provident similique id fugit laudantium! Animi, ipsa?
             </Typography>
            </Grid>
            <Divider style={{ background: 'gray' }} variant="middle" sx={{ borderBottomWidth: 2 }}/>
            </Box>
          ))
    }
  </>
}

export default DisplayQuranSection