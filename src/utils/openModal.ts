export const openModal = (setActive: (value: boolean) => void) => {
	setActive(true);
	document.body.style.overflow = 'hidden';
	document.body.style.paddingRight = '3px';
}