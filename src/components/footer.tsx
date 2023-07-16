const Footer = () => {
	// get current year
	const year = new Date().getFullYear()

	return (
		<footer className="border-t bg-white">
			<div className="mx-auto py-10 ">
				<p className="text-center text-xs text-black">
					&copy; {`${year} 2021 NextJS 13 Store`}
				</p>
			</div>
		</footer>
	)
}

export default Footer
