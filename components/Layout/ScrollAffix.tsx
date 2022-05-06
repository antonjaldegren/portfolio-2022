import { useWindowScroll } from "@mantine/hooks";
import { Affix, ActionIcon, Transition } from "@mantine/core";
import { BsArrowUp } from "react-icons/bs";

const ScrollAffix = () => {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<Affix position={{ bottom: 20, right: 20 }}>
			<Transition transition="slide-up" mounted={scroll.y > 0}>
				{(transitionStyles) => (
					<ActionIcon
						variant="light"
						size="lg"
						style={transitionStyles}
						onClick={() => scrollTo({ y: 0 })}
					>
						<BsArrowUp />
					</ActionIcon>
				)}
			</Transition>
		</Affix>
	);
};

export default ScrollAffix;
