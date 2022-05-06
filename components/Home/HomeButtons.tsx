import { Button, MantineSize } from "@mantine/core";
import ResumeButton from "../Layout/ResumeButton";
import { BsGithub, BsLinkedin } from "react-icons/bs";

interface Props {
	size: MantineSize;
}

const HomeButtons = ({ size }: Props) => {
	return (
		<>
			<Button
				component="a"
				href="https://github.com/antonjaldegren"
				target="_blank"
				leftIcon={<BsGithub />}
				variant="subtle"
				size={size}
			>
				GitHub
			</Button>
			<Button
				component="a"
				href="https://www.linkedin.com/in/anton-jaldegren-3a79a6160/"
				target="_blank"
				leftIcon={<BsLinkedin />}
				variant="subtle"
				size={size}
			>
				LinkedIn
			</Button>
			<ResumeButton size={size} />
		</>
	);
};

export default HomeButtons;
