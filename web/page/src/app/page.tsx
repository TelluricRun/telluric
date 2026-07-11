'use client';
// import Notification from '@/components/notification';
// import Hero from '@/components/hero';
// import SearchBar from '@/components/search-bar';
import HeroSecond from '@/components/hero-second';
import Sponsor from '@/components/sponsor';
import ScrollText from '@/components/scroll-text';
import Vision from '@/components/vision';
import ProblemSection from '@/components/problem-section';
import Market from '@/components/market';
import FullWidthSection from '@/components/fullwidth-section';
import PricingToggle from '@/components/pricing-toggle';
// import Features from '@/components/features';
// import Testimonials from '@/components/testimonials';
// import Pricing from '@/components/pricing';
import Faq from '@/components/faq';
// import FinalCta from '@/components/final-cta';
// import Calculator from '@/components/calculator';
// import Steps from '@/components/steps';
// import Standards from '@/components/standards';
// import Why from '@/components/why';
// import Solutions from '@/components/solutions';
// import Usage from '@/components/usage';
// import Showcase from '@/components/showcase';
// import Incentive from '@/components/incentive';
// import Brand from '@/components/brand';
import { useScroll } from '@/utils/hooks/useScroll';
import componentsData from '@/data/components.json';

const Page = () => {
	const { registerRef, scrollToRef } = useScroll();
	const exploreRef = registerRef('explore');
	const analyzeRef = registerRef('analyze');

	const {
		features,
		sponsor,
		steps,
		standards,
		why,
		solutions,
		usage,
	} = componentsData;

	return (
		<>
			{/* <Notification /> */}
			{/* <Hero scrollToExplore={ scrollToExplore } /> */}
			{/* <SearchBar /> */}
			<HeroSecond
				scrollToExplore={ () => scrollToRef('explore') }
				scrollToAnalyze={ () => scrollToRef('analyze') }
			/>
			<Sponsor items={ sponsor.items } />
			<div ref={ exploreRef as any }></div>
			<ScrollText />
			<Vision />
			<ProblemSection />
			<Market />
			<FullWidthSection />
			{/* Pricing toggle inserted below market */}
			<PricingToggle />
			{/* <Features items={ features.items } /> */}
			{/* <Testimonials /> */}
			{/* <Pricing /> */}
			<Faq />
			{/* <FinalCta /> */}
			{/* <Calculator /> */}
			{/*<Steps items={ steps.items }/>*/}
			{/* <Standards items={ standards.items } /> */}
			{/* <Why providers={ why.providers } categories={ why.categories } /> */}
			{/* <Solutions items={ solutions.items } /> */}
			{/* <Usage items={ usage.items } /> */}
			{/* <Showcase /> */}
			<div ref={ analyzeRef as any }></div>
			{/*<Incentive />*/}
			{/* <Brand /> */}
		</>
	);
};

export default Page;
