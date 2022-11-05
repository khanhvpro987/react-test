import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
import TopArtists from '../../data/TopArtist.json';
import TopTrendings from '../../data/TopTrending.json';

export default function TopTreding() {
	return (
		<>
			<Box>
				<Typography
					variant='h4'
					component='h2'
					marginX={5}
					marginY={5}>
					TOP & TRENDING
				</Typography>
				<Grid2
					container
					spacing={4}
					sx={{ marginX: 2 }}>
					<Grid2
						item
						md={6}>
						<Paper
							elevation={5}
							sx={{ borderRadius: '10px' }}>
							<Box
								display={'flex'}
								alignItems={'center'}
								justifyContent={'center'}
								paddingY={4}>
								<Typography
									variant='h5'
									component='p'>
									Top Artists
								</Typography>
							</Box>
							{TopArtists.map((Artist, index) => {
								return (
									<Box
										height={106}
										width={'80%'}
										display={'flex'}
										margin={'auto'}
										justifyContent={'space-between'}
										alignItems={'center'}
										borderTop={
											'solid rgba(10,10,10,0.1) 1px'
										}>
										<Box
											sx={{ flex: '9', display: 'flex' }}
											key={index}>
											<Avatar>{Artist.name[0]}</Avatar>
											<Box marginX={2}>
												<Typography
													fontWeight={'medium'}>
													#{Artist.rank} -
													{Artist.name}
												</Typography>
												<Typography>
													{Artist.nation}
												</Typography>
											</Box>
										</Box>
										<Box sx={{ flex: '1' }}>
											<Button
												variant='text'
												href='#follow-button'
												sx={{
													color: 'green',
												}}>
												Follow
											</Button>
											<Typography>
												{Artist.follower}
											</Typography>
										</Box>
									</Box>
								);
							})}
						</Paper>
					</Grid2>
					<Grid2
						item
						md={6}>
						<Paper
							elevation={5}
							sx={{ borderRadius: '10px' }}>
							<Box
								display={'flex'}
								alignItems={'center'}
								justifyContent={'center'}
								paddingY={4}>
								<Typography
									textAlign='center'
									variant='h5'
									component='p'>
									{' '}
									Top Trending
								</Typography>
							</Box>
							{TopTrendings.map((trending, index) => {
								return (
									<Box
										height={106}
										width={'80%'}
										display={'flex'}
										margin={'auto'}
										justifyContent={'space-between'}
										alignItems={'center'}
										borderTop={
											'solid rgba(10,10,10,0.1) 1px'
										}>
										<Box
											sx={{ flex: '9', display: 'flex' }}
											key={index}>
											<Avatar>{trending.name[0]}</Avatar>
											<Box marginX={2}>
												<Typography
													fontWeight={'medium'}>
													#{trending.rank} -
													{trending.name}
												</Typography>
												<Typography>
													{trending.type}
												</Typography>
											</Box>
										</Box>
										<Box sx={{ flex: '2' }}>
											<Typography
												textAlign={'right'}
												color='green'>
												{trending.price} NEAR
											</Typography>
											<Typography textAlign={'right'}>
												{trending.sold}
											</Typography>
										</Box>
									</Box>
								);
							})}
						</Paper>
					</Grid2>
				</Grid2>
			</Box>
		</>
	);
}
