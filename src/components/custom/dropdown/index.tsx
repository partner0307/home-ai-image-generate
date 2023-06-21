import React from "react";

import "./style.css";
import Icon from "../icon";
import { Flex } from "components/basic";

type DropdownPropsType = {
	initialLabel?: string;
	label?: string;
	hideIcon?: boolean;
	onClose?: any;
	container?: any;
	rightSide?: any
	isTop?: boolean
	isSm?: boolean
};

const Dropdown: React.FC<DropdownPropsType> = ({
	initialLabel,
	label,
	hideIcon,
	onClose,
	container,
	rightSide,
	isTop,
	isSm,
	...rest
}) => {
	const [isDropdown, setIsDropdown] = React.useState(false);
	const dropdownRef = React.useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		const windowClick = (e: any) => {
			if (dropdownRef !== null && dropdownRef?.current !== null) {
				if (!dropdownRef.current.contains(e.target)) {
					setIsDropdown(false);
				}
			}

			window.addEventListener("click", windowClick);

			return () => window.removeEventListener("click", windowClick);
		};
	}, []);

	return (
		<div ref={dropdownRef} className={`dropdown ${isSm ? 'dropdown-sm' : ''}`}>
			<div
				className="dropdown-picker"
				onClick={() => setIsDropdown(!isDropdown)}
			>
				<Flex $style={{
					hAlign: "center"
				}}>
					{rightSide && (
						<div className="dropdown-right-side">
							{rightSide}
						</div>
					)}
					<span>
						{label === undefined
							? initialLabel !== undefined
							? initialLabel
							: "Select the item"
							: label}
					</span>
				</Flex>
				{!hideIcon ? <Icon icon="ArrowChevronDown" /> : null}
			</div>
			{container !== undefined && (
				<div
					className={`dropdown-box ${
						isDropdown ? "dropdown-box-show" : "dropdown-box-hide"
					} ${
						isTop ? "dropdown-slide-top" : ""
					}`}
				>
					{container(() => setIsDropdown(false))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
