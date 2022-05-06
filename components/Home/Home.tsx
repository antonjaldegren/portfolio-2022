import { Title, Text, Group, Stack, Box, MediaQuery } from "@mantine/core";
import HomeButtons from "./HomeButtons";

interface Props {
	headerHeight: number;
}

const Home = ({ headerHeight }: Props) => {
	return (
		<Stack
			sx={(theme) => ({
				minHeight: `calc(100vh - ${headerHeight}px)`,
				paddingTop: "10%",

				[`@media (min-width: ${theme.breakpoints.md}px)`]: {
					padding: "10% 12%",
					maxWidth: "calc(750px + 24%)",
				},
			})}
		>
			<Box>
				<Text color="dimmed">Hi, my name is</Text>
				<Title order={1} sx={{ fontSize: "3.5rem" }}>
					Anton Jaldegren.
				</Title>
				<Title
					order={2}
					sx={{
						fontSize: "3.5rem",
					}}
				>
					<Text component="span" inherit color="dimmed">
						I build things for the web.
					</Text>
				</Title>
			</Box>
			<Text
				color="dimmed"
				sx={{
					fontSize: "1.2rem",
				}}
			>
				I&apos;m a passionate problem solver specialized in building
				exceptional digital experiences for the web. My focus is
				<Text
					component="b"
					color="blue"
					sx={{
						fontSize: "1.2rem",
					}}
				>
					{" "}
					Front End Development{" "}
				</Text>
				and I create accessible and responsive solutions using modern
				technologies.
			</Text>
			<Text color="dimmed">Based in Stockholm, Sweden.</Text>
			<MediaQuery query="(max-width: 466px)" styles={{ display: "none" }}>
				<Group pt="md">
					<HomeButtons size="md" />
				</Group>
			</MediaQuery>
			<MediaQuery query="(min-width: 467px)" styles={{ display: "none" }}>
				<Group pt="md">
					<HomeButtons size="xs" />
				</Group>
			</MediaQuery>
		</Stack>
	);
};

export default Home;
