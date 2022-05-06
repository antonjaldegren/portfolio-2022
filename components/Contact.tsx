import {
	Title,
	Text,
	Group,
	Button,
	Stack,
	Box,
	Container,
	TextInput,
	Textarea,
	Divider,
	Grid,
} from "@mantine/core";
import { BsPerson, BsEnvelope } from "react-icons/bs";

const Contact = () => {
	return (
		<Container p="0">
			<Divider label={<Title order={2}>Contact</Title>}></Divider>
			<Grid>
				<Grid.Col sm={6}>
					<Text>hej</Text>
				</Grid.Col>
				<Grid.Col sm={6}>
					<Stack>
						<TextInput label="Name" icon={<BsPerson />} required />
						<TextInput
							label="Email"
							type="email"
							icon={<BsEnvelope />}
							required
						/>
						<Textarea label="Message" required />
						<Button type="submit">Send</Button>
					</Stack>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default Contact;
