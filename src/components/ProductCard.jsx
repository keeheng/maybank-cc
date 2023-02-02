import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const ProductCard = ({
  title,
  imgHref,
  quantity
}) => {

    return (
        <Card>
          <Box backgroundColor="lightgrey" padding={2}>
            <CardMedia
              sx={{ height: 180, width: '100%', borderRadius: '10px', backgroundSize: 'contain' }}
              image={imgHref}
              title="green iguana"
          />
              </Box>
            <CardContent>
              <Typography variant="subtitle1" weight="bold">
                  {title}
                </Typography>
              <Box marginTop={2}>
                <Stack direction="row" display="flex" alignItems="center" justifyContent="space-between">
                  <ButtonGroup variant="outlined" aria-label="Button group">
                    <Button>+</Button>
                    <Button>-</Button>
                  </ButtonGroup>
                <Chip label={quantity} variant="outlined" />
                </Stack>

              </Box>
            </CardContent>
        </Card>
    )
}

export default ProductCard;