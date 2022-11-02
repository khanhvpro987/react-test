import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MediaCard from '../../components/Cards';

function Home() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='sm'>
                <MediaCard />
			</Container>
		</React.Fragment>
	);
}

export default Home;
