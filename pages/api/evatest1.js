// to fetch data
	
export const getStaticProps = async () => {
	const res = await fetch("<http://localhost:1337/api/jobs?populate=*>");
	const data = await res.json();

	return {
		props: {
			getJobs: data.data,
		},
	};
};
