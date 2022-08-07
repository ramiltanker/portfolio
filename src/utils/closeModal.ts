export const closeModal = (setActive: (value: boolean) => void) => {
	setActive(false);
	document.body.style.overflow = 'auto';
	document.body.style.paddingRight = '0';
};