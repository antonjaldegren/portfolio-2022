import React from "react";
import { Button } from "@mantine/core";

interface Props {
	onClick?: () => void;
}

const pages: string[] = ["Home", "About", "Projects", "Contact"];

const NavLinks = (props: Props) => {
	return (
		<>
			{pages.map((page) => (
				<Button
					key={page}
					variant="subtle"
					sx={{ textAlign: "left" }}
					{...props}
				>
					{page}
				</Button>
			))}
		</>
	);
};

export default NavLinks;
