import { RefObject, Context, createRef, createContext, useContext, useRef, useCallback } from 'react';

type TScrollToRef = (name: string) => RefObject<HTMLElement | null>;
type TRegisterRef = (name: string) => RefObject<HTMLElement | null>;
type RefsMap = Record<string, RefObject<HTMLElement | null>>;

interface IScrollHook {
	ScrollContext: Context<TScrollToRef>;
	registerRef: TRegisterRef;
	scrollToRef: (name: string, behavior?: ScrollBehavior) => void;
	regRef: TScrollToRef;
};

const defaultScrollToRef: TScrollToRef = () => createRef<HTMLElement>();
const ScrollContext: Context<TScrollToRef> = createContext<TScrollToRef>(defaultScrollToRef);

export const useScroll: () => IScrollHook = (): IScrollHook => {
	const regRef: TScrollToRef = useContext(ScrollContext);
	const refs: RefObject<RefsMap> = useRef<RefsMap>({});

	const registerRef: TRegisterRef = useCallback((name: string): RefObject<HTMLElement | null> => {
		if (!refs.current[name]) {
			refs.current[name] = createRef<HTMLElement>();
		}
		return refs.current[name];
	}, []);

	const scrollToRef: (name: string, behavior?: ScrollBehavior) => void = (name: string, behavior: ScrollBehavior = 'smooth'): void => {
		const ref: RefObject<HTMLElement | null> = refs.current[name];

		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior });
		}
	};

	return {
		ScrollContext,
		registerRef,
		scrollToRef,
		regRef,
	};
};
