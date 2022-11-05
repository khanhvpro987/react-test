import * as React from 'react';
import Banner from '../../components/Banner';
import TopTrending from '../../components/TopTrending'

function Home() {
	return (
		<React.Fragment>
			<Banner />
			<TopTrending />
		</React.Fragment>
	);
}

export default Home;
