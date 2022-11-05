import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import bgImage from '../../assets/images/Banner/bannerBackground.jpg';
import Collection from '../../data/imagePath.json';

export default function Banner() {
	console.log(Collection);
	return (
		<Box
			sx={{
				height: 452,
				width: '100%',
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				backgroundColor: 'grey',
				backgroundImage: `url(${bgImage})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}>
			<Box
				sx={{
					flex: 2,
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Stack
					spacing={2}
					direction='column'
					sx={{ width: 350 }}>
					<Typography
						sx={{
							fontFamily: 'Inter',
							fontWeight: 'bold',
							fontSize: 34,
							color: 'white',
						}}>
						Discover the Most Premium, Unique and Exclusive NFT
						Collections
					</Typography>
					<Typography
						fontFamily={'Inter'}
						fontWeight={'medium'}
						fontSize={16}
						color={'white'}>
						2022-09-20 11:00 AM UTC
					</Typography>
					<Button
						variant='contained'
						href='#contained-buttons'
						sx={{ height: 60, width: 240, borderRadius: '10px' }}>
						Explore Now
					</Button>
				</Stack>
			</Box>
			<Box sx={{ flex: 3 }}>
				{Collection.map((image, index) => (
					<img
						src={`${image.path}`}
						key={index}
						alt={image.label}
						style={{ width: '400px', height: '400px' }}></img>
				))}
			</Box>
		</Box>
	);
}
