import { Box, Button, ButtonGroup, Card, CardContent, Chip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const ProductCard = ({
  title,
  quantity,
  handleButtonClick,
  handleRemoveButtonClick
}) => {

    return (
        <Card sx={{height: '180px'}}>
            <CardContent>
              <Typography variant="h5" weight="bold">
                  {title}
                </Typography>
              <Box marginTop={2}>
                <Stack direction="row" display="flex" alignItems="center" justifyContent="space-between">
                  <ButtonGroup onClick={(e) => e.stopPropagation()} variant="outlined" aria-label="Button group">
                    <Button onClick={(e) => handleButtonClick('+', title)}>+</Button>
                    <Button disabled={quantity === 0} onClick={(e) => handleButtonClick('-', title)}>-</Button>
                  </ButtonGroup>
                <Chip label={quantity} variant="outlined" />
                </Stack>

              </Box>
              {
                quantity === 0 && (
                  <Box marginTop={2} fullWidth>
                    <Button onClick={(e) => handleRemoveButtonClick(e, title)} fullWidth color="error" variant="contained">Remove</Button>
                  </Box>
                )
              }
            </CardContent>
        </Card>
    )
}

export default ProductCard;